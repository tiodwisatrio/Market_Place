import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import ilustrasi_kosong from '../assets/ilustrasi_kosong.png'

const Cart = ({cartItem, addToCart, decreaseQty}) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
      <>
         <section className="cart-items">
             <div className="container d_flex">
                 <div className="cart-details">
                     {cartItem.length === 0 && 
                    <div className='no-items product'>
                        <div className="imgKosong">
                            <h2>Yahh, Keranjangmu Masih Kosong😴</h2>
                            <Link to='./'>
                                <h3>Ayo Cari Barang Kesukaanmu</h3>
                            </Link>
                            <img src={ilustrasi_kosong} alt="" />
                        </div>     
                    </div>}

                     {cartItem.map((item) => {
                         const productQty = item.price * item.qty
                         return (
                            <div className="cart-list product d_flex">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                        Harga Barang : <strong> Rp {item.price}.000 </strong> <br />
                                        Jumlah Barang : <strong>{item.qty}</strong>
                                        <span>{productQty.qty}</span>
                                    </h4>
                                </div>
                                <div className="cart-items-function">
                                    {/* <div className="removeCart">
                                        <button>
                                            <i className='fa fa-solid fa-xmark'></i>
                                        </button>
                                    </div> */}

                                    <div className="cartControl d_flex">
                                        <button className='incCart' onClick={() => addToCart(item)}>
                                            <i className='fa fa-plus'></i>
                                        </button>

                                        <button className='deCart' onClick={() => decreaseQty(item)}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="cart-item-price"></div> */}
                            </div>
                            
                         )
                     })}
                 </div>
                 <div className="cart-total product">
                     <h2>Keranjang</h2>
                     <div className="d_flex">
                         <h4>Total Harga : </h4>
                         <h3>Rp {totalPrice}.000</h3>
                     </div>
                 </div>
             </div>
         </section>
      </>
   
  )
}

export default Cart