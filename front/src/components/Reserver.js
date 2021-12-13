

import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Banner from "./Banner";
import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
        
      }
      
      
      handleChange = e => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <>
    <Hero hero="roomsHero">
        <Banner title="Reserver">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
          <Modal isOpen={true} toggle={toggle}>
            
            <ModalBody>
            <Form className="form">
<FormGroup >
  <Label>Nom et Prénom</Label>
  <Input type="text" name="nom_et_prenm"
                    value={this.state.activeItem.nom_et_prenm}
                    onChange={this.handleChange}  />
</FormGroup>
<FormGroup >
  <Label>Email address</Label>
  <Input type="email" placeholder="name@example.com" name="e_mail"
                    value={this.state.activeItem.e_mail}
                    onChange={this.handleChange}  />
</FormGroup>
<FormGroup >
  <Label>Du</Label>
  <Input type="date" name="du"
                    value={this.state.activeItem.du}
                    onChange={this.handleChange}/>
                    </FormGroup>
  <FormGroup >
  <Label>Jusqu'à</Label>
  <Input type="date" name="jusqua"
                    value={this.state.activeItem.jusqua}
                    onChange={this.handleChange} />
  
</FormGroup>
<FormGroup>
  <Link to="/rooms"  onClick={() => onSave(this.state.activeItem)}> Reserver</Link>
  </FormGroup></Form>
            </ModalBody>
            
          </Modal>
          </>
        );
      }
    }