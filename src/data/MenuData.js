import { useState, useEffect } from 'react';
import { csv } from 'd3';
import carbon_intensity from './csvfiles/carbon_intensity.csv'
import elexon from './csvfiles/demand_elexon.csv';
import freqElexon from './csvfiles/freq_elexon.csv'
import solar from './csvfiles/solar.csv'
import weather from './csvfiles/weather.csv'
import transmitElexon from './csvfiles/transmit_elexon.csv'
import windOffShore from './csvfiles/wind_offshore.csv'
import windOnShore from './csvfiles/wind_onshore.csv'
import priceElexon from './csvfiles/price_elexon.csv'


export const reducer = (state, action) => {
    switch (action.type) {
        case 'elexonNext':
            return {
                elexonData: { ...state.elexonData, graphIndex: state.elexonData.graphIndex == 3 ? 0 : state.elexonData.graphIndex + 1 }
            }
        case 'elexonPrev':
            return {
                elexonData: { ...state.elexonData, graphIndex: state.elexonData.graphIndex == 0 ? 3 : state.elexonData.graphIndex - 1 }
            }
        case 'elexonPriceNext':
            return {
                elexonPriceData: { ...state.elexonPriceData, graphIndex: state.elexonPriceData.graphIndex == 3 ? 0 : state.elexonPriceData.graphIndex + 1 }
            }
        case 'elexonPricePrev':
            return {
                elexonPriceData: { ...state.elexonPriceData, graphIndex: state.elexonPriceData.graphIndex == 0 ? 3 : state.elexonPriceData.graphIndex - 1 }
            }
        case 'elexonFreqNext':
            return {
                elexonFreqData: { ...state.elexonFreqData, graphIndex: state.elexonFreqData.graphIndex == 3 ? 0 : state.elexonFreqData.graphIndex + 1 }
            }
        case 'elexonFreqPrev':
            return {
                elexonFreqData: { ...state.elexonFreqData, graphIndex: state.elexonFreqData.graphIndex == 0 ? 3 : state.elexonFreqData.graphIndex - 1 }
            }
        case 'elexonTransmitNext':
            return {
                elexonTransmitData: { ...state.elexonTransmitData, graphIndex: state.elexonTransmitData.graphIndex == 3 ? 0 : state.elexonTransmitData.graphIndex + 1 }
            }
        case 'elexonTransmitPrev':
            return {
                elexonTransmitData: { ...state.elexonTransmitData, graphIndex: state.elexonTransmitData.graphIndex == 0 ? 3 : state.elexonTransmitData.graphIndex - 1 }
            }
        case 'carbonNext':
            return {
                carbonData: { ...state.carbonData, graphIndex: state.carbonData.graphIndex == 3 ? 0 : state.carbonData.graphIndex + 1 }
            }
        case 'carbonPrev':
            return {
                carbonData: { ...state.carbonData, graphIndex: state.carbonData.graphIndex == 0 ? 3 : state.carbonData.graphIndex - 1 }
            }
        case 'tempNext':
            return {
                tempData: { ...state.tempData, graphIndex: state.tempData.graphIndex == 3 ? 0 : state.tempData.graphIndex + 1 }
            }
        case 'tempPrev':
            return {
                tempData: { ...state.tempData, graphIndex: state.tempData.graphIndex == 0 ? 3 : state.tempData.graphIndex - 1 }
            }
        case 'windNext':
            return {
                windData: { ...state.windData, graphIndex: state.windData.graphIndex == 3 ? 0 : state.windData.graphIndex + 1 }
            }
        case 'windPrev':
            return {
                windData: { ...state.windData, graphIndex: state.windData.graphIndex == 0 ? 3 : state.windData.graphIndex - 1 }
            }
        case 'solarNext':
            return {
                solarData: { ...state.solarData, graphIndex: state.solarData.graphIndex == 3 ? 0 : state.solarData.graphIndex + 1 }
            }
        case 'solarPrev':
            return {
                solarData: { ...state.solarData, graphIndex: state.solarData.graphIndex == 0 ? 3 : state.solarData.graphIndex - 1 }
            }
    }
}

export const Infos = () => {
    const [carbonExported, setCarbonExported] = useState(null)
    const [elexonDataExported, setElexonDataExported] = useState(null)
    const [freqElexonExported, setFreqElexonExported] = useState(null);
    const [priceElexonExported, setPriceElexonExported] = useState(null);
    const [solarExported, setSolarExported] = useState(null);
    const [transmitElexonExported, setTransmitElexonExported] = useState(null);
    const [windOffShoreExported, setWindOffShoreExported] = useState(null);
    const [windOnShoreExported, setWindOnShoreExported] = useState(null);
    useEffect(() => {
        csv(carbon_intensity).then(data => {
            setCarbonExported(data)
        });
        csv(elexon).then(data => {
            setElexonDataExported(data)
        });
        csv(freqElexon).then(data => {
            setFreqElexonExported(data)
        });
        csv(solar).then(data => {
            setSolarExported(data)
        });
        csv(transmitElexon).then(data => {
            setTransmitElexonExported(data)
        });
        csv(windOffShore).then(data => {
            setWindOffShoreExported(data)
        });
        csv(windOnShore).then(data => {
            setWindOnShoreExported(data)
        });
        csv(priceElexon).then(data => {
            setPriceElexonExported(data)
        });
    }, [])

    return {
        carbonExported, elexonDataExported,
        freqElexonExported, solarExported,
        transmitElexonExported, windOffShoreExported,
        windOnShoreExported, priceElexonExported
    };

}

/**
  csv(carbon_intensity).then(data => {
        returnedArray.push(data);
    });
    csv(elexon).then(data => {
        returnedArray.push(data);
    });
 */

