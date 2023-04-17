import React from "react";

import "../amenity.css";

const AdmenitiesTable = ({ amentiesData }) => {
    


    return(
        <div id="table_title" >
            <h1 id="table_text">What this place offers</h1>
            {
                amentiesData &&
                    <div id="table_grid">
                        <h1 id="table_room">Bathroom</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[4].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[4].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Bedroom and laundry</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[5].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[5].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Entertainment</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[6].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[6].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Heating and cooling</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[7].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[7].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Home safety</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[8].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[8].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Internet and office</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[2].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[2].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Kitchen and dining</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[9].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[9].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Location features</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[14].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[14].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Outdoor</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[3].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[3].symbol}</h3>
                            <img 
                                id="items_img"
                                src={amentiesData[11].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[11].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Parking Facilities</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[12].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[12].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Services</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[13].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{amentiesData[13].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Not included</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={amentiesData[15].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_not_included">{amentiesData[15].symbol}</h3>
                        </div>
                    </div>
                
            }
        </div>
    )

}

export default AdmenitiesTable;