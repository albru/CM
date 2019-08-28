import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import Aux from '../../hoc/_Aux/_Aux';
import PortfolioSection from '../../components/Sections/Portfolio/Portfolio';
import PortfolioItems from '../../components/Sections/Portfolio/Portfolioitems/PortfolioItems';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Button from '../../components/UI/Button/Button';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';

const portfolio = props => {
    const crumbs = breadCrumbsData.portfolioCrumb;
    const showMoreButton = (
        props.maximumItems === false ?
         <Button clicked={props.showNewPortfolioItem} 
            btnType="MainButton">Показать еще</Button> :
         null
    );

    return (
        <Aux>
            <PortfolioSection> 
                <BreadCrumbs crumbs={crumbs} />
                <PortfolioItems />
                {showMoreButton}
            </PortfolioSection>
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