// import {useState} from 'react';
// import Card from './card.js';
// import {setBank, setPaymentSystem, setCardNumber, setCardHolder, setFullName, setDate} from './card.js';


const Form = ({ setBank, setPaymentSystem, setCardNumber, setCardHolder, setMonth, setYear, setCvv }) => {
  // setData({
  //   bank: 'lank',
  //   paymentSystem: 'Payment System',
  //   cardNumber: '6666666666666666',
  //   cardHolder: 'Depicable Grand',
  //   month: '06',
  //   year: '22',
  //   cvv: '5151'
  // })

  return ( 
    <form className="form">
      <div className="card_number">
        <label htmlFor="card_number">Card Number</label>
        <input type="number" name="card_number" required onChange={(e) => setCardNumber(e.currentTarget.value)} /> 
      </div>
      <div className="card_holder">
        <label htmlFor="card_holder">Card Holder</label>
        <input type="text" name="card_holder" required onChange={(e) => setCardHolder(e.currentTarget.value)}/>
      </div>

      <div className="form__row">
        <div className="form__row_month">
          <label htmlFor="month">Expiration Date</label><br/>
          <select name="month" id="month" value="Month" required onChange={(e) => setMonth(e.currentTarget.value)}>
            <option value="" disabled selected>Month</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div className="form__row_year">
          <label htmlFor="year"></label>
          <select name="year" id="year" value="Year" required onChange={(e) => setYear(e.currentTarget.value)}>
            <option value="" disabled selected>Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>

        <div className="form__row_cvv">
          <label htmlFor="cvv">CVV</label><br/>
          <input type="number" id="cvv" name="cvv" required onChange={(e)=> setCvv(e.currentTarget.value) }/>
        </div>
      </div>

      <button className="form__submit-btn" type="submit">Submit</button>

    </form>
   );
}
 
export default Form;
