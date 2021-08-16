import React, { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils';
import styled, { css } from 'styled-components/macro'
import GraphedData from '../../../data/GraphedData';
import { ArryedData, Infos, reducer } from '../../../data/MenuData';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import '../Styledbase.css'
import { getKeysAndUnits } from '../../../data/SpecialFucntions';
import Analysis from '../../../data/Analysis';

const customBoxSettings = css`
    flex: 1;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    border: 2px solid #7A838C;
    border-radius: 3px;
    position: relative;

    .arrows--container {
        position: absolute;
        top:0px;
        left:0px;
        display:flex;
        align-items: center;
        justify-content: center;
        gap:5px;
    }
    .title--container{
        position: absolute;
        top:0px;
        right: 10px;

        h4 {
            font-size: 18px;
            color: #7A838C;
            font-weight: 400;
        }
     }
`;
const customRowSettings = css`
    width: 100%;
    display: flex;
    gap: 5px;
    padding: 5px;
`;

const Row = styled.div`
    ${customRowSettings}
`
const CarbonData = styled.div`
    ${customBoxSettings}
`;
const Elexon = styled.div`
    ${customBoxSettings}
`;


const BankEnergi = () => {
    const { carbonExported, elexonDataExported,
        freqElexonExported, solarExported,
        transmitElexonExported, windOffShoreExported,
        windOnShoreExported, priceElexonExported } = Infos();
    
    const [{ carbonDataI,
        elexonData,elexonPriceData,elexonFreqData, elexonTransmitData,solarData,
        tempData, windData }, dispatch] = useReducer(reducer, {
            carbonDataI: { graphIndex: 1 },
            elexonData: { graphIndex: 0 },
            elexonPriceData: { graphIndex: 0 },
            elexonFreqData : {graphIndex: 0},
            elexonTransmitData : {graphIndex: 0},
            solarData: { graphIndex: 0 },
            windData: { graphIndex: 0 },
            tempData: { graphIndex: 0 }
        })

    return (
        <div className="main--bankcontainer">
            <Row>
            <CarbonData>
                <div className="arrows--container">
                        <IoArrowBack className="botton--change" onClick={() => dispatch({ type: 'carbonPrev' })} />
                        <IoArrowForward className="botton--change" onClick={() => dispatch({ type: 'carbonNext' })} />
                    </div>
                    <div className="title--container">
                        <h4>Carbon Intensity</h4>
                    </div>
                    <GraphedData
                        graphId={carbonDataI.graphIndex}
                        dataGiven={carbonExported}
                        keysAndUnits={getKeysAndUnits('carbon')}
                    />
                    <Analysis
                        dataGiven={carbonExported}
                        dataType='carbon'
                    />

                </CarbonData>
                <Elexon>
                    <div className="arrows--container">
                        <IoArrowBack className="botton--change" onClick={() => dispatch({ type: 'elexonPrev' })} />
                        <IoArrowForward className="botton--change" onClick={() => dispatch({ type: 'elexonNext' })} />
                    </div>
                    <div className="title--container">
                        <h4>Elexon data</h4>
                    </div>
                    <GraphedData
                        graphId={elexonData.graphIndex}
                        dataGiven={elexonDataExported}
                        keysAndUnits={getKeysAndUnits('elexon')}
                    />
                    <Analysis
                        dataGiven={elexonDataExported}
                        dataType='elexon'
                    />
                </Elexon>
              
            </Row>

        </div>
    )
}

export default BankEnergi

/**
 <GraphedData
                    graphId = {elexonData.graphIndex}
                    dataGiven = {elexonDataExported}
                    datakeyOne = "Time"
                    datakeyTwo="Demand"



                />
datakeyOne = "Time"
                    datakeyTwo="Demand"
                    unitGivenY = "(Mw)"
                    unitGivenX="(GMT)"
                 border: 1.5px solid #7A838C ;
 */
