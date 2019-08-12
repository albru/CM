import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import Aux from '../../hoc/_Aux/_Aux';
import Portfolio from '../../components/Sections/Portfolio/Portfolio';
import PortfolioItems from '../../components/Sections/Portfolio/Portfolioitems/PortfolioItems';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Button from '../../components/UI/Button/Button';

const portfolio = props => {

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
            linkType: 'prev'},
        {
            crumbName:'Портфолио',
            crumbHref: '/portfolio',
            linkType: 'current'
        }
    ];

    return (
        <Aux>
            <Portfolio> 
                <BreadCrumbs crumbs={crumbs} />
                <PortfolioItems />
                {showMoreButton}
            </Portfolio>
        </Aux>
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