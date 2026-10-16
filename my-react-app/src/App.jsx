import './App.css'
import './memberCard.css'
import Header from './components/Header'
import MemberCard from './components/MemberCard'
import Footer from './components/Footer'
import img1 from "./assets/gaa.png"
import img2 from "./assets/rugby.jpg"
import img3 from "./assets/afl.jpg"
import img4 from "./assets/hurling.jpg"

function App() {
  return (
    <>
      <Header title="Sports Club"/>
      <div class="layout">
        <MemberCard img={img1} name="Tom" age={22} sport="GAA" quote="You can’t win derbies with donkeys."/>
        <MemberCard img={img2} name="Colm" age={18} sport="Rugby" quote="Get in position, run hard, demand the ball"/>
        <MemberCard img={img3} name="Conor" age={19} sport="AFL" quote="He’s as useful as an ashtray on a motorbike"/>
        <MemberCard img={img4} name="Danny" age={20} sport="Hurling" quote="I’ve seen better hands on a digital clock."/>
      </div>
      <Footer footer="Copyright reserved"/>
    </>
  )
}

export default App
