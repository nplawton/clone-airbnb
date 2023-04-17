import React, { useState } from "react";

import "../amenity.css";
import AmenitiesModal from "./amenities-modal";
import AdmenitiesTable from "./amenities-table";

 
const AmenitiesHome = ({ amentiesData }) => {

    
    const [amenitiesWin, setAmenitiesWin] = useState(false);

   
   
    return(

        <div id="amenity_home">
            <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px', marginLeft: '15px' }}></div>
            <pre><br></br></pre>
            <div id="amenity_sleep">
                <h1 id="sleep_size">Where you'll sleep</h1>
                <br></br>
                <div id="sleep_accomidation">
                    <img 
                        id="sleep_symbol"
                        src={amentiesData[0].sym_descrip}
                        alt=""
                    />
                    <h1 id="sleep_room">Bedroom</h1>
                    <h2 id="sleep_type" >1 {amentiesData[0].symbol}</h2>
                </div>
            </div>
            <pre><br></br></pre>
            <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px' }}></div>
            <pre><br></br></pre>
            <div id="amenity_other">
                <h1 id='other_text' > What this place offers </h1>
                <div id="other_grid">
                    {
                        amentiesData &&
                        amentiesData.slice(2,5).map((symbol, index) =>
                            <h3 
                                key={index}
                                id="symbol_text"
                            >
                                <img 
                                    id="amenity_symbol"
                                    src={symbol.sym_descrip}
                                    alt=""
                                />
                                {symbol.symbol}
                            </h3>
                        )
                    }
                </div>
                <div className="btnWrapper">
                    <button
                        onClick={() => setAmenitiesWin(true)}
                        id="amenityBtn"
                    >
                        Show all amenities
                    </button>
                    <pre><br></br></pre>
                    <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px', marginLeft: '10px' }}></div>
                    <pre><br></br></pre>
                    <AmenitiesModal
                        open={amenitiesWin}
                        onClose={() => setAmenitiesWin(false)}
                    >
                        <AdmenitiesTable
                            amentiesData={amentiesData}
                        />
                        {/* Hi World */}
                    </AmenitiesModal>
                </div>
            </div>
        </div>

    ) 

}

export default AmenitiesHome;