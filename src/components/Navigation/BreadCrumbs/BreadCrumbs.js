import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from './BreadCrumb/BreadCrumb';

import classes from './BreadCrumbs.css';

const BreadCrumbs = props => {
    const crumbs = useMemo(() => {
        return props.crumbs.map((item, index) => {
            return (
                <BreadCrumb       
                    key={index}
                    name={item.crumbName}
                    href={item.crumbHref}
                    type={item.linkType}
                />
            )
        })
    },[props.crumbs])
    return (
        <div className={classes.BreadCrumbs}>
            {crumbs}
        </div>
    )
};

BreadCrumbs.propTypes = {
    crumbs: PropTypes.array
}


export default BreadCrumbs;