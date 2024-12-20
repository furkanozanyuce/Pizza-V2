import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
  } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import logoFooter from "../Assets/Iteration-2-aseets/footer/logo-footer.svg"
import icons1 from "../Assets/Iteration-2-aseets/footer/icons/icon-1.png"
import icons2 from "../Assets/Iteration-2-aseets/footer/icons/icon-2.png"
import icons3 from "../Assets/Iteration-2-aseets/footer/icons/icon-3.png"
import li0 from "../Assets/Iteration-2-aseets/footer/insta/li-0.png"
import li1 from "../Assets/Iteration-2-aseets/footer/insta/li-1.png"
import li2 from "../Assets/Iteration-2-aseets/footer/insta/li-2.png"
import li3 from "../Assets/Iteration-2-aseets/footer/insta/li-3.png"
import li4 from "../Assets/Iteration-2-aseets/footer/insta/li-4.png"
import li5 from "../Assets/Iteration-2-aseets/footer/insta/li-5.png"
import twit from "../Assets/Iteration-2-aseets/footer/twitter.svg"


const initialData = {
  malzemeler: [],
  quantity: 1,
  extraCost: 0,
  totalPrice: 85.50,
  note: "",
  warning: ""
}

const errorMessages = {
    note: 'Sipariş notu en az 5 harften oluşabilir!',
    warining: "En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz!"
  };

