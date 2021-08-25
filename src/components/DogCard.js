import React from 'react';

const DogCard = (props) => {

    const defaultSrc = 'https://functions.dogorama-services.com/getStaticAsset?name=park_placeholder';

    const buttonSetter=()=>{
        props.setButtonSelected(props.data)
    };
        return (
            <div className="dogCard">
                <div className="cardImg">
                {props.data.images[0]? <img src={props.data.images[0]} /> : <img src={defaultSrc} />}
                </div>
                <div className="cardTitle">
                    {props.data.name}
                </div>
                <div className="cardAdditional">
                    <div>{parseFloat(props.data.distance).toFixed(2)} km away</div>
                    <div>{props.data.city+", "+props.data.country}</div>
                </div>
                <div className="cardButtonPart" onClick={buttonSetter}>
                    <span key={props.data.id}>More Info</span>
                </div>

            </div>
        )
  
}

export default DogCard;
