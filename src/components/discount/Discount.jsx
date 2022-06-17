import React from 'react'
import Dcard from './Dcard'
// import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
        <section className="newArrivals background">
            <div className="container">
                <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src="https://img.icons8.com/windows/64/fa314a/gift.png" alt="" />
                                <h2>Big Discounts</h2>
                        </div>

                        <div className="heading-right row">
                            <span style={{color: "#f26e11"}}>View All</span>
                            <i className='fa fa-caret-right' style={{color: "#f26e11"}}></i>
                        </div>
                </div>
                <Dcard />
            </div>
        </section>

    </>

  )
}

export default Discount