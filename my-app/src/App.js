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
      cvv:'',
    };
    this.nameChange=this.nameChange.bind(this);
    this.numberChange=this.numberChange.bind(this);
    this.monthChange=this.monthChange.bind(this);
    this.yearChange=this.yearChange.bind(this);
    this.cvvChange=this.cvvChange.bind(this);
  }
  componentWillMount(){
    const temp = new Date();
    const month=(temp.getMonth()+1<10)?'0'+(temp.getMonth()+1):temp.getMonth()+1;
    this.setState({
      date:[month,temp.getFullYear()-2000]
    })
  }
  nameChange(e){
    if(!e.target.value.match(/[^a-zA-Z-\s]/)&&(this.state.name.length<25||e.target.value.length<this.state.name.length)){
      this.setState({
        name:e.target.value
      });
    }else if(e.target.value.match(/[^a-zA-Z-\s]/)){
      alert('We expect the name to contain uppercase letters, lowercase letters, a hyphen, and a space. If your name contains other characters, please contact our email vladislav.didenko.2001@gmail.com');
    }
  }
  numberChange(e){
    if(!e.target.value.match(/\D/)&&(this.state.number.length<16||e.target.value.length<this.state.number.length)){
      this.setState({
        number:e.target.value
      })
    }else if(e.target.value.match(/\D/)){
      alert('Card Number must contain 16 digits');
    }
  }
  monthChange(e){
    this.setState({
      date:[e.target.value,this.state.date[1]]
    })
  }
  yearChange(e){
    this.setState({
      date:[this.state.date[0],e.target.value]
    })
  }
  cvvChange(e){

    if(!e.target.value.match(/\D/)&&(this.state.cvv.length<3||e.target.value.length<this.state.cvv.length)){
      this.setState({
        cvv:e.target.value
      });
    }else if(e.target.value.match(/\D/)){
      alert('CVV must contain 3 digits');
    }
  }
  setMonth(){
    let result=[];
    const date=new Date();
    const month=date.getMonth()+1;
    const year=date.getFullYear()-2000;
    if(this.state.date[1]>year){
      for(let i=1;i<=12;i++){
      result.push(<option value={i<10?'0'+i:i}>{i}</option>);
      }
    }else{
      for(let i=month;i<=12;i++){
        result.push(<option value={i<10?'0'+i:i}>{i}</option>);
      }
    }
    return result;
  }
  setYear(){
    const date= new Date();
    const year=date.getFullYear()-2000;
    let result=[];
    for(let i=year;i<year+5;i++){
      result.push(<option value={i}>{i}</option>);
    }
    return result;
  }
  render(){
    return (
      <div className='App'>
        <Card number={this.state.number} date={this.state.date} name={this.state.name?this.state.name:'Your Name'}/>
        <form>
          <label for="name">Card Holder:</label>
          <input id="name" type="text" value={this.state.name} onChange={this.nameChange}></input>
          <label for="number">Card Number:</label>
          <input id="number" type="text" value={this.state.number} onChange={this.numberChange}></input>
          <label for="month">Expiration Date:</label>
          <select id="month" value={this.state.date[0]} onChange={this.monthChange}>
            {this.setMonth()}
          </select>
          <select id="year" value={this.state.date[1]} onChange={this.yearChange}>
            {this.setYear()}
          </select>
          <label for="cvv">CVV:</label> 
          <input type="password" id="cvv" value={this.state.cvv} onChange={this.cvvChange}></input>
        </form>
      </div>
      );
  }
}

export default App;
