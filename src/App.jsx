import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function hideAllExcept(showId, displayType = "flex") {
  const sections = ["home", "works", "info", "FAQ", "Contact"];
  
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (id === showId) {
      el.style.display = displayType;
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.opacity = "1";
      }, 10);
    } else {
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.display = "none";
      }, 500); // время transition
    }
  });
}

function home() {
  hideAllExcept("home", "block"); // home — блок
}

function works() {
  hideAllExcept("works", "flex"); // works — flex
}

function info() {
  hideAllExcept("info", "flex");
}

function FAQ() {
  hideAllExcept("FAQ", "flex");
}

function contact() {
  hideAllExcept("Contact", "flex");
}

  return (
    <>
      <div className="box">
        <div className="block">
          <h1>Zubin Nazar</h1>
          <p>designer&Developer</p>
          <p onClick={home}>Home</p>
          <p onClick={works}>projects</p>
          <p onClick={info}>info</p>
          <p onClick={contact}>Contact</p>
          <p onClick={FAQ}>FAQ</p>


        </div>

        <div className="right" id="right">
          <div className="Contact" id="Contact">
            <p className=' po'>Contact Us</p>
            <p>name</p>
            <input></input>
            <p>E-email</p>
            <input></input>
            <p>Contact Number</p>
            <input></input>
            <p>Messenge</p>
            <input></input>
            . <button className='nn'>Submit</button>

          </div>
          <div className="FAQ" id="FAQ">

            <div className="vopros">
              <p>  <p className='gg'>как тебя зовут и сколько тебе лет?</p>
                <p>меня завут Назар мне 13</p></p>
            </div>
            <div className="vopros">
              <p className='gg'>почему ты пошел именно в ШКМ?</p>
              <p>мне было интересно научиться писать код делать сайты и начать розбираться в комп'ютерах </p>
            </div>
            <div className="vopros">
              <p className='gg'>какой язык програмирывания для тебя самый сложный?</p>
              <p>для меня самый сложный язык програмирывания являеться javascript бо там надо углубляться в код и сложная структура</p>
            </div>
            <div className="vopros">
              <p className='gg'>чем ты увликаешься на данный момент?</p>
              <p>играми баскетбол,волейбол</p>
            </div>






          </div>
          <div className="info" id="info">
            <p>@n1farmila
            </p>
            <p>---tiktok</p>
          </div>
          <div className="works" id='works'>
            <div className="maket1">
              <img src="./src/assets/img1.png" alt=""  />
              <p className=''>maket - Boldo</p>
            </div>

            <div className="maket3">
              <img src="./src/assets/img3_1.png" alt="" />
              <p className=''>maket - Global-work</p>
            </div>

            <div className="maket2">
              <img src="./src/assets/img2.png" alt="" />
              <p className=''>maket - Coffe</p>
            </div>

            <div className="maket4">
              <img src="./src/assets/img4.png" alt="" />
              <p className=''>maket - Ukraine</p>
            </div>
             <div className="maket5">
              <img src="./src/assets/img5.png" alt="" />
              <p className=''>maket - Forniture</p>
            </div>
             <div className="maket6">
              <img src="./src/assets/img6.png" alt="" />
              <p className=''>maket - interior</p>
            </div>
          </div>
          <div className="pro_seba" id='home'>
            <p>Назар Зубин Викторович</p>
            <p>Кривой Рог, 2012</p>
            <p>0978876745</p>

          </div>
        </div>

      </div>
    </>
  )
}


export default App
