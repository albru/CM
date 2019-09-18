import React from 'react';

import bgImgWebp from '../../assets/img/main-bg.webp';
import bgImgPng from '../../assets/img/main-bg.png';
import classes from './BgImage.css';
import { userUseApple } from '../../shared/utility';

const bgImage = () => {
    const changedImage = userUseApple() ? bgImgPng : bgImgWebp;
    return (
        <div className={classes.BgImage}>
            <img src={changedImage} alt='background'></img>
        </div>
    )
}

export default bgImage;