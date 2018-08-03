import React, {Component} from 'react';
class Profesion extends Component {

    render() {
        return (
            <div>
                <div className="col-12 profesion" align="center">

                    <h2>Computer Science & FullStack Developer</h2>

                    <h4>I design and code beautifully simple things, and I love what I do.
                    </h4>
                    <div className="col-9" align="center" >
                        <div>
                            <a href="#" className="button talktome">

                                <div>
                                    See my work

                                    <i  id="chevron"width="100" className="fas fa-chevron-right"></i>

                                </div>

                            </a>
                        </div>


                    </div>




                </div>
                <img width="100%" src={process.env.PUBLIC_URL+ './mountain.png'} alt=""/>
                <div className="col-12 info">


                    <h2>
                        Hi, I’m Matt. Nice to meet you.
                        <br/>
                        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work
                        for agencies, consulted for startups, and collaborated with talented people to create digital
                        products for both business and consumer use. I'm quietly confident, naturally curious, and
                        perpetually improving my chops.


                    </h2>


                </div>
                <div className="hi-skills"></div>

                </div>

        );
    }
}


export default Profesion;