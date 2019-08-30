import React from 'react';
import bgImg from '../../assets/img/main-bg.webp';
import classes from './BgImage.css';

const bgImage = props => {
    return (
        <div className={classes.BgImage}>
            <img src={bgImg} alt='background'></img>
        </div>
    )
}

export default bgImage;