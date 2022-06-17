import React from 'react'
import './style.css'

const Wrapper = () => {
    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Pengiriman Cepat",
          decs: "Barang belanjaanmu akan diantar sampai ke rumah.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Pembayaran Mudah",
          decs: "Pembayaran aman, nyaman, dan mudah.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Belanja Aman ",
          decs: "Menjamin setiap transaksi belanja kamu akan aman.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "Pelayanan 24/7",
          decs: "Memberikan pelayanan yang berkualitas untuk setiap pelanggan.",
        },
      ]

  return (
      <>
      <div className="bungkus">

        <section className='wrapper background'>
            <div className="container grid2">
                {data.map((value, index) => {
                    return(
                        <div className="product" key={index}>
                            <div className="img icon-circle">
                                <i>{value.cover}</i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.decs}</p>
                    
                        </div>
                    )
                })}
            </div>
        </section>
      </div>
      </>
  )
}

export default Wrapper