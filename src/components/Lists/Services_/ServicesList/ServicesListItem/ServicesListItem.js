import React from 'react';
import classes from './ServicesListItem.css';
import PropTypes from 'prop-types';

const servicesListItem = props => {
    return (
        <li className={classes.ServicesListItem}>
            <div className={classes.flipcard}>
                <div className={classes.flipcardinner}>
                    <div className={classes.flipcardfront}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={classes.flipcardback}>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}



servicesListItem.propTypes = {
    href: PropTypes.string,
    name: PropTypes.string
}

export default servicesListItem;