import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from './BreadCrumb/BreadCrumb';

import classes from './BreadCrumbs.css';

const breadCrumbs = props => {
    const crumbs = props.crumbs.map((item, index) => {
        return (
            <BreadCrumb       
                key={index}
                name={item.crumbName}
                href={item.crumbHref}
                type={item.linkType}
            />
        )
    })
    return (
        <div className={classes.BreadCrumbs}>
            {crumbs}
        </div>
    )
};

breadCrumbs.propTypes = {
    crumbs: PropTypes.array
}


export default breadCrumbs;