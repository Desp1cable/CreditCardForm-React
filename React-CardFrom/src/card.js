const Card = () => {

  return ( 
    <div className="card">
      <div className='top'>
        <h2 className="bank">Bank</h2>
        <h2 className="payment_system">Payment system</h2>
      </div>
      <p className="card_number">#### #### #### ####</p>
      <div className="bot">
        <div className="left">
          <p className="card_holder">card_holder</p>
          <p className="full_name">Full Name</p>
        </div>
        <div className="right">
          <p className="expires">Expires</p>
          <p className="date">MM/YY</p>
        </div>
      </div>
    </div>
   );
}
 
export default Card;