import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CV from  './componets/cv';
import CVes from  './componets/cv-es';
import Portfolio from  './componets/portafolio';
library.add(faStroopwafel);


class App extends Component {

  render() {
    return (
            <BrowserRouter>
                <div >

                <Route exact path='/my-cv' component={CV}/>

                    <Route exact path='/my-cv-es' component={CVes}/>
                    <Route exact path='/home' component={Portfolio} showIcon={false}/>

                </div>
            </BrowserRouter>

    );
  }
}

export default App;
