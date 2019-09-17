import React  from 'react';
import { connect } from 'react-redux'
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import ModalForm from '../../components/Forms/ModalForm/ModalForm';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import * as actions from '../../store/actions/index';

const Layout = props => {

    return (
        <Aux>
            <Modal modalIsVis={props.modalIsVis}
                   modalClose={props.modalClose}>
                <ModalForm />
            </Modal>
            <Toolbar auth={props.isAuth}
                     sideDrawerToggle={props.sideDrawerToggle}
                     sideDrawerClose={props.sideDrawerClose}
                     sideDrawerIsVis={props.sideDrawerIsVis}
                     modalToggle={props.modalToggle}
                     modalIsVis={props.modalIsVis}
                     modalClose={props.modalClose}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        sideDrawerIsVis: state.sideDrawer.sideDrawerIsVisible,
        modalIsVis: state.modalForm.modalIsVis
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggle: () => dispatch(actions.sideDrawerToggle()),
        sideDrawerClose: () => dispatch(actions.sideDrawerClose()),
        modalToggle: () => dispatch(actions.modalToggle()),
        modalClose: () => dispatch(actions.modalClose()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);