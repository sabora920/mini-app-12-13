import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state={clicked: false};
    }

    render() {
        // Show the button to start with
      if(!this.state.clicked){
        return (
          <div
            onClick={()=>this.setState({clicked: true})}>
            <SurpriseButton />
          </div>
        )
      } else {
        return (
          <div>
            <button
            onClick={()=>this.setState({clicked: false})}>Surprise!</button>
            <div><SurpriseImage /></div>
          </div>
        )
      }
    }
}