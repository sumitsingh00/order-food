import React from 'react'
import Link from 'next/link'

export default function RestaurantHeader() {
  return (
    <div className='header-wrapper'>

        <div>
            <img style={{width:100}} src='https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png'></img>
        </div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Login/SignUp</Link>
            </li>
            <li>
                <Link href="/">Profile</Link>
            </li>
            
        </ul>

      
    </div>
  )
}
