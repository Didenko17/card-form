import React, { Component } from 'react';
import './Card.css';
import visa from './visa.png'
import mastercard from './mastercard.png'
class Card extends React.Component {
    constructor(props){
        super(props);
    }
    checkPaymentSystem(){
        const character=this.props.number.charAt(0);
        switch(character){
          case '4':return visa;
          case '5':return mastercard;
          default: return '';
        }
    }
    getNumber(number){
        let result=number;
        while(result.length<16){
            result+='#';
        }
        return [result.slice(0,4),result.slice(4,8),result.slice(8,12),result.slice(12)];
    }
    render(){
        const number=this.getNumber(this.props.number);
        console.log(number);
        return (
            <div className="bank-card">
                <div className='number'>
                    <span className='number-item'>{number[0]}</span>
                    <span className='number-item'>{number[1]}</span>
                    <span className='number-item'>{number[2]}</span>
                    <span className='number-item'>{number[3]}</span>
                </div>
            <div className='date'>{this.props.date.join('/')}</div>
            <div className='name'>{this.props.name.toLocaleUpperCase()}</div>
            <img className='payment-system' src={this.checkPaymentSystem()} alt=''></img>
            </div>
        );
    }
}

export default Card;