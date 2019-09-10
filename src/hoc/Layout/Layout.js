import React  from 'react';
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import ModalForm from '../../components/Forms/ModalForm/ModalForm';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import ModalContextProvider from '../../context/modal-context';
import InputContextProvider from '../../context/input-context';

const Layout = props => {

    return (
        <Aux>
            <ModalContextProvider>
                <Modal>
                    <InputContextProvider>
                        <ModalForm />
                    </InputContextProvider>
                </Modal>
                <Toolbar />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </ModalContextProvider>
            <Footer/>
        </Aux>
    )
};

export default Layout;