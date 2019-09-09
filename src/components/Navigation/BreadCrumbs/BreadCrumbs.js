import React from 'react';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import classes from './BreadCrumbs.css';
import PropTypes from 'prop-types';

const breadCrumbs = props => {
    const crumbs = props.crumbs.map((item, index) => {
        return (
            <BreadCrumb       
                name={item.crumbName}
                href={item.crumbHref}
                type={item.linkType}
                key={index}
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