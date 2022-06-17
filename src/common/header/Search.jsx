import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Search = ({cartItem}) => {
  // Membuat posisi search menjadi fixed
  window.addEventListener("scroll", function() {
    const search = document.querySelector('.search')
    search.classList.toggle('active', this.window.scrollY > 50)
  })
  

  

  return (
    <>
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="search-box f_flex">
          <i className='fa fa-search'></i>
          <input type="text" placeholder='Mau cari apa......' />
          <span>Semua Kategori</span>
        </div>

        <div className="icon f_flex width">
          <i className='fa fa-user icon-circle'></i>
          <div className="cart">
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cartItem.length === 0 ? '0' : cartItem.length}</span>
              </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search