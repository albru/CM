import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderItems from '../../components/Lists/Orders/OrderItems/OrderItems';
import Section from '../../components/Section/Section';

const Orders = props => {

    const title = props.ordersIsLoad ? <h1>Мои заказы</h1> : null

    return (
        <Section sectionType="Orders">
            {title}
            <OrderItems />
        </Section>
    )
}

const mapStateToProps = state => {
    return {
        ordersIsLoad: state.orders.data
    }
}

Orders.propTypes = {
    ordersIsLoad: PropTypes.object
}

export default connect(mapStateToProps,null)(Orders);