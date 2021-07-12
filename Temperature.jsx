import React, {Component} from 'react';

     /*============ Styling Part ====================*/
const stylebox ={
  border: '2px solid black',
 padding:'5px 15px 10px 15px',
 boxShadow:'10px 10px 10px 0  gray'
}
const stylec = {
  color: 'red',
  fontWeight: 'bolder',
  fontFamily: 'sans-serif'
  
};
const stylef = {
  color: 'green',
  fontWeight: 'bolder',
  fontFamily: 'sans-serif'
   
};
const stylecontainer = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#efefef',
  display: 'grid',
  placeItems: 'center'
 
};

class Temperature extends Component {
       /*============ State ====================*/
  state = {
    scale: 'c',
    temp: 0,
  };
  Centigrade = (e) => {
    this.setState({scale: 'c', temp: e.target.value});
  };
  Fahrenheit = (e) => {
    this.setState({scale: 'f', temp: e.target.value});
  };
  render() {
       /*============ Logic Part ====================*/
    const temp = this.state.temp;
    const scale = this.state.scale;
    const Centigrade = scale === 'f' ? ((temp - 32) * 5) / 9 : temp;
    const Fahrenheit = scale === 'c' ? (temp * 9) / 5 + 32 : temp;

    return (
      /*============ Main Content ====================*/
      <div style={stylecontainer}>
        <fieldset style={stylebox}>
          <legend style={stylec}> Temperature in Centigrade </legend>{' '}
          <input value={Centigrade} onChange={this.Centigrade} /> <br />
          <br />
          <legend style={stylef}> Temperature in Fahrenheit </legend>{' '}
          <input value={Fahrenheit} onChange={this.Fahrenheit} />{' '}
        </fieldset>{' '}
      </div>
    );
  }
}

export default Temperature;
