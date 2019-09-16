import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import OrderItems from '../../components/Lists/Orders/OrderItems/OrderItems';
import Section from '../../components/Section/Section';

const Orders = props => {

    const title = props.ordersLoaded ? <h1>Мои заказы</h1> : null

    return (
        <Section sectionType="Orders">
            {title}
            <OrderItems />
        </Section>
    )
}

const mapStateToProps = state => {
    return {
        ordersLoaded: state.orders.data
    }
}

export default connect(mapStateToProps,null)(Orders);