import React from 'react';
import BreadCrumb from './BreadCrumb/BreadCrumb';

const breadCrumbs = props => {
    const crumbs = props.crumbs.map((item, index) => {
        return (
            <BreadCrumb       
                name={item.crumbName}
                href={item.crumbHref}
                type={item.linkType}
            />
        )
    })
    return (
        <div>
            {crumbs}
        </div>
    )
};


export default breadCrumbs;