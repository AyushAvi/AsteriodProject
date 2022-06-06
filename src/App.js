import React, { useEffect, useState } from "react";
import Heading from "./Components/Heading/Heading";
import Text from "./Components/Text/Text";
import AsteriodCard from './Components/AsteriodCard/AsteriodCard';
import DisplayAsteriodCard from './Components/DisplayAsteriodCard/DisplayAsteriodCard';
import LoadingSpin from './Components/LoadingSpin/LoadingSpin';

function App() {
  const [loading,setLoading] = useState(false);
  const [asteriodData,setAsteriodData] = useState([]);
  const [sortedAsteriodData, setSortedAsteriodData] = useState([]);
  const [data, setData] = useState([]);
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(()=>{
    setLoading(true);
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=MFj39gxKZalXcLDyENudUJzsuTveS4R4fOckCT2l')
      .then(res => res.json())
      .then((res) => {setAsteriodData(res.near_earth_objects); setLoading(false)});
  },[]);

  useEffect(()=>{
    setSortedAsteriodData(asteriodData.sort((a,b)=>{
      return a.absolute_magnitude_h - b.absolute_magnitude_h;
    }));
  },[asteriodData])

  function setValues(data){
    setData(data);
    setDisplayPopup(true);
  }

  return (
    <>
      <div className="text-container">
        <Heading text="Asteriods"/>
        <Text text1="Know about all asteriods that revolves around our earth," text2 ="click on displayed asteriods to know more." additionalText = "Observe and Learn"/>
      </div>
      <div className="main-container">
        { loading ? <LoadingSpin/> :
          sortedAsteriodData.map((data,index) => {
            return(
              <div className={data.is_potentially_hazardous_asteroid ? "dangerousAsteriodCard" : "asteriodCard"} key={index} onClick={()=>setValues({...data})}>
                <AsteriodCard {...data}/>
              </div>
            )
          })
        }
      </div>
      <>
        {displayPopup &&
          <div className="popup">
            <button className="goBackBtn" onClick={()=>setDisplayPopup(false)}>Close</button>
            <DisplayAsteriodCard {...data}/>
          </div>
        }
      </>
    </>
  );
}

export default App;