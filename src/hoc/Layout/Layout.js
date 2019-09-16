import React  from 'react';
import { connect } from 'react-redux'
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import ModalForm from '../../components/Forms/ModalForm/ModalForm';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';

const Layout = props => {

    return (
        <Aux>
            <Modal>
                    <ModalForm />
            </Modal>
            <Toolbar auth={props.isAuth}/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);