import React,{Component} from 'react';
import ReactHoverObserver from 'react-hover-observer';
class Myprocess extends Component{

    constructor(props){
        super(props);
        this.state={
                    url_img:this.props.url_img,
                    title:this.props.title,
                    show_text:this.props.show_text,
        }

    }

    Show(){
            this.setState({show_text:true});
        console.log(this.state.show_text);
    }



    render(){

        return (
            <div className=" col-3 process" align="center">

                <div className="round" onMouseOver={() => this.Show()} >

                    <img className="procs" src={process.env.PUBLIC_URL+ this.state.url_img} alt=""/>


                </div>

                <div className=" prostitle" align="center">
                <h2>{this.state.title}</h2>
            </div>

            </div>
        );
    }


}

export default Myprocess;