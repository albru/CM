import React from 'react';
import Aux from '../../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import classes from './BreadCrumb.css';

const breadCrumb = props => {
    return (
        <Aux>
            <Link 
                to={props.href}
                className={[classes.BreadCrumb, classes[props.type]].join(' ')}>{props.name}</Link>
        </Aux>
    )
};

export default breadCrumb;