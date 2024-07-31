"use client";
import React, { useState } from "react";

import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantLogout from "../_components/RestaurantLogout";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import RestaurantFooter from "../_components/RestaurantFooter";
export default function page() {
  const [login, setlogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/Signup page</h1>
        {login ? <RestaurantLogin /> : <RestaurantLogout />}

        <div>
          <button className="button-link" onClick={() => setlogin(!login)}>
            {login
              ? "Do not have account? Signup "
              : "Already have account? Login"}
          </button>
        </div>
      </div>
      <RestaurantFooter/>
    </>
  );
}
