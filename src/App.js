import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const postcodecity= encodeURIComponent("04109 Leipzig");
  const country= encodeURIComponent("DE");
  const setButtonSelected=(datam)=>{
    let url="https://dogorama.app/de-";
    url+=datam.country.toLowerCase()+"/auslaufgebiete/";
    url+=datam.postcodeCity.replace(" ","_")+"/";
    url+=datam.name.replace(" ","_")+"-"+datam.id+"/";
    window.location.href=url;
   
    return datam;
  };
 
  useEffect(() => {
    fetch(`https://functions.dogorama-services.com/getParks?postcodecity=${postcodecity}&country=${country}`)
    .then(res => res.json())
    .then(
      (result)=>{
        setIsLoaded(true);
        //console.log(result.parks);
        setItems(result.parks);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  
  
  //console.log(items[5]);
  if(error){
    return <div>Error: {error.message}</div>;
  } else if(!isLoaded){
    return <div><div className="header"></div><div className="loading">Loading...</div></div>;
  }else{
    return(
      <div>
      <div className="header"></div>
      <div className="cardList">
        {items.map(item => (
          <DogCard setButtonSelected={setButtonSelected} key={item.id} data={item}/>
        ))}
      </div> 
      </div>
    );
  }

}

export default App;
