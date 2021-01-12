import Card from './card.js';
import Form from './form.js'
import {useState} from 'react';

function App() {

  // const [cardData, setCardData] = useState({
  //   bank: 'Bank',
  //   paymentSystem: 'Payment System',
  //   cardNumber: '4448412345122205',
  //   cardHolder: 'Depicable Grand',
  //   month: '06',
  //   year: '22',
  //   cvv: '5151'
  // })
  // setCardData()

  const [bank, setBank] = useState('Bank')
  const [paymentSystem, setPaymentSystem] = useState('Payment system')
  const [cardNumber, setCardNumber] = useState('################')
  const [cardHolder, setCardHolder] = useState('Card Holder')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YY')
  const [cvv, setCvv] = useState(334)

  // const callbackCvv = data => setCvv(data)
  // const callbackCardNumber = data => setCardNumber(data)

  return (
    <div className="App">
      <Card bank={bank} paymentSystem={paymentSystem} cardNumber={cardNumber} cardHolder={cardHolder} month={month} year={year} cvv={cvv} />
      <Form setBank={setBank} setPaymentSystem={setPaymentSystem} setCardNumber={setCardNumber} setCardHolder={setCardHolder} setMonth={setMonth} setYear={setYear} setCvv={setCvv} />
    </div>
  );
}

export default App;