function MainForm({setOrderData, extras, initalHamur}) {

  const [formData, setFormData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({note: false, warining: false});

  const history = useHistory();

  useEffect(() => {
    if (formData.note.length >= 5 && formData.malzemeler.length  >= 4 && formData.malzemeler.length <= 10) {
        setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData])

  function handleChange(event) {
    const {type, name, value, checked} = event.target

    setFormData(prevData => {
      let newExtrasCost = prevData.extraCost;
      let newMalzemeler = [...prevData.malzemeler];

      if (type === "checkbox" && name === "malzemeler") {
        if (checked) {
          newMalzemeler.push(value);
          newExtrasCost += 5;
        } else {
          newMalzemeler = newMalzemeler.filter(item => item !== value);
          newExtrasCost -= 5;
        }
      }


      const updatedTotalPrice = (prevData.quantity * 85.50) + newExtrasCost;

      return {
        ...prevData,
        [name]: name === "malzemeler" ? newMalzemeler : value,
        extraCost: newExtrasCost,
        totalPrice: updatedTotalPrice
      };
    });

    const selectedCount = formData.malzemeler.length + (checked ? 1 : -1);
        
      
        setErrors((prevErrors) => ({
            ...prevErrors,
            warining: selectedCount < 4 || selectedCount > 10,
        }));

    if (name === 'note') {
        setErrors({ ...errors, note: value.length < 5 });
      }
  }
  

  function handleQuantityChange(amount) {
    setFormData(prevData => {
      const newQuantity = Math.max(1, prevData.quantity + amount);
      const updatedTotalPrice = (newQuantity * 85.50) + prevData.extraCost;

      return {
        ...prevData,
        quantity: newQuantity,
        totalPrice: updatedTotalPrice
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      console.log("hatalı form");
      return;
    }
    
    axios.post("https://reqres.in/api/pizza", formData)
          .then((response) => {
            setOrderData(response.data);
            history.push("/successpage");
          })
          .catch((error) => {
            console.log(error);
          })
  };

  return (
    <>
    <Header />
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <div className='size-main'>
          <div className='size-boyut'>
            <Label className='title-hamur'>Boyut Seç <span className='span-hamur'>*</span></Label>
              <div className='size-boyut2'>
                <Label>
                  <Input type="radio" name="size" value="kucuk" onChange={handleChange} />Küçük</Label>
                <Label>
                  <Input type="radio" name="size" value="orta" onChange={handleChange} />Orta</Label>
                <Label>
                  <Input type="radio" name="size" value="buyuk" onChange={handleChange} />Büyük</Label>
              </div>
          </div>
          <div className='size-hamur'>
            <Label htmlFor="dough" className='title-hamur'>Hamur Seç <span className='span-hamur'>*</span></Label>
            <Input type="select" name="dough" defaultValue={"-1"} value={formData.dough} onChange={handleChange}>
              <option value="-1" disabled={true}>Hamur Kalınlığı Seçiniz</option>
              {initalHamur.map((dough, ind) => (
                <option key={ind} value={dough.name.toLowerCase()}>{dough.name}</option>
              ))}
            </Input>
          </div>
        </div>
      </FormGroup>
        <div className='extra-label'>
          <Label>
            <h2>Ek Malzemeler</h2>
            <p className='p-long'>Ek malzemelerinizi seçiniz. 5₺</p>
          </Label>
        </div>
      <FormGroup className='extra-css' check>
        <div className='size-boyut3'>
          {extras.map((extra, ind) => (
            <div key={ind} className="extra-checkbox">
              <Label>
                <Input
                  type="checkbox"
                  onChange={handleChange}
                  checked={formData.malzemeler.includes(extra.value)}
                  name="malzemeler"
                  value={extra.value}
                  invalid={errors.warining}
                />
                {extra.label}
              </Label>
              </div>
          ))}
        </div>
      </FormGroup>
      {errors.warining && <div data-cy="check-error" className='extra-label www'>{errorMessages.warining}</div>}
      <div className='note'>
        <FormGroup>
          <Label for="note"><h2>Sipariş Notu</h2></Label>
          <Input
            type="textarea"
            name="note"
            id="note"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            onChange={handleChange}
            value={formData.note}
            invalid={errors.note}
          />
          {errors.note && <FormFeedback data-cy="note-error">{errorMessages.note}</FormFeedback>}
        </FormGroup>
      </div>
      
      <div className='bottom-side'>
        <FormGroup className="quantity-selector">
          <Button onClick={() => handleQuantityChange(-1)} className="decrement btnn">-</Button>
          <span className="quantity">{formData.quantity}</span>
          <Button onClick={() => handleQuantityChange(1)} className="increment btnn">+</Button>
        </FormGroup>
        <div className='bottom-most'>
          <FormGroup>
            <div className="order-summary">
              <h3>Sipariş Toplamı</h3>
              <div className="summary-item">
                <span>Seçimler</span>
                <span>{(formData.totalPrice - (formData.quantity * 85.50)).toFixed(2)}₺</span>
              </div>
              <div className="summary-item total">
                <span>Toplam</span>
                <span>{formData.totalPrice.toFixed(2)}₺</span>
              </div>
            </div>
            <Button color='warning' disabled={!isValid} className="order-button btnn">SİPARİŞ VER</Button>
          </FormGroup>        
        </div>     
      </div>
    </Form>
    <footer>
        <div className='footer-content'>
            <div className='left-side'>
                <img className='wer' src={logoFooter}/>
                <div className='ul-list'>
                    <ul>
                        <li>
                            <img src={icons1}/>
                            341 Londonderry Road, Istanbul Türkiye
                        </li>
                        <li>
                            <img src={icons2}/>
                            aciktim@teknolojikyemekler.com
                        </li>
                        <li>
                            <img src={icons3}/>
                            +90 216 123 45 67
                        </li>
                    </ul>
                </div>
            </div>
            <div className='middle-side'>
                <p className='footer-titles'>Hot Menu</p>
                <div className='p-list'>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
            </div>
            <div className='right-side'>
                <p className='footer-titles'>Instagram</p>
                <div className='images'>
                    <img src={li0}/>
                    <img src={li1}/>
                    <img src={li2}/>
                    <img src={li3}/>
                    <img src={li4}/>
                    <img src={li5}/>
                </div>
            </div>
        </div>
        <div className='end'>
            <p>© 2023 Teknolojik Yemekler.</p>
            <img src={twit}/>
        </div>
      </footer>
    </>
  )
}

export default MainForm
