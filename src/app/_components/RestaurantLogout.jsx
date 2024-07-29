import React from "react";

export default function RestaurantLogout() {
  return (
    <div className="text-center">
      <h1> Restaurant SignUp </h1>
      <div>
        <div className="input-wrapper">
          <input
            className="input-fields"
            type="text"
            placeholder="Enter email id"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-fields"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-fields"
            type="password"
            placeholder="confirm password again"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-fields"
            type="text"
            placeholder="Enter restaurant name"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-fields"
            type="text"
            placeholder="Enter city"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-fields"
            type="text"
            placeholder="Enter full address"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-fields"
            type="text"
            placeholder="Enter contact No."
          />
        </div>

        <div className="input-wrapper">
          <button className="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}
