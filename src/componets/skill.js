import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CV from "../App";
library.add(faStroopwafel);



class Skill extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star: this.props.star,
            name: this.props.name,
            icon:'<i  class=" col-2 fa">&#xf005;</i>',

        };
    }

    get_StarNumber(num){
        let startdiv=""
        for (let i = 1; i <=num ; i++) {
            startdiv= startdiv + this.state.icon;
        }


        return  (<div className="row star" dangerouslySetInnerHTML={{ __html:startdiv }} ></div>);


    }

    render(){
        const num=this.state.star;
        return(

            <div className="row skill">

                <div className="col-4 skill-name">

                    <h2 className="soft">{this.state.name} </h2>


                </div>
                <div className="col-8 skill-star">


                    {this.get_StarNumber(num)}

                </div>

            </div>


        );



    }

}
export default Skill;