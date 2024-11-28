import '../style.css';
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg"
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg"
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg"
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg"
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg"
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg"
import kart1 from "../../Assets/Iteration-2-aseets/cta/kart-1.png"
import kart2 from "../../Assets/Iteration-2-aseets/cta/kart-2.png"
import kart3 from "../../Assets/Iteration-2-aseets/cta/kart-3.png"
import food1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png"
import food2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png"
import food3 from "../../Assets/Iteration-2-aseets/pictures/food-3.png"
import logoFooter from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg"
import icons1 from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png"
import icons2 from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png"
import icons3 from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png"
import li0 from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png"
import li1 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png"
import li2 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png"
import li3 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png"
import li4 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png"
import li5 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png"
import twit from "../../Assets/Iteration-2-aseets/footer/twitter.svg"






import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
  } from 'reactstrap';


function FormBottom() {

    return (
    <>
      <div className='buttons'>
        <Button color='white' className='primary-button food-button'>
            <div className='abc'>
            <img src={icon1}/>
            <p className='button-p'>YENİ! Kore</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src={icon2}/>
            <p className='button-p'>Pizza </p> 
            </div>           
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src={icon3}/>
            <p className='button-p'>Burger</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src={icon4}/>
            <p className='button-p'>Kızatmalar</p> 
            </div>      
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src={icon5}/>
            <p className='button-p'>Fast Food</p> 
            </div>          
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src={icon6}/>
            <p className='button-p'>Gazlı İçecek</p>  
            </div>         
        </Button>
      </div>
      
      <div className='cards'>
        <div className='card1'>
            <div>
                <img src={kart1}/>
            </div>
            <div className='card1-contains'>
                <h2>Özel</h2>
                <h2>Lezzetus</h2>
                <p>Position: Absolute Acı Burger</p>
                <div className='defg'>
                <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                </div>
            </div>
        </div>
        <div className='card2-container'>
            <div className='card2'>
                <div>
                    <img src={kart2}/>
                </div>
                <div className='card2-contains'>
                    <h2>Hackathlon</h2>
                    <h2>Burger Menü</h2>
                    <div className='defg'>
                    <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                    </div>
                </div>
            </div>
            <div className='card3'>
                <div>
                    <img src={kart3}/>
                </div>
                <div className='card3-contains'>
                    <h2>Çoooook hızlı</h2>
                    <h2>npm gibi kurye</h2>
                    <div className='defg'>
                    <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='bottom-section'>
        <p className='italic-p'>en çok paketlenen menüler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className='buttons2'>
        <Button color='white' className='primary-button food-button'>
            <div className='abc def'>
            <img src={icon1}/>
            <p className='button-p'>Ramen</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src={icon2}/>
            <p className='button-p'>Pizza </p> 
            </div>           
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src={icon3}/>
            <p className='button-p'>Burger</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src={icon4}/>
            <p className='button-p'>French Fries</p> 
            </div>      
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src={icon5}/>
            <p className='button-p'>Fast Food</p> 
            </div>          
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src={icon6}/>
            <p className='button-p'>Soft Drinks</p>  
            </div>         
        </Button>
        </div>
      </div>
      <div className='bottom-section2'>
        <div className='foods'>
            <div className='food'>
                <img src={food1}/>
                <div>
                    <p><strong>Terminal Pizza</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='food'>
                <img src={food2}/>
                <div>
                    <p><strong>Position Absolute Acı Pizza</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='food'>
                <img src={food3}/>
                <div>
                    <p><strong>useEffect Tavuklu Burger</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
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
  
  export default FormBottom