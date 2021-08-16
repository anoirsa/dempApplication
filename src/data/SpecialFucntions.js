
export const getKeysAndUnits = (string) => {
    var returnedObj = {};
    switch (string) {
        case 'elexon':
            returnedObj.dataKeyOne = "Time"
            returnedObj.dataKeyTwo = "Demand"
            returnedObj.labelX = "Time (GMT)"
            returnedObj.labelY = "Demand (Mw)"
            break;
        case 'carbon':
            returnedObj.dataKeyOne = "To"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Carbon Intensity (gCO2/kWh) "
            returnedObj.dataKeyTwo = "Intensity"
        case 'wind':
            returnedObj.dataKeyOne = "period"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Wind Energy (MW)"
            returnedObj.dataKeyTwo = "quantitysettlementDate"
        case 'solar':
            returnedObj.dataKeyOne = "Time1"
            returnedObj.dataKeyTwo = "generation_mv"
            returnedObj.labelX = "(MW)"
            returnedObj.labelY = "(GMT)"
        case 'energytransmit':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "volume"
            returnedObj.labelX = "date"
            returnedObj.labelY = "Demand (MWh) "
            break;
        case 'elexonprice':
            returnedObj.dataKeyOne = "period"
            returnedObj.dataKeyTwo = "price"
            returnedObj.labelX = "Price (£/MWh)"
            returnedObj.labelY = "Time in GMT"
        case 'energyfrequency':
            returnedObj.dataKeyOne = "time"
            returnedObj.dataKeyTwo = "frequency"
            returnedObj.labelX = "Frequency (Hz)"
            returnedObj.labelY = "Time in GMT"
        case 'energyproduction':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "nuclear"
            returnedObj.labelX = "Energy (MW)"
            returnedObj.lebelY = "Time in GMT"


        default:

            break;
    }
    return returnedObj;


}


export const getFinalArray = (dataScreen, dataType) => {
    var arrayTobReturned = [];
    console.log(dataScreen)
    if (dataScreen) {
        switch (dataType) {
            case 'elexon':
                var sorted = dataScreen.sort((a, b) => a.Demand - b.Demand)
                arrayTobReturned = [
                    {
                        label: 'Peak Energy demand',
                        value: sorted[sorted.length - 1].Demand + ' at ' + sorted[sorted.length - 1].Time + ' GMT',
                    },
                    {
                        label: 'Min Energy demand',
                        value: sorted[0].Demand + ' at ' + sorted[0].Time + ' GMT',
                    }
                ]
                break;
            case 'carbon':
                var sorted = dataScreen.sort((a, b) => a.Intensity - b.Intensity)
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += value.Intensity;
                })
                arrayTobReturned = [
                    {
                        label: 'Max Intensity',
                        value: sorted[sorted.length - 1].Intensity + ' at ' + sorted[sorted.length - 1].To + ' GMT',
                    },
                    {
                        label: 'Min Intensity',
                        value: sorted[0].Intensity + ' at ' + sorted[0].To + ' GMT',
                    }
                    ,
                    {
                        label: 'Average Intensity',
                        value: (sum / dataScreen.length),
                    }
    
                ]
                break;
            case 'solar':
                var sorted = dataScreen.sort((a, b) => a.generation_mv - b.generation_mv)
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += value.generation_mv;
                })
                arrayTobReturned = [
                    {
                        label: 'Max Energy',
                        value: sorted[sorted.length - 1].generation_mv + ' at ' + sorted[sorted.length - 1].Time1 + ' GMT',
                    },
                    {
                        label: ' Min Energy',
                        value: sorted[0].generation_mv + ' at ' + sorted[0].Time1 + ' GMT',
                    },
                    {
                        label: ' Average Energy',
                        value: (sum / dataScreen.length),
                    }
                ]
                break;
            case 'wind':
                var sorted = dataScreen.sort((a, b) => a.quantitysettlementDate - b.quantitysettlementDate)
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += value.generation_mv;
                })
                arrayTobReturned = [
                    {
                        label: 'Max Energy',
                        value: sorted[sorted.length - 1].quantitysettlementDate + ' during ' + sorted[sorted.length - 1].period,
                    },
                    {
                        label: 'Min Energy',
                        value: sorted[0].quantitysettlementDate + ' during ' + sorted[0].period,
                    },
                    {
                        label: 'Average Energy',
                        value: (sum / dataScreen.length)
                    }
                ]
                break;
            case 'elexonprice':
                var sorted = dataScreen.sort((a, b) => a.price - b.price)
                arrayTobReturned = [
                    {
                        label: 'Max Energy Price',
                        value: sorted[sorted.length - 1].price + 'during ' + sorted[sorted.length - 1].period,
                    },
                    {
                        label: 'Min Energy Price',
                        value: sorted[0].price + ' during ' + sorted[0].period,
                    }
                ]
                break;
            case 'energytransmit':
                var sorted = dataScreen.sort((a, b) => a.volume - b.volume)
                arrayTobReturned = [
                    {
                        label: 'Peak Energy Transmit',
                        value: sorted[sorted.length - 1].volume + ' at ' + sorted[sorted.length - 1].date,
                    },
                    {
                        label: 'Min Energy Transmit',
                        value: sorted[0].volume + ' at ' + sorted[0].date,
                    }
                ]
                break;
            case 'energyfrequency':
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += value.frequency;
                })
                arrayTobReturned = [
                    {
                        label: 'Avg frequency',
                        value: (sum / dataScreen.length)
                    }
                ]
                break;
            default:
                break;
        }
        return arrayTobReturned;

    }
    else return null;
}


