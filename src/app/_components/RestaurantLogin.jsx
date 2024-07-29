import React from "react";

export default function RestaurantLogin() {
  return (
    <div>
      <h1> Restaurant Login </h1>
      <div>
        <div   className="input-wrapper">
          <input type="text" placeholder="Enter email id" className="input-fields" />
        </div>

        <div  className="input-wrapper">
          <input type="password" placeholder="Enter password"  className="input-fields" />
        </div>
        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}
