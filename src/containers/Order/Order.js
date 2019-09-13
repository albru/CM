import React from 'react';
import { connect } from 'react-redux';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';
import OrderForm from '../../components/Forms/OrderForm/OrderForm';

const AdvConstructor = props => {
    const crumbs = breadCrumbsData.orderCrumb;
    console.log(props)
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

export default connect(mapStateToProps, null)(AdvConstructor);