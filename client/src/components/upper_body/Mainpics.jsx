import React, { useState } from 'react';

import "../mainpics.css"
import PicsModal from './pics-modal';
import PicsDetail from './pics-detail';

const Mainpics = ({ propImages, setSaveFav, saveFav, signedIn,
                    setSignedIn, siteUsers, propertyName }) => {

    const [picsOpen, setPicsOpen] = useState(false);

    return (
        <div className="mainpicscontainer" style={{marginBottom: "50px"}}>
            <div className="large-image" id="imgWrapper">
                <button
                    onClick={() => setPicsOpen(true)}
                    id='picsBtn'
                >
                    {/* Large */}
                    {
                        propImages && propImages[0] &&
                         <img src={propImages[0].image} alt="" width="1120" height="560" style={{cursor:'pointer'}}/>
                    }
                </button>
                <PicsModal
                    picsOpen={picsOpen}
                    onClose={() => setPicsOpen(false)}
                >
                    <PicsDetail 
                        propImages={propImages}
                        setSaveFav={setSaveFav}
                        saveFav={saveFav}
                        signedIn={signedIn}
                        setSignedIn={setSignedIn}
                        siteUsers={siteUsers}
                        propertyName={propertyName}
                    />
                </PicsModal>
            </div>
            <div className="column" >
                <div className="row" id="imgWrapper">
                    <button
                        onClick={() => setPicsOpen(true)}
                        id='picsBtn'
                    >
                        {/* Column Image 1 */}
                        {
                            propImages && propImages[2] &&
                                <img src={propImages[2].image} alt="" width="272" height="280" style={{cursor:'pointer'}}/>
                        }
                    </button>
                    <PicsModal
                        picsOpen={picsOpen}
                        onClose={() => setPicsOpen(false)}
                    >
                        <PicsDetail />
                    </PicsModal>
                    </div>
                <div className="row" id="imgWrapper">
                    <button
                        onClick={() => setPicsOpen(true)}
                        id='picsBtn'
                    >
                        {/* Column Image 2 */}
                        {
                            propImages && propImages[3] &&
                                <img src={propImages[3].image} alt="" width="272" height="280" style={{cursor:'pointer'}}/>
                        }
                    </button>
                    <PicsModal
                        picsOpen={picsOpen}
                        onClose={() => setPicsOpen(false)}
                    >
                        <PicsDetail />
                    </PicsModal>
                </div>
            </div>
            <div className="column" >
                <div className="row" id="imgWrapper">
                    <button
                        onClick={() => setPicsOpen(true)}
                        id='picsBtn'
                    >
                        {/* Column Image 3 */}
                        {
                           propImages && propImages[4] &&
                             <img src={propImages[4].image} alt="" width="272" height="280" style={{cursor:'pointer', borderTopRightRadius: '20px'}}/>
                        }
                    </button>
                    <PicsModal
                        picsOpen={picsOpen}
                        onClose={() => setPicsOpen(false)}
                    >
                        <PicsDetail />
                    </PicsModal>
                </div>
                <div className="row" id="imgWrapper" style={{ position: 'relative' }}>
                    <button
                        onClick={() => setPicsOpen(true)}
                        id='picsBtn'
                    >
                        {/* Column Image 4 */}
                        {
                            propImages && propImages[5] &&
                                <img src={propImages[5].image} alt="" width="272" height="280" style={{cursor:'pointer', borderBottomRightRadius: '20px'}}/>
                        }

                        <button style={{ position: 'absolute', bottom: 25, right: 25, display: 'flex', alignItems: 'center', height: '30px', width: '150px', cursor:'pointer', whiteSpace: "nowrap"}}>
                            <img src='../images/picmenudots.png' alt='' style={{ display: 'inline', height: '15px', marginRight: '5px', width: '15px' }} />
                            &#9783; Show all photos
                        </button> 
                    </button>
                    <PicsModal
                        picsOpen={picsOpen}
                        onClose={() => setPicsOpen(false)}
                    >
                        <PicsDetail 
                            propImages={propImages}
                        />
                    </PicsModal>
                </div>
            </div>
        </div>
    );
}

export default Mainpics