import InputMask from "react-input-mask";

const Form = ({ setCardNumber, setCardHolder, setMonth, setYear, setCvv }) => {

  return (
    <form className="form">
      <div>
        <label htmlFor="card_number">Card Number</label>
        <InputMask 
          className="form__card-number_input"
          mask="9999 9999 9999 9999" 
          maskPlaceholder={'#### #### #### ####'}
          alwaysShowMask={true}
          name="card_number" 
          required 
          onChange={(e) => setCardNumber(e.currentTarget.value) } 
        /> 
      </div>
      <div>
        <label htmlFor="card_holder">Card Holder</label>
        <input
          className="form__cord-holder_input"
          type="text"
          name="card_holder" 
          required 
          onChange={(e) => setCardHolder(e.currentTarget.value)}
        />
      </div>

      <div className="form__row">
        <div className="form__row_month">
          <label htmlFor="month">Expiration Date</label><br/>
          <select name="month" required onChange={(e) => setMonth(e.currentTarget.value)}>
            <option value="" disabled defaultValue>Month</option>
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
          <select name="year" required onChange={(e) => setYear(e.currentTarget.value)}>
            <option value="" disabled defaultValue>Year</option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="28">2028</option>
            <option value="29">2029</option>
            <option value="30">2030</option>
            <option value="31">2031</option>
            <option value="32">2032</option>
          </select>
        </div>

        <div className="form__row_cvv">
          <label htmlFor="cvv">CVV</label><br/>
          <InputMask 
            mask="9999"
            maskPlaceholder={null}
            name="cvv"
            required 
            onChange={(e)=> setCvv(e.currentTarget.value) }
          />
        </div>
      </div>

      <button className="form__submit-btn" type="submit">Submit</button>

    </form>
  );
}
 
export default Form;
