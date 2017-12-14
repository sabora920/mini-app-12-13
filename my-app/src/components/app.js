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
            {JsonImages.map((option,i)=>{
              return(<div><input type="radio" value={i} 
              checked={this.state.radioButtonSelected===i+''}
              onChange={e=>this.handleOptionChange(e)} />{option.description}</div>);
            })}
          </form>
          {image}
        </div>
      )
  }
}

              // console.log(option.description);


            // <input type="radio" value="0" 
            //   checked={this.state.radioButtonSelected==="0"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[0].description}<br/>

            // <input type="radio" value="1" 
            //   checked={this.state.radioButtonSelected==="1"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[1].description}<br/>

            // <input type="radio" value="2" 
            //   checked={this.state.radioButtonSelected==="2"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[2].description}<br/>

            // <input type="radio" value="3" 
            //   checked={this.state.radioButtonSelected==="3"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[3].description}<br/>

            // <input type="radio" value="4" 
            //   checked={this.state.radioButtonSelected==="4"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[4].description}<br/>

            // <input type="radio" value="5" 
            //   checked={this.state.radioButtonSelected==="5"}
            //   onChange={e=>this.handleOptionChange(e)} />
            // {JsonImages[5].description}<br/>