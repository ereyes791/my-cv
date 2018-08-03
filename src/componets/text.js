import React,{Component} from 'react';


class Text extends Component{
    constructor(props){
        super(props);
        this.state={
                    personal:this.props.personal,
                    enjoy:this.props.enjoy,
                    tools:this.props.tools,
        }

    }

    render(){

        return(
            <div className="row text-file">
                <div className="col-4 value">
                        <h2>
                            {this.state.personal}

                        </h2>

                </div>
                <div className="col-4 enjoy">
                    <h2>
                        I enjoy :
                    </h2>
                       <h3>
                           {this.state.enjoy}

                    </h3>



                </div>
                <div className="col-4 tools">

                    <h2>
                        Tools:
                    </h2>
                    <h3>
                        {this.state.tools}

                    </h3>

                </div>




            </div>
        );

    }

}


export default Text;