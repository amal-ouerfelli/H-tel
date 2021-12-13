
    import React, { Component } from "react";
    import Reserver from "../components/Reserver";
    import axios from "axios";
    
    
    class Reserve extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            nom_et_prenm : "",
            e_mail : "",
            du :"",
            jusqua :"",
         

          },
          client : []
        };
      }
      
      refreshList = () => {
        axios
          .get("http://127.0.0.1:8000/api/client")
          .then(res => this.setState({ client: res.data }))
          .catch(err => console.log(err));
      };
      componentDidMount() {
        this.refreshList();
      }
      

      
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
        
        axios
          .post("http://localhost:8000/api/client/", item)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { nom_et_prenm : "",
        e_mail : "",
        du :"",
        jusqua :"",
      };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      render() {
        return (
          
          
              <Reserver
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
                
              />
          
            
              
          
          

          
        );
      }
    }
    export default Reserve;