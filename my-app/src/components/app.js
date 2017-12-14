import React from 'react';
import Image from './images';
import JsonImages from './pics.json';

export default class Gifs extends React.Component {
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
      let image;
      if(this.state.radioButtonSelected!==""){
        image = <Image pictures={JsonImages} selected={this.state.radioButtonSelected} />
      }

      return (
        <div>
          <form className="buttons-form">
            {JsonImages.map(function(option,i){
              console.log(option.description);
            })}
            <input type="radio" value="0" 
              checked={this.state.radioButtonSelected==="0"}
              onChange={e=>this.handleOptionChange(e)} />
            {JsonImages[0].description}<br/>
            <input type="radio" value="1" 
              checked={this.state.radioButtonSelected==="1"}
              onChange={e=>this.handleOptionChange(e)} />
            {JsonImages[1].description}<br/>
            <input type="radio" value="2" 
              checked={this.state.radioButtonSelected==="2"}
              onChange={e=>this.handleOptionChange(e)} />
            {JsonImages[2].description}<br/>
          </form>
          {image}
        </div>
      )
  }
}
