import axios from "axios";
import React,{Component} from "react";
class GetValues extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/get').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1}>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>date</th>
                        <th>time</th>
                        <th>tour_spot</th>
                        <th>weather_condition</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                               <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>{user.tour_spot}</td>
                            <td>{user.weather_condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default GetValues;