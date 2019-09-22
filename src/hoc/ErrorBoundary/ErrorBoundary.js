import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Aux from '../_Aux/_Aux';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
            }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, 'CATCH')
        this.setState({
            errorInfo: errorInfo,
            error: error,
            hasError: true
        })
    }

    render() {
        return (
            <Aux>
                <Modal modalIsVis={this.state.hasError}>
                    <ErrorMessage errorMessage={this.state.errorInfo}/>
                </Modal>
                {this.props.chidren} />
            </Aux>
        )
    }
}


export default ErrorBoundary;