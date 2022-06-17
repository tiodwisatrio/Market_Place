import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems, addToCart}) => {
  return (
    <>
        {/* <section className="flash background">
            <div className="container">
                <div className="header f_flex">
                    <i className="fa fa-bolt"></i>
                    <h1>Flash Deals</h1>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart} />
            </div>
        </section> */}

        <section className='flash background'>
        <div className="container">
                <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                          <i className="fa fa-bolt"></i>
                                <h2>Flash Deals</h2>
                        </div>

                        <div className="heading-right row">
                            <span style={{color: "#f26e11"}}>View All</span>
                            <i className='fa fa-caret-right' style={{color: "#f26e11"}}></i>
                        </div>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart} />
            </div>
        </section>
    </>
  )
}

export default FlashDeals