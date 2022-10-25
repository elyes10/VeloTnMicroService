import React from 'react';
import background from "../../assets/gradienta-OzfD79w8ptA-unsplash.jpg";


import Velo_Form from "./Forms/Velo_Form";
import Add_Popup from "./Add_Popup";

function Add_velo(props) {
    return (
        <main style={{ backgroundImage: `url(${background})`}}>

            <div className="main__container" >
                <h1   style={{color: "#1e90ff",fontSize:"25px"}}><strong style={{color: "#1e90ff",fontSize:"30px"}}>Dashboard /</strong> Velos</h1>
                <Add_Popup  >
                    <Velo_Form/>
                </Add_Popup>
            </div>
        </main>
    );
}

export default Add_velo;