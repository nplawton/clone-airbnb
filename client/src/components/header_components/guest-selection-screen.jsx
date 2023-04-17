import React, { useEffect, useState } from 'react';

import "../extendedSearch.css";
import PetModal from './pet-modal';
import ServicePetScreen from './service-pet-screen';

const GuestSelection = ({ setTotalGuests, setTotalInfants, setTotalPets }) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [pets, setPets] = useState(0);
    const [petScreen, setPetScreen] = useState(false);


    const handleSubtractAdult = () => {       

        if (adults > 1 || children === 0 && infant === 0 && pets === 0){
            setAdults(adults - 1);
        }
    }

    const handleAddAdult = () => {        
        if (adults < 16){
            setAdults(adults + 1);
        }
    }

    const handleSubtractChild = () => {       
        if (children > 0){
            setChildren(children - 1);
        }
    }

    const handleAddChild = () => {        
        if(adults === 0){
            setAdults(adults + 1)
        }
            
        if (children < 16){
            setChildren(children + 1);
        }
        
    }

    const handleSubtractInfant = () => {       
        if (infant > 0){
            setInfant(infant - 1);
        }
    }

    const handleAddInfant = () => {        
        if(adults === 0){
            setAdults(adults + 1)
        }
            
        if (infant < 16){
            setInfant(infant + 1);
        }
        
    }

    const handleSubtractPets = () => {       
        if (pets > 0){
            setPets(pets - 1);
        }
    }

    const handleAddPets = () => {        
        if(adults === 0){
            setAdults(adults + 1)
        }
            
        if (pets < 16){
            setPets(pets + 1);
        }
        
    }

    useEffect(() => {
        setTotalGuests(adults + children);
        setTotalInfants(infant);
        setTotalPets(pets)
    }, [adults, children, infant, pets]);

    return (

        <div>
            <div className='guest_type'>
                <div className='guest_descrip'>
                    <h1 id='guest_adult'>Adults</h1>
                    <h3 id='guest_subtext'>Ages 13 or above</h3>
                </div>
                <div className='guest_count'>
                    <button
                        className='countBtn'
                        onClick={handleSubtractAdult}
                        disabled={adults === 0}
                        style={{cursor: adults === 0 ? 'not-allowed' : 'pointer'}}
                    >
                        &#8722;
                    </button>
                    <h3 id='current_count'>{adults}</h3>
                    <button
                        className='countBtn'
                        onClick={handleAddAdult}
                        disabled={adults === 16}
                        style={{cursor: adults === 16 ? 'not-allowed' : 'pointer'}}
                    >
                        &#43;
                    </button>
                </div>
            </div>
            {/* Section Break */}
            <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
            {/* Section Break */}
            <div className='guest_type'>
                <div className='guest_descrip'>
                    <h1 id='guest_child'>Children</h1>
                    <h3 id='guest_subtext'>Ages 2 - 12</h3>
                </div>
                <div className='guest_count'>
                    <button
                        className='countBtn'
                        onClick={handleSubtractChild}
                        disabled={children === 0}
                        style={{cursor: children === 0 ? 'not-allowed' : 'pointer'}}
                    >
                        &#8722;
                    </button>
                    <h3 id='current_count'>{children}</h3>
                    <button
                        className='countBtn'
                        onClick={handleAddChild}
                        disabled={children === 16}
                        style={{cursor: children === 16 ? 'not-allowed' : 'pointer'}}
                    >
                        &#43;
                    </button>
                </div>
            </div>
            {/* Section Break */}
            <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
            {/* Section Break */}
            <div className='guest_type'>
                <div className='guest_descrip'>
                    <h1 id='guest_infant'>Infants</h1>
                    <h3 id='guest_subtext'>Under 2</h3>
                </div>
                <div className='guest_count'>
                    <button
                        className='countBtn'
                        onClick={handleSubtractInfant}
                        disabled={infant === 0}
                        style={{cursor: infant === 0 ? 'not-allowed' : 'pointer'}}
                    >
                        &#8722;
                    </button>
                    <h3 id='current_count'>{infant}</h3>
                    <button
                        className='countBtn'
                        onClick={handleAddInfant}
                        disabled={infant === 16}
                        style={{cursor: infant === 16 ? 'not-allowed' : 'pointer'}}
                    >
                        &#43;
                    </button>
                </div>
            </div>
            {/* Section Break */}
            <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
            {/* Section Break */}
            <div className='guest_type'>
                <div className='guest_descrip'>
                    <h1 id='guest_pets'>Pets</h1>
                    <button 
                        id='pet_subtext'
                        onClick={() => setPetScreen(true)}
                    >
                        Bringing a service animal?
                    </button>
                </div>
                <div className='guest_count' id='pet_wrapper'>
                    <button
                        className='countBtn'
                        onClick={handleSubtractPets}
                        disabled={pets === 0}
                        style={{cursor: pets === 0 ? 'not-allowed' : 'pointer'}}
                    >
                        &#8722;
                    </button>
                    <h3 id='current_count'>{pets}</h3>
                    <button
                        className='countBtn'
                        onClick={handleAddPets}
                        disabled={pets === 16}
                        style={{cursor: pets === 16 ? 'not-allowed' : 'pointer'}}
                    >
                        &#43;
                    </button>
                    <PetModal
                        petScreen={petScreen}
                        onClose={() => setPetScreen(false)}
                    >
                        <ServicePetScreen />
                    </PetModal>
                </div>
            </div>
        </div>

    )
}

export default GuestSelection