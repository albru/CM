import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import ModalForm from '../../components/UI/Forms/ModalForm';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';

const Layout = props => {

    return (
        <Aux>
            <Modal show={props.modalIsVis} 
                   close={props.modalClose}>
                <ModalForm />
            </Modal>
            <Toolbar sideDrawerToggle={props.sideDrawerToggleHandler}/>
            <SideDrawer 
                open={props.sidDrawerIsVisible}
                closed={props.sideDrawerCloseHandler}
                />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        sidDrawerIsVisible: state.sideDrawer.sideDrawerIsVisible,
        modalIsVis: state.modal.modalIsVisible,
        modalDataSend: state.modal.modalDataSend,
        username: state.modal.username,
        modalError: state.modal.modalError,
        errorMsg: state.modal.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggleHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_TOGGLE}),
        sideDrawerCloseHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_CLOSE}),
        modalOpen: () => dispatch({type: actionTypes.MODAL_OPEN}),
        modalClose: () => dispatch({type: actionTypes.MODAL_CLOSE}),
        modalContentSend: (name) => dispatch({type: actionTypes.MODAL_CONTENT_SEND, username: name}),
        modalErrorHandler: (error) => dispatch({type: actionTypes.MODAL_ERROR, errorName: error})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);