import React from 'react';
import classes from './FeaturesItem.css';
import GuaranteeIcon from '@material-ui/icons/Lock';
import ContractIcon from '@material-ui/icons/Assignment';
import RulesIcon from '@material-ui/icons/DoneAll';
import TimeIcon from '@material-ui/icons/Timer';

const featuresItem = props => {
    let icon = null;
    switch(props.icon) {
        case 'GuaranteeIcon':
            icon =  <GuaranteeIcon className={classes.FeaturesIcon}/>
            break;
        case 'ContractIcon':
            icon = <ContractIcon className={classes.FeaturesIcon}/>
            break;
        case 'RulesIcon':
            icon = <RulesIcon className={classes.FeaturesIcon}/>
            break;
        case 'TimeIcon':
            icon = <TimeIcon className={classes.FeaturesIcon}/>
            break;
        default:
            icon = null
    }
        console.log(icon)
        return (
            <li className={classes.FeaturesItem}>
                <div>
                    {icon}
                </div>
                <div>
                    <p>{props.desc}</p>
                </div>
            </li>
        )
};

export default featuresItem;