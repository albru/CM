import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import OrderForm from '../../components/Forms/OrderForm/OrderForm';


import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsData/breadCrumbsData';

const Order = props => {
    const crumbs = breadCrumbsData.orderCrumb;
    return (
        <Section sectionType="Order"> 
            <BreadCrumbs crumbs={crumbs} />
            {props.error || props.success ?  null : <h1> Размещение рекламы </h1> }
            <OrderForm {...props}/>
        </Section>
        
    )
};

const mapStateToProps = state => {
    return {
        error: state.orderForm.fetchResult.error,
        success: state.orderForm.fetchResult.success,
    }
}

Order.propTypes = {
    success: PropTypes.bool,
    error:   PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string
            ])
}

const orderEnhance = compose(
    connect(mapStateToProps, null)
)

export default orderEnhance(Order);