import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = props => {
    useEffect(() => {
        console.log('MODAL RENDER')
    })
    
    return (
        <Aux>
            <Backdrop modal={props.modalIsShow}
                      modalClose={props.modalCLose}
            />
            <div className={classes.Modal}
                style={{
                        transform: props.modalIsShow ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.modalIsShow ? '1' : '0'
                    }}>
                <div className={classes.CloseBtn}
                    onClick={props.modalClose}>
                    <div className={classes.Stick1}></div>
                    <div className={classes.Stick2}></div>
                </div>
                {props.children}
            </div>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        modalIsShow: state.modalForm.showModal
    }
}
const mapDispatchToProps = dispatch => {
    return {
        modalClose: () => dispatch({type: 'MODAL_CLOSE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);