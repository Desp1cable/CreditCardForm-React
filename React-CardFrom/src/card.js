// import {useState} from 'react';
// import Form from './form.js';

const Card = ( {bank, paymentSystem, cardNumber, cardHolder, month, year, cvv} ) => {

  // const filterNumber = num => {
  //   let filteredNumber = num.replaceAll(' ').split('').map((z, x) => (x >= 4 && x < 12) ? '*' : z);
  //   let firstPart = filteredNumber.slice(0, 4);
  //   let SecondPart = filteredNumber.slice(4, 8);
  //   let ThirdPart = filteredNumber.slice(8, 12);
  //   let FourthPart = filteredNumber.slice(12, 16);
  //   return {firstPart, SecondPart, ThirdPart, FourthPart}
  // }
  // const {firstPart, SecondPart, ThirdPart, FourthPart} = filterNumber(cardNumber);

  const filterNumber = num => {
    return num.replaceAll(' ').split('').map((z, x) => (x >= 4 && x < 12) ? '*' : z)
  }

  const filterYear = num => {
    if (num === 'YY') return 'YY'
    else return num.substr(2, 4)
  }

  const getPaymentSystem = num => {
    switch(num[0]) {
      case '3':
        return 'American Express'
      case '4': 
       return 'VISA'
      case '5':
        return 'MasterCard'
      case '6': 
        return 'UnionPay'
      default: 
        return 'Payment System'
    }
  } 

  return ( 
    <div className="card">
      <div className='card__top'>
        <div className="card__top_bank"></div>
        <h2 className="card__top_payment-system">{ getPaymentSystem(cardNumber) } </h2>
      </div>
      <p className="card__card-number">{filterNumber(cardNumber)}</p>
      <div className="card__bot">
        <div className="card__bot_left">
          <p className="card__left_card-holder">Full Name</p>
          <p className="card__left_full-name">{cardHolder}</p>
        </div>
        <div className="card__bot_right">
          <p className="card__right_expires">Expires</p>
          <p className="card__right_date">{month}/{filterYear(year)}</p>
        </div>
      </div>
    </div>
   );
}

export default Card;