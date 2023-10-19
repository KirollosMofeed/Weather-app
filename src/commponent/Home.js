import React from 'react'
import { Link } from 'react-router-dom'
import Pic from '../assets/360_F_76253527_uj2SSuWQ4g8ipQ17NsxeXQoV7FcfoAKY.jpg'
import Image from '../assets/fdcdmlbvzt6wfpdk0oph.jpg'
import './Home.css'
function Home() {
  return (
    <div>
      <div className='intro'>
        <div className='right'>
          <h1>WeatherApp</h1>
          <p>An informational website that explain the weather, and it tells tha weather now.</p>
          <Link to="/today">Today's weather</Link>
        </div>
        <div className='left'>
          <img src={Pic} alt=""/>
        </div>
      </div>
      <div className='temp'>
          <img src={Image} alt=''/>
          <div className='left'>
            <h1>Weather temp</h1>
            <p>The strong temperature contrast between polar and tropical air gives rise to the largest scale atmospheric</p>
          </div>
        </div>
        <div className='hum'>
          <h1>Humidity</h1>
          <p>Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.</p>
        </div>
    </div>
  )
}

export default Home
