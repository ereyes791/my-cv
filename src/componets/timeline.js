import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CV from "../App";
import Skill from "./skill";
library.add(faStroopwafel);


class Timeline extends Component{
    constructor(props){
        super(props);
        this.state={
            url_img: this.props.url_img,
            school: this.props.school,
            degree:this.props.degree,
            date: this.props.date,
            summary: this.props.summary,
            subjects:this.props.subjects,
        }


    }
    get_Subjects(array){
        console.log(array)
        let lisubs=""


        for (let i = 0; i <array.length ; i++) {
            lisubs= lisubs + "<li>"+array[i].name+"</li>";
        }


        return  (<div dangerouslySetInnerHTML={{ __html:lisubs }} ></div>);

    }

    render(){

        return(
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                    <img src={process.env.PUBLIC_URL+ this.state.url_img} width="100%" alt=""/>
                </div>

                <div className="cd-timeline-content">
                    <h3 className="name">{this.state.school}</h3>
                    <div className="timeline-content-info">
                          <span className="timeline-content-info-title">

                           <h4>
                               <i className="fa fa-certificate" aria-hidden="true"></i>
                               {this.state.degree}</h4>
                          </span>
                        <span className="timeline-content-info-date">

                           <h4>
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                               {this.state.date}</h4>
                          </span>
                    </div>
                    <h5 align="justify">
                        {this.state.summary}
                        <ul className="content-skills">
                            {this.get_Subjects(this.props.subjects)}
                        </ul>
                    </h5>

                </div>
            </div>




        );

    }

}


export default Timeline;