import React, { useEffect, useState } from "react";

function DisplayAsteriodCard({id,name,absolute_magnitude_h,is_potentially_hazardous_asteroid,estimated_diameter,close_approach_data}){

    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const currentDate = new Date().toString();
        const currentDateS = currentDate.toString();
        const currentDateEpoch = Date.parse(currentDateS);

        for(let i=0; i<close_approach_data.length; i++){
            if(close_approach_data[i].epoch_date_close_approach < currentDateEpoch){
                setIndex(i);
            }else{
                break;
            }
        }
    },[close_approach_data])

    return(
        <>
            <h3 className="displayID">{id}</h3>
            <h1 className="displayName">{name}</h1>
            <h1 className="displayMagnitude">{absolute_magnitude_h}</h1>
            <h1 className="displayHax">{is_potentially_hazardous_asteroid ? "Yes" : "No"}</h1>
            <div className="displayDiv">
                <h1 className="displayMinDia">{estimated_diameter.kilometers.estimated_diameter_min}</h1>
                <h1 className="displayMinDia">{estimated_diameter.kilometers.estimated_diameter_max}</h1>
            </div>
            <div className="displayDiv">
                <h1 className="displaylApproachDate">{close_approach_data[index].close_approach_date}</h1>
                <h1 className="displaylApproachDistance">{Math.round(close_approach_data[index].miss_distance.kilometers*100)/100}</h1>
            </div>
            <div className="displayDiv">
                <h1 className="displaynApproachDate">{close_approach_data[index+1].close_approach_date}</h1>
                <h1 className="displaynApproachDistance">{Math.round(close_approach_data[index+1].miss_distance.kilometers*100)/100}</h1>
            </div>
        </>
    )
}

export default DisplayAsteriodCard;