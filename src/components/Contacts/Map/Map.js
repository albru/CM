import React from 'react';
import mapImg from '../../../assets/img/map/map.webp';
import mapImgPng from '../../../assets/img/map/map.png';
import classes from './Map.css';
import { checkUserBrowserForRightImages } from '../../../shared/utility';

const map = () => {
    let changedImage = checkUserBrowserForRightImages(null) ? mapImgPng : mapImg;
    return (
        <div className={classes.Map}>
            <img src={changedImage} alt="map"></img>
        </div>
        
    )
}

export default map;