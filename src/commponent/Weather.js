import React ,{Component} from 'react'
import './Weather.css'
import Humidity from '../assets/7199676.png'
import Max_temp from '../assets/5043205.png'
import Min_temp from '../assets/5041965.png'
import Pressure from '../assets/7649465.png'
const api_key = 'cd0870d03846ccd3374264a2a443b1d2'
class Weather extends Component {
  state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    icon: '',
  }
  getWeather = async (event) => {
    event.preventDefault()
    const country = event.target.elements.country.value
    const city = event.target.elements.city.value
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`)
    const data = await api.json();
    console.log(data)
    if (country && city) {
      const icon_array = data.weather[0].icon.split('') 
      const icon_code = icon_array.splice(0 , icon_array.length-1).join("") 
      this.setState({
        temp: Math.trunc(data.main.temp/10),
        temp_min: Math.trunc(data.main.temp_min/10-11),
        temp_max: Math.trunc(data.main.temp_max/10),
        icon: `https://openweathermap.org/img/wn/${icon_code}d@2x.png`,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        ci:event.target.elements.city.value,
        co:event.target.elements.country.value
      })
    }else {
      this.setState({
        temp: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        icon: '',
        pressure: '',
        ci: '',
        co: ''
      })
    }
  }
  render () {
    return (
      <div>
        <div className='form-app'>
          <h1>Weather App</h1>
          <p>Enter your city and your country</p>
          <form onSubmit={this.getWeather}>
            <div className='inputs'>
            <label className='city' htmlFor='city'>
              <span>City</span>
              <input placeholder='city'  name='city' id='city' type='text'/> 
            </label>
            <label className='country' htmlFor='country'>
              <span>Country</span>
              <input type='text' id='country' name='country' placeholder='Country' />
            </label>
            </div>
            <button>Get weather</button>
          </form>
          <div className='weather' id={this.state.ci && this.state.ci ? 'show' : 'hide'}>
            <div className='temp'>
              <div className='right-temp'>
                <span>{this.state.country},{this.state.city}</span>
                <div>{this.state.temp}&#176;</div>
                <span>{this.state.description}</span>
              </div>
              <div className='left-temp'>
                <img src={this.state.icon} alt=''/>
              </div>
            </div>
            <div className='other'>
              <div className='Hum'>
                <img src={Humidity} alt=''/>
                <span>Humidity</span>
                <span>{this.state.humidity}%</span>
              </div>
              <div className='Hum'>
                <img src={Max_temp} alt=''/>
                <span>Temp_max</span>
                <span>{this.state.temp_max}</span>
              </div>
              <div className='Hum'>
                <img src={Min_temp} alt=''/>
                <span>Temp-min</span>
                <span>{this.state.temp_min}</span>
              </div>
              <div className='Hum'>
                <img src={Pressure} alt=''/>
                <span>Pressure</span>
                <span>{this.state.pressure}mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Weather