import React from 'react';
import mapImg from '../../../assets/img/map/map.webp';
import classes from './Map.css';

const map = () => {
    return (
        <div className={classes.Map}>
            <img src={mapImg} alt="map"></img>
        </div>
        
    )
}

export default map;