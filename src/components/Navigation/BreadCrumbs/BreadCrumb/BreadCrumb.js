import React from 'react';
import Aux from '../../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import classes from './BreadCrumb.css';
import PropTypes from 'prop-types';

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