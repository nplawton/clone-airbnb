import React from "react";

import "../extendedSearch.css";

const ServicePetScreen = () => {

    const serviceAnimal = 'https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg';

    return (
        <div id="service_container">
            <img 
                src={serviceAnimal}
                id='service_img'
                alt=""
            />
            <h1 id="service_title">
                Service animals
            </h1>
            <h3 id="service_top">
                Service animals aren’t pets, so there’s no need to add them here.
            </h3>
            <h3 id="service_middle">
                Traveling with an emotional support animal? Check out our
            </h3>
            <button id="service_btn">
                accessibility policy.
            </button>
        </div>
    )
}

export default ServicePetScreen;