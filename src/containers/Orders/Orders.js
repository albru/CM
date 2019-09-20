import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderItems from '../../components/Lists/Orders/OrderItems/OrderItems';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';

import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsData/breadCrumbsData';

const Orders = props => {
    const ordersIsEmpty = !props.ordersIsLoad 
                          || Object.keys(props.ordersIsLoad).length === 0 
                          ? true : false
    const crumbs = breadCrumbsData.ordersCrumb;                      
    let title = ordersIsEmpty ? 'У вас нет заказов' : 'Мои заказы';

    return (
        <Section sectionType="Orders">
            <BreadCrumbs crumbs={crumbs}/>
            <h1>{title}</h1>
            <OrderItems />
        </Section>
    )
}

const mapStateToProps = state => {
    return {
        ordersIsLoad: state.orders.data,
        success: state.orders.fetchResult.success
    }
}

Orders.propTypes = {
    ordersIsLoad: PropTypes.object
}

export default connect(mapStateToProps,null)(Orders);