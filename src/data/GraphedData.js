import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
    BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const BottomSection = styled.div`
    position: absolute;
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    top: 0px;
    gap : 8px;
    .color--box {
        background: ${({primary}) => (primary ? '#82ca9d' : '#8884d8')};
        width : 20%;
        height: 100%;
        border: 2px solid black ;
    }
`;

const GraphedData = ({ dataGiven, graphId, keysAndUnits}) => {
    const style = { width: "90%", height: "80%",position : 'relative',display:'flex',justifyContent :'center', alignItems : 'center' } 
    const fontColor = "#000000"
    console.log(keysAndUnits);
    const {dataKeyOne, dataKeyTwo, labelX, labelY} = keysAndUnits;
    switch (graphId) {
      case 0:
        return (
            <div style={style} >
                <ResponsiveContainer width="100%" height="70%">
                    <LineChart
                        width={500}
                        height={300}
                        data={dataGiven}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKeyOne} label={{ value: labelX, position: "top", fill: fontColor }} />
                        <YAxis  />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKeyTwo} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
            </div>
        )
  
      case 1:
        return (
          <div style={style}
          >
            <ResponsiveContainer width="99%" height="70%">
              <AreaChart
                width={200}
                height={200}
                data={dataGiven}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKeyOne} tick={{ fontWeight: "800" }}  label={{ value: labelX, position: "top", fill: fontColor }} />
                <YAxis  />
                <Tooltip />
                <Area type="monotone" dataKey={dataKeyTwo} stackId="1" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
  
      case 2:
        return (
          <div style={style}>
            <ResponsiveContainer width="99%" height="70%">
              <BarChart
                width={500}
                height={300}
                data={dataGiven}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
  
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis name={dataKeyOne} dataKey={dataKeyOne} tick={{ fontWeight: "800" }}  label={{ value: labelX, position: "top", fill: fontColor }} />
                <YAxis tick={{ fontWeight: "800" }} />
                <Tooltip />
                <Bar dataKey={dataKeyTwo} fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
      case 3:
        return (
          <div style={style}
          >
            <ResponsiveContainer width="99%" height="70%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataGiven}>
                <PolarGrid />
                <PolarAngleAxis dataKey={dataKeyOne} tick={{  fontWeight: "800", opacity: 0 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fontWeight: "800", opacity: 0 }} />
                <Radar name={dataKeyTwo} dataKey={dataKeyTwo} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
  
      default:
        return <div>nothing</div>
    }
}

export default GraphedData
