import React, {Component} from 'react';

class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            network: props.network,
            url: props.url,

        }

    }

    render() {

        return (
            <div className="col">
                <div className="icon" align="center">
                    <a href={this.state.url}>

                        <i className={this.state.network}></i>

                    </a>

                </div>
            </div>

        );
    }
}
export default Network;