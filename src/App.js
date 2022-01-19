
import './App.css'
import React, { Component } from 'react'
import BikeType from './components/BikeType'
import TotalPrice from './components/TotalPrice'
import Calendar from './components/Calendar'
import Accessories from './components/Accessories'
import Comparison from './components/Comparison'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPrice: 0,
      days: 5,
      extras: 1,
      limit: 0,
      
      accessories: {
        img1: "images/stresni.jpg",
        img2: "images/zadni2.jpg",
        height: "190px",
      },
      calendar: {
        img: "images/calendar.png",
        height: "163px",
      },
      bikes: [
        {
          id: "1",
          label: "Horské kolo",
          price: 500,
          count: 1,
          checked: false,
          description: "Kolo vhodné pro jízdu v terénu, zvládá jakýkoliv povrch.",
          img: "images/mtb.jpg"

        },
        {
          id: "2",
          label: "Silniční kolo",
          price: 1500,
          count: 1,
          checked: false,
          description: "Kolo vhodné pro jízdu na pevných površích. Není vhodné do terénu.",
          img: "images/road.jpg"

        },
        {
          id: "3",
          label: "Gravel",
          price: 2500,
          count: 1,
          checked: false,
          description: "Jedná se o silniční kolo vhodné i do méně náročného terénu.",
          img: "images/gravel.jpg"
        },
        {
          id: "4",
          label: "Dětské kolo",
          price: 200,
          count: 1,
          checked: false,
          description: "Kolo pro nejmenší. Máme různé velikosti, s možností postranních koleček.",
          img: "images/kids.jpg"
        },

      ],

    }
  }

  SelectBike = (event) => {
    let from = event.target.name
    let index = parseInt(event.target.getAttribute("data-pos")) - 1
    let bikes = [...this.state.bikes]
    if (from === 'value') {
      let val = event.target.value
      if (val < 1)
        val = 1
      let item = { ...bikes[index], count: val }
      bikes[index] = item
      if (val > 10)
        val = 10
      item = { ...bikes[index], count: val }
      bikes[index] = item
    }
    else {
      let val = event.target.checked
      let item = { ...bikes[index], checked: val }
      bikes[index] = item
    }
    this.setState({ bikes: bikes })
  }
  NumberOfDays = (event) => {
    this.setState({ days: event.target.value })
  }
  AddExtras = (event) => {
    this.setState({ extras: event.target.value })
  }

  TotalSum = () => {
    let checkedBikes = this.state.bikes.filter(bike => bike.checked === true)
    let total = (Math.floor((checkedBikes.reduce((a, v) => a = (a + v.price * v.count), 0)) * this.state.days * this.state.extras))
    console.log(total)
    this.setState({ totalPrice: total })
    
  }
  MaximumLimit = (event) => {
    this.setState({ limit: event.target.value})
  }

  render() {
    const mystyle = {
      color: "white",
      textShadow: "2px 2px black",
    };

    return (
      <div className='App mb-5'>
        <div className="container text-center">
          <h1 className="d-flex justify-content-center mt-5 mb-5" style={mystyle}>Půjčovna kol</h1>
          <h2 className="d-flex justify-content-center mt-5 mb-5" style={mystyle}>Výběr kola</h2>
          <div className="row">
            {this.state.bikes.map((bike) => <BikeType
              id={bike.id}
              key={bike.id}
              label={bike.label}
              style={{textAlign:"justify", height: "5em"}}
              price={bike.price}
              img={bike.img}
              description={bike.description}
              value={bike.count}
              checked={bike.checked}
              onChange={(event) => this.SelectBike(event)}
            />)}
          </div>
          <h2 className="d-flex justify-content-center mt-5 mb-5" style={mystyle}>Příslušenství</h2>
          <Accessories
            onChange={(event) => this.AddExtras(event)}
            img1 = {this.state.accessories.img1}
            img2 = {this.state.accessories.img2}
            height1= {this.state.accessories.height}
            height2={{height: "190px"}}
            text={{textAlign: "center"}}
          />
          <div className="row mt-5 mb-5">
            <div className="col-md-6">
              <Calendar
                img= {this.state.calendar.img}
                height1= {{height: "163px"}}
                height2= {this.state.calendar.height}
                onChange={(event) => this.NumberOfDays(event)}
              />
            </div>
            <div className="col-md-6">
              <TotalPrice
                onClick={()=> this.TotalSum()}
                total={this.state.totalPrice}
                onChange={(event) => this.AddExtras(event)}
              />
              <Comparison
                onChange={(event) => this.MaximumLimit(event)}
                limit={this.state.limit}
                total={this.state.totalPrice}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
