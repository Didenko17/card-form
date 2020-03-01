import React from 'react';
import './Card.css';
import visa from './visa.png'
import mastercard from './mastercard.png'
class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            number:['4202','7237','4426','8461'],
            date:['03','20'],
            name:'Your Name',
            cvv:'000',
        };
    }
    checkPaymentSystem(){
        const character=this.state.number[0].charAt(0);
        switch(character){
            case '4':return visa;
            case '5':return mastercard;
            default: return '';
        }
    }
    render(){
        return (
        <div className="bank-card">
            <div className='number'>
                <span className='number-item'>{this.state.number[0]}</span>
                <span className='number-item'>{this.state.number[1]}</span>
                <span className='number-item'>{this.state.number[2]}</span>
                <span className='number-item'>{this.state.number[3]}</span>
            </div>
        <div className='date'>{this.state.date.join('/')}</div>
        <div className='name'>{this.state.name.toLocaleUpperCase()}</div>
        <img className='payment-system' src={this.checkPaymentSystem()} alt='payment system logo'></img>
        </div>
        );
    }
}

export default Card;