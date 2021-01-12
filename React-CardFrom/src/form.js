const Form = () => {
  
  return ( 
    <form className="form">
      <div className="card_number">
        <label htmlFor="card_number">Card Number</label>
        <input type="number" name="card_number" required /> 
      </div>

      <div className="card_holder">
        <label htmlFor="card_holder">Card Holder</label>
        <input type="text" name="card_holder" required/>
      </div>

      <div className="row">
        <div className="month">
          <label htmlFor="month">Expiration Date</label><br/>
          <select name="month" id="month" value="Month" required>
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

        <div className="year">
          <label htmlFor="year"></label>
          <select name="year" id="year" value="Year" required>
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

        <div className="cvv">
          <label htmlFor="cvv">CVV</label><br/>
          <input type="number" id="cvv" name="cvv" required />
        </div>
      </div>

      <button className="b_submit" type="submit">Submit</button>

    </form>
   );
}
 
export default Form;
