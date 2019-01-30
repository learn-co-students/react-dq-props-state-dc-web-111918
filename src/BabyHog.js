import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const changeImage = {
  'blue' : BlueBaby,
  'glowing' : GlowingBaby,
  'sun' : SunBaby
}

export default class BabyHog extends Component {

  constructor(props) {
    super(props)

  }

  state = {
    weight: 0
  }


  changeWeight = (e) => {
    const newWeight = e.target.id === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }



  render() {
    console.log(this.props)
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.name} </h1>
        <h3>Weight: {this.state.weight} </h3>
        <h3>Hobby: {this.props.hobby} </h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button onClick={this.changeWeight} id="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} id="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={changeImage[this.props.eyeColor]} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
