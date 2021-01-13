const Card = ( {cardNumber, cardHolder, month, year} ) => {

  const filterNumber = num => {
    return num.split('').map((z, x) => (x >= 5 && x < 14 && x !== 9 && z !== '#') ? '*' : z)
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
        <div className="card__top_chip"></div>
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
          <p className="card__right_date">{month}/{year}</p>
        </div>
      </div>
    </div>
   );
}

export default Card;