/***
  var arrayTobReturned = [];
    console.log(dataScreen)
    switch (dataType) {
        case 'elexon':
            var sorted = dataScreen.sort((a, b) => a.Demand - b.Demand)
            arrayTobReturned = [
                {
                    label: 'Peak Energy demand (gCO2/kWh) ',
                    value: sorted[sorted.length - 1].Demand + ' at ' + sorted[sorted.length - 1].Time + ' GMT',
                },
                {
                    label: 'Min Energy demand (gCO2/kWh)',
                    value: sorted[0].Demand + ' at ' + sorted[0].Time + ' GMT',
                }
            ]
            break;
        case 'carbon':
            var sorted = dataScreen.sort((a, b) => a.Intensity - b.Intensity)
            var sum = 0;
            dataScreen.map((value, index) => {
                sum += value.Intensity;
            })
            arrayTobReturned = [
                {
                    label: 'Max Intensity (gCO2/kWh)',
                    value: sorted[sorted.length - 1].Intensity + ' at ' + sorted[sorted.length - 1].To + ' GMT',
                },
                {
                    label: 'Min Intensity (gCO2/kWh)',
                    value: sorted[0].Intensity + ' at ' + sorted[0].To + ' GMT',
                }
                ,
                {
                    label: 'Average Intensity (gCO2/kWh)',
                    value: (sum / dataScreen.length),
                }

            ]
            break;
        case 'solar':
            var sorted = dataScreen.sort((a, b) => a.generation_mv - b.generation_mv)
            var sum = 0;
            dataScreen.map((value, index) => {
                sum += value.generation_mv;
            })
            arrayTobReturned = [
                {
                    label: 'Max Energy (MW)',
                    value: sorted[sorted.length - 1].generation_mv + ' at ' + sorted[sorted.length - 1].Time1 + ' GMT',
                },
                {
                    label: ' Min Energy (MW)',
                    value: sorted[0].generation_mv + ' at ' + sorted[0].Time1 + ' GMT',
                },
                {
                    label: ' Average Energy (MW)',
                    value: (sum / dataScreen.length),
                }
            ]
            break;
        case 'wind':
            var sorted = dataScreen.sort((a, b) => a.quantitysettlementDate - b.quantitysettlementDate)
            var sum = 0;
            dataScreen.map((value, index) => {
                sum += value.generation_mv;
            })
            arrayTobReturned = [
                {
                    label: 'Max Energy (MW)',
                    value: sorted[sorted.length - 1].quantitysettlementDate + ' during ' + sorted[sorted.length - 1].period,
                },
                {
                    label: 'Min Energy (MW)',
                    value: sorted[0].quantitysettlementDate + ' during ' + sorted[0].period,
                },
                {
                    label: 'Average Energy (MW)',
                    value: (sum / dataScreen.length)
                }
            ]
            break;
        case 'elexonprice':
            var sorted = dataScreen.sort((a, b) => a.price - b.price)
            arrayTobReturned = [
                {
                    label: 'Max Energy Price (£/MWh)',
                    value: sorted[sorted.length - 1].price + 'during ' + sorted[sorted.length - 1].period,
                },
                {
                    label: 'Min Energy Price (£/MWh)',
                    value: sorted[0].price + ' during ' + sorted[0].period,
                }
            ]
            break;
        case 'energytransmit':
            var sorted = dataScreen.sort((a, b) => a.volume - b.volume)
            arrayTobReturned = [
                {
                    label: 'Peak Energy Transmit (Mwh)',
                    value: sorted[sorted.length - 1].volume + ' at ' + sorted[sorted.length - 1].date,
                },
                {
                    label: 'Min Energy Transmit (Mwh)',
                    value: sorted[0].volume + ' at ' + sorted[0].date,
                }
            ]
            break;
        case 'energyfrequency':
            var sum = 0;
            dataScreen.map((value, index) => {
                sum += value.frequency;
            })
            arrayTobReturned = [
                {
                    label: 'Avg frequency (Hz)',
                    value: (sum / dataScreen.length)
                }
            ]
            break;
        default:
            break;
    }
 */