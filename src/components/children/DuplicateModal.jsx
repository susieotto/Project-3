import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

class DuplicateModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            redirectTo: null,
            show: true
        };
    }

    handleClose() {
        this.setState({ show: false, redirectTo: 'login' });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        };

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <p>
                        This Email Address is Already Registered!!
            </p>
                    <p>Please Login with your Email and Password</p>
                    <Button className="btn waves-effect waves-light blue lighten-3 black-text close" onClick={this.handleClose}>Close</Button>
                </Modal>
            </div>

        );
    }
}

export default DuplicateModal;