import React from "react";

function AsteriodCard({absolute_magnitude_h, id, name}) {
    return(
        <>
            <div className='asteriodID'>{id}</div>
            <div className='asteriodName'><span>Name</span>{name}</div>
            <div className='asteriodMagnitude'><span>Magnitude</span>{absolute_magnitude_h}</div>
        </>
    )
}

export default AsteriodCard