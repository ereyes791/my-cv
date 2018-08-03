import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Navportfolio from './navportfolio';
import Profesion from "./profesion";
import Mywork from "./mywork";


library.add(faStroopwafel);
const style={
    transition: 'all .3s ease-in'
};
const showIcon=false;
class Portfolio extends Component {

    constructor(props){
        super(props);

        this.state = {
                    showIcon: this.props.showIcon ,

                 }

    }








    render() {
        return (
            <div className=" col-xs-12 portfolio" >
                <Navportfolio />
                <Profesion/>
                <Mywork/>
            </div>

        );
    }
}

export default Portfolio;