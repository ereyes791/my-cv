import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CV from "../App";

class Interest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            img_url: this.props.img_url,
            name: this.props.name,

        }
    }

    render(){
        return(
            <div className="col-4 interest" align="center">
                <img src={this.state.img_url} width="55.6px" alt=""/>
                <div align="center">
                    <h4 className="title">{this.state.name}</h4>

                </div>
            </div>



        );


    }


}

export default Interest;