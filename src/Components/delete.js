import React from 'react';  
// import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Task:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Task
            : response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete('http://127.0.0.1:8080/del/'+id,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Task} = this.state;
    const rows=
    Task.map(Task =>
        <tr key={Task.id}>
            <td className="text-left">{Task.id}</td>
            <td className="text-left">{Task.name}</td>
            <td className="text-left">{Task.amount}</td>
            <td className="text-left">{Task.date}</td>
            <td className="text-left">{Task.time}</td>
            <td className="text-left">{Task.tour_spot}</td>
            <td className="text-left">{Task.weather_condition}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Task.id)} onChange={Task}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        <h3>Data Table</h3>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">id</th>
        <th class="text-left">name</th>
        <th class="text-left">amount</th>
        <th class="text-left">date</th>
        <th class="text-left">time</th>
        <th class="text-left">tour_spot</th>
        <th class="text-left">weather_condition</th>
       
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Deletion;