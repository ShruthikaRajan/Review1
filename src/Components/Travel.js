
import React from "react";
import {Link} from "react-router-dom";
function Travel() {
  return (
    <div class="Tourists" >
      <h1>Tourist app</h1>
      <div>
        <label>
          Add Location <input type="text" value=""/>
        </label>
        <button>Search</button>
      </div>

      <div>
        <h2>Locations</h2>
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>Canada</td></tr>
          <tr><td>France</td></tr>
          <tr><td>Switzerland</td></tr>
          <tr><td>Netherland</td></tr>
          <tr><td>India</td></tr>
          <tr><td>Singapore</td></tr>
          <tr><td>Greece</td></tr>
          <tr><td>Paris</td></tr>
          <tr><td>Thailand</td></tr>
          <br></br>
          </tbody>
        </table>
        <button><Link to="/get">Get</Link></button>
        <br></br>
        <button><Link to="/put">Put</Link></button>
        <br></br>
        <button><Link to="/post">Post</Link></button>
        <Link to="/delete">
          <button>Delete</button>
        </Link>
        <br></br>
        
      </div>
    </div>
  );
}
export default Travel;