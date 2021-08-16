import React,{useEffect} from 'react'
import {csv} from 'd3';
import carbon_intensity from './carbon_intensity.csv' 

const TryInPage = () => {
    useEffect(() => {
        csv(carbon_intensity).then(data => {
            console.log(data)
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default TryInPage
