import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CV from "../App";

class References extends Component{
    constructor(props){
        super(props);
        this.state={
            linkedin:this.props.linkedin,
            ref_img: this.props.ref_img,
            prof:this.props.prof,
            name: this.props.name,
            current: this.props.current,
            cellphone: this.props.cellphone,
            email: this.props.email,
        }


    }
    render(){

        return(
            <div className="row ref">

                <div className="col-4 pic" align="center">

                    <img  className="img-circle" width="75%" src={this.state.ref_img} alt=""/>

                </div>
                <div className="col-8 info-ref">
                    <a href={this.state.linkedin}><h3 className="name">{this.state.name}</h3></a>
                    <h4 className="data"> {this.state.prof}</h4>
                    <h4 className="data"> {this.state.current}</h4>
                    <h4 className="data"> {this.state.email}</h4>
                    <h4 className="data"> {this.state.cellphone}</h4>

                </div>

            </div>

        );
    }


}

export default References;