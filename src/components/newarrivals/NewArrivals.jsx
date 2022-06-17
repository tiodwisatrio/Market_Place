import React from 'react'
import Cart from './Cart'

const NewArrivals = () => {
  return (
      <>
        <section className="newArrivals background">
            <div className="container">
            <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" />
                            <h2>New Arrivals</h2>
                    </div>

                    <div className="heading-right row">
                        <span style={{color: "#f26e11"}}>View All</span>
                        <i className='fa fa-caret-right' style={{color: "#f26e11"}}></i>
                    </div>
            </div>
                <Cart />
            </div>
        </section>
      </>
  )
}

export default NewArrivals