
import React, { Component } from "react";

export default class Login extends Component {
  render() {

    return (
      <div className="ProductBox">
        <h1>Welcome To E-mazon</h1>
        <h1>Please Log In</h1>
        <form action="/products" method="POST"> 
          <label for="username">Username: </label>
            <input type="text" id="username" name="username" /><br />              
          <label for="password">Password:</label>
            <input type="text" id="password" name="password" />
          <input type="submit" name="name" value="Login as User"/>
          <br />
        </form>
        <br />
        <button class="toMain" type=""> <a href="/products"> HACK MAINFRAME</a> </button><br />
         {/* // ROUTE TO MAIN PAGE SKIPS LOGIN REQ */}
    </div>
    )
  }
}

