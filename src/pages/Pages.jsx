import React from 'react'
import Announcement from '../components/announcements/Announcement'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Announcement />
        <Wrapper />
    </>
  )
}

export default Pages