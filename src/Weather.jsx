import React,{useState,useEffect} from 'react';
import waves from './waves.png';
const Weather = () => {
    const [city,setCity] = useState();
    const [search,setSearch]=useState("solapur");
    useEffect(()=>{
        const fetchApi= async()=>{
            if(Location.protocol==='http:'){
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c6fc91b922cea248d23b3c5627e58562`;
            const res = await fetch(url);
            const resJson = await res.json();
            console.log(resJson);
            setCity(resJson.main);
            }
        }
        fetchApi();
    },[search]);

    return (
        <>
        <div className="box">
            <div className="input_box">
                <input className="in" type="text" onChange={(event) =>{
                                  setSearch(event.target.value)
                                  }} value={search} />
                 {/* <img src={waves} className="water" alt="wave" />                  */}
                         
                                 
              {!city ? (<p className="Not">No Data found</p> ):
              (<div>
                <div className="info">
                <h2 className="location"> 
                        <i  className="fas fa-street-view fa-2x"> {search} </i> 
                  </h2>

                    <div className="cel">
                    <h1 className="temp">
                          {city.temp}°C
                    </h1>
                    <br/><br/>
                    <h3 className="temp_max">
                     Min : {city.temp_min}°C | Max : {city.temp_max}°C
                    </h3>
                    </div>
                    
                    <div className="wave-one">
                    <img src={waves} className="water" alt="wave" />                 

                    </div>
                     <div className="wave-two"></div>
                      <div className="wave-three"></div>
                    
                      </div>
              </div>)}
              </div>   
      </div>
 
        </>
    );
}

export default Weather;
