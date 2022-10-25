import React from 'react';
import "./popup.css"
import close from "../../assets/close.png";
import { Router, Route, Link } from 'react-router-dom';

function AddPopup(props) {

    return (
        <div className="popup">
            <div className="popup-inner">
   <Link to="/velosback"><button style={{
            backgroundImage: `url(${close})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className="close-btn" >X</button></Link>
                {props.children}
            </div>
        </div>
    );
}

export default AddPopup;