import React from 'react'

const Head = () => {
  return (
    <section className='head'>
      <div className="container d_flex">
        <div className="left row">
          <i className='fa fa-phone'></i>
          <label htmlFor="">+8888 0000 2222</label>
          <i className='fa fa-envelope'></i>
          <label htmlFor="">customerservice@tokodong.com</label>
        </div>
        <div className="right row RText">
          <label htmlFor="">Pertanyaan?</label>
          <label htmlFor="">Bantuan</label>
          <span>Rp </span>
          <label htmlFor="">IDR</label>
          <span>$ </span>
          <label htmlFor="">USD</label>
        </div>
      </div>
    </section>
  )
}

export default Head