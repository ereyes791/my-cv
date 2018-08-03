import React, {Component} from 'react';


class Navportfolio extends Component {

    render() {
        return (
            <div width="100%">

                <div className="row">
                <div className="col-1"></div>

                        <div className="col-3" align="left" >
                            <a className="talktome">
                                <img src={process.env.PUBLIC_URL +'./logo-E:R.png' } width="30" height="40"
                                     />

                            </a>


                        </div>



                    <div className="col-7" align="right" >
                        <div className="talktome">
                            <a href="#" className="button talktome">
                                Talk to me
                            </a>
                        </div>
                    </div>
                    <div className="col-1"></div>

            </div>

         </div>
        );
    }

}


export default Navportfolio;