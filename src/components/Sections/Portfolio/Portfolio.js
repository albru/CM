import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions/actions';
import PortfolioItems from './Portfolioitems/PortfolioItems';
import BreadCrumbs from '../../Navigation/BreadCrumbs/BreadCrumbs';
import Button from  '../../UI/Button/Button';
import classes from './Portfolio.css';

const portfolio = props => {
    console.log(props)
    const showMoreButton = (
        props.maximumItems === false ?
         <Button clicked={props.showNewPortfolioItem} 
            btnType="MainButton">Показать еще</Button> :
         null
    );

    const crumbs = [
        {
            crumbName:'Главная',
            crumbHref: '/',
            linkType: 'enabled'},
        {
            crumbName:'Портфолио',
            crumbHref: '/portfolio',
            linkType: 'disabled'
        }
    ]
    return (
        <section className={classes.Portfolio}>
            <BreadCrumbs crumbs={crumbs} />
            <h1>Работы</h1>
            <PortfolioItems />
            {showMoreButton}
        </section>
    )
};

const mapStateToProps = state => {
    return {
        maximumItems: state.portfolio.maximumItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNewPortfolioItem: () => dispatch({type: actionTypes.SHOW_MORE_PORTFOLIO_ITEMS})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(portfolio);