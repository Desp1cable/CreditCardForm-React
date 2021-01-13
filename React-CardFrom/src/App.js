import Card from './card.js';
import Form from './form.js'
import {useState} from 'react';

function App() {

  const [cardNumber, setCardNumber] = useState('#### #### #### ####')
  const [cardHolder, setCardHolder] = useState('Full Name')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YY')
  const [cvv, setCvv] = useState(334)

  return (
    <div className="App">
      <Card cardNumber={cardNumber} cardHolder={cardHolder} month={month} year={year} cvv={cvv} />
      <Form setCardNumber={setCardNumber} setCardHolder={setCardHolder} setMonth={setMonth} setYear={setYear} setCvv={setCvv} />
    </div>
  );
}

export default App;
