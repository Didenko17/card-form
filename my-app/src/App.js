import React from 'react';
import './App.css';
import Card from './Card';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number:'',
      date:[],
      name:'',
      cvv:'000',
    };
    this.nameChange=this.nameChange.bind(this);
    this.numberChange=this.numberChange.bind(this);
  }
  componentDidMount(){
    const temp = new Date();
    const month=(temp.getMonth()+1<10)?'0'+(temp.getMonth()+1):temp.getMonth()+1;
    this.setState({
      date:[month,temp.getFullYear()-2000]
    })
  }
  nameChange(e){
    if(this.state.name.length<25||e.target.value.length<this.state.name.length){
      this.setState({
        name:e.target.value
      });
    }
  }
  numberChange(e){
    if(this.state.number.length<16||e.target.value.length<this.state.number.length){
      this.setState({
        number:e.target.value
      })
    }
  }
  render(){
    return (
      <div className='App'>
        <Card number={this.state.number} date={this.state.date} name={this.state.name?this.state.name:'Your Name'}/>
        <form>
          <label for="name">Card Holder</label>
          <input id="name" type="text" value={this.state.name} onChange={this.nameChange}></input>
          <label for="number">Card Number</label>
          <input id="number" type="text" value={this.state.number} onChange={this.numberChange}></input>
        </form>
      </div>
      );
  }
}

export default App;
