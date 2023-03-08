import axios from "axios";
import React, { Component } from "react";
class PutValues extends Component {
    constructor(props){
        super(props);
        this.state={
            name:" ",
            amount:" ",
            date:" ",
            time:" ",
            tour_spot:" ",
            weather_condition:" ",
            id:" ",
        }
    }
handleNameChange = (event) => {
    this.setState({ name:event.target.value});
}

handleAmountChange = (event) => {
    this.setState({ amount:event.target.value});
}
handleDateChange = (event) => {
    this.setState({ date:event.target.value});
}
handleTimeChange = (event) => {
    this.setState({ time:event.target.value});
}
handleTour_spotChange = (event) => {
    this.setState({ tour_spot:event.target.value});
}
handleWeather_conditionChange = (event) => {
    this.setState({ weather_condition:event.target.value});
}
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}
handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        name: this.state.name,
        amount:this.state.amount,
        date:this.state.date,
        time:this.state.time,
        tour_spot:this.state.tour_spot,
        weather_condition:this.state.weather_condition, 
        id:this.state.id    
    }
    axios.put('http://127.0.0.1:8080/put',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="login-form" align="center">
            <label className="login-label">Name</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
            /><br/><br/>

            <label className="login-label">Amount</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.amount}
                onChange ={this.handleAmountChange}
            /><br/><br/>

            <label className="login-label">Date</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.date}
                onChange ={this.handleDateChange}
            /><br/><br/>

            <label className="login-label">Time</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.time}
                onChange ={this.handleTimeChange}
            /><br/><br/>

            <label className="login-label">Tour_spot</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.tour_spot}
                onChange ={this.handleTour_spotChange}
            /><br/><br/>
             <label className="login-label">Weather_condition</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.weather_condition}
                onChange ={this.handleWeather_conditionChange}
            /><br/><br/>

            <label className="login-label">Id</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>
            <button className="login-button" type="submit"> Submit </button>
        </form>
    );
  }
}

export default PutValues;