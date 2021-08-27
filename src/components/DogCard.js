import React, {useState, useEffect} from 'react';

const DogCard = (props) => {

    const defaultSrc = 'https://functions.dogorama-services.com/getStaticAsset?name=park_placeholder';
    const [element,setElement] = useState([]);
    const buttonSetter=()=>{
        props.setButtonSelected(props.data)
    };

    useEffect(() => {
        fetch(`https://functions.dogorama-services.com/getParks?id=${props.data.id}`)
        .then(res => res.json())
        .then(
          (result)=>{
              console.log(result.parks[0]);
            setElement(result.parks[0]);
          },
          (error) => {
            console.log("Error while fetching a single element.");
          }
        )
      }, [])

        return (
            <div className="dogCard">
                <div className="cardImg">
                {props.data.images[0]? <img src={props.data.images[0]} /> : <img src={defaultSrc} />}
                </div>
                <div className="cardTitle">
                    {props.data.name}
                </div>
                <div className="cardAdditional">
                    <div>{parseFloat(element.averageRating).toFixed(2)} out of 5 paws</div>
                    <div>{parseFloat(props.data.distance).toFixed(2)} km away</div>

                </div>
                <div className="cardButtonPart" onClick={buttonSetter}>
                    <span key={props.data.id}>More Info</span>
                </div>

            </div>
        )
  
}

export default DogCard;
