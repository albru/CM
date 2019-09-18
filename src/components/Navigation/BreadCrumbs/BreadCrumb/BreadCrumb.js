import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Aux from '../../../../hoc/_Aux/_Aux';
import classes from './BreadCrumb.css';

const breadCrumb = props => {
    return (
        <Aux>
            <Link to={props.href}
                  className={[classes.BreadCrumb, classes[props.type]].join(' ')}>{props.name}</Link>
        </Aux>
    )
};

breadCrumb.propTypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}

export default breadCrumb;