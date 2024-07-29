'use client'
import React, { useState } from 'react'


import RestaurantLogin from '../_components/RestaurantLogin'
import RestaurantLogout from '../_components/RestaurantLogout'

export default function page() {
    const [login, setlogin] = useState(true);
  return (
    <div className='container'>
        <h1>Restaurant Login/Signup page</h1>
        {
          login?<RestaurantLogin/>:<RestaurantLogout/>
        }
        
        
        <button className='button-link' onClick={()=>setlogin(!login)}>{
            
            login?"Do not have account? Signup ":"Already have account? Login"
            }</button>
      
    </div>
  )
}
