import { NavLink } from 'react-router-dom';
import '../style.css';
import logo from "../../Assets/Iteration-1-assets/logo.svg"
import banner from "../../Assets/Iteration-2-aseets/pictures/form-banner.png"


function Header() {

    return (
      <>
        <div className='main-main'>
          <div className='h1-main'>
            <img src={logo}></img>
          </div>
          <div className='color-beige'>
          <img src={banner}/>
          <div className='h1-content'>
            <div className='nav-css'>
            <NavLink exact to="/" activeClassName="selected" className="p-secondary non-selected">
              <p>Anasayfa</p>
            </NavLink>
            <p>-</p>
            <NavLink to="/orderpage" activeClassName="selected" className="p-secondary">
              <p>Sipariş Ver</p>
            </NavLink>
            </div>
          </div>
        

        <div className='main'>
          <div className='secondary'>
            <h2>Position Absolute Acı Pizza</h2>
              <div className='p'>
                  <p className='money'>85.50TL</p>
                  <p className='second'>4.9 (200)</p>
              </div>
              <p className='p-long'>Frontend Dev olarak hala position:absolute
              kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, 
              peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha 
              sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta 
              pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan 
              oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
              </p>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
  
  export default Header