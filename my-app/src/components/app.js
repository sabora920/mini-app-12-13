import React from 'react';
import Image from './images';
import JsonImages from './pics.json';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          radioButtonSelected: ""
          };
    }

    handleOptionChange(changeEvent) {
      this.setState({
        radioButtonSelected: changeEvent.target.value
      });
    }

    render() {
      // let surprise;
      // if(this.state.radioButtonSelected!==""){
      //   surprise=<div><SurpriseImage selected={this.state.radioButtonSelected} /></div>
      // }
      let image;
      if(this.state.radioButtonSelected!==""){
        image = <Image pictures={JsonImages} selected={this.state.radioButtonSelected} />
      }

        return (
          <div>
            <form className="buttons-form">
              <div>
                <label>
                  <input type="radio" value="0" 
                    checked={this.state.radioButtonSelected==="option1"}
                    onChange={e=>this.handleOptionChange(e)} />
                  Option 1           
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="1" 
                    checked={this.state.radioButtonSelected==="option1"}
                    onChange={e=>this.handleOptionChange(e)} />
                  Option 2           
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="2" 
                    checked={this.state.radioButtonSelected==="option1"}
                    onChange={e=>this.handleOptionChange(e)} />
                  Option 3           
                </label>
              </div>
            </form>
            {image}
          </div>
        )
  }
}
