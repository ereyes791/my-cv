import React,{Component} from 'react';
import Myprocess from "./myprocess"
import Text from "./text";

class Mywork extends Component{

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            process: [{

                url_img: "./front.png",
                title: "Frontend",
                personal: "I value simple content structure, clean design patterns, and thoughtful interactions.",
                enjoy: "UX, UI, Web, Mobile, Apps, Logos",
                tools: "7923",
                show_text:false,

            }, {

                url_img: "./backend.png",
                title: "Backend",
                personal: "I value simple content structure, clean design patterns, and thoughtful interactions.",
                enjoy: "UX, UI, Web, Mobile, Apps, Logos",
                tools: "7923",
                show_text:false,
            }, {

                url_img: "./engineer.png",
                title: "Engineer",
                personal: "I value simple content structure, clean design patterns, and thoughtful interactions.",
                enjoy: "UX, UI, Web, Mobile, Apps, Logos",
                tools: "7923",
                show_text:false,
            },{

                url_img: "./Testing.png",
                title: "Testing",
                personal: "I value simple content structure, clean design patterns, and thoughtful interactions.",
                enjoy: "UX, UI, Web, Mobile, Apps, Logos",
                tools: "7923",
                show_text:false,

            }],


        }

    }


    onMouseOver = () => {

        console.log( this.child );

    };

    renderProcess(i) {
        return (
            <Myprocess key={i}
                       onRef={ref => (this[`child${i}`] = ref)}
                       url_img={this.state.process[i].url_img}
                       title={this.state.process[i].title}
                       show_text={this.state.process[i].show_text}
                       onClick={()=>console.log("culo")}
            />


        );
    }
    render(){

        return (
            <div>
            <div className="row mywork"  >

                {this.renderProcess(0)}
                {this.renderProcess(1)}
                {this.renderProcess(2)}
                {this.renderProcess(3)}





            </div>

         </div>
        );
    }


}

export default Mywork;