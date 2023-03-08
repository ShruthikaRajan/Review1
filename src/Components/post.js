import axios from "axios";
import React, { Component } from "react";
class Post extends Component {
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

handleamountChange = (event) => {
    this.setState({ amount:event.target.value});
}
handledateChange = (event) => {
    this.setState({ date:event.target.value});
}
handletimeChange = (event) => {
    this.setState({ time:event.target.value});
}
handletour_spotChange = (event) => {
    this.setState({ tour_spot:event.target.value});
}
handleweather_conditionChange = (event) => {
    this.setState({ weather_condition:event.target.value});
}
handleidChange = (event) => {
    this.setState({ id:event.target.value});
}
handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        name : this.state.name,
        amount : this.state.amount,
        date: this.state.date,
        time : this.state.time,
        tour_spot : this.state.tour_spot, 
        weather_condition : this.state.weather_condition,
        id: this.state.id,       
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="login-form">
            <label className="login-label">Name</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
            />

            <label className="login-label">Amount</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.amount}
                onChange ={this.handleamountChange}
            />

            <label className="login-label">Date</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.date}
                onChange ={this.handledateChange}
            />

            <label className="login-label">Time</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.time}
                onChange ={this.handletimeChange}
            />

            <label className="login-label">Tour_spot</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.tour_spot}
                onChange ={this.handletour_spotChange}
            />

            <label className="login-label">Weather_condition</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.weather_condition}
                onChange ={this.handleweather_conditionChange}
            />

            <label className="login-label">Id</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleidChange}
            />
            <button className="login-button" type="submit"> Submit </button>
        </form>
    );
  }
}

export default Post;