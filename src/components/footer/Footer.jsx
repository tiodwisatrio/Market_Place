import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container grid2">
            <div className="box">
                <h1>TOKODONG</h1>
                <p>TOKODONG merupakan e-commerce yang ada dalam khayalanku, chakssss. Web ini masih dalam pengembangan sehingga, masih perlu untuk meng-upgrade fitur-fitur lain</p>

                <div className="download">

                <div className="icon d_flex">
                    <div className="img d_flex">
                        <i className='fa-brands fa-google-play'></i>
                        <span>Google Playstore</span>
                    </div>

                    <div className="img d_flex">
                        <i className='fa-brands fa-app-store-ios'></i>
                        <span>App Store</span>
                    </div>
                </div>

                </div>
            </div>

            <div className="box">
                <h2>About Us</h2>
                <ul>
                    <li>Karir</li>
                    <li>Toko Kami</li>
                    <li>Direkomendasikan</li>
                    <li>Syarat dan Ketentuan</li>
                    <li>Kebijakan Privasi</li>
                </ul>
            </div>

            <div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Pusat Bantuan</li>
                    <li>Cara Berbelanja</li>
                    <li>Lacak Belanjaanmu</li>
                    <li>Reseller</li>
                    <li>Pengembalian</li>
                </ul>
            </div>

            <div className="box">
                <h2>Contact</h2>
                <ul>
                    <li>Jl Kaliurang KM 7, Sleman, DIY, Indonesia</li>
                    <li>Email: tokodong.help@gmail.com</li>
                    <li>Phine: +62 809 0934 0001</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div className="copyright">
            <p style={{textAlign:"center", marginTop:"32px"}}>&copy; 2022 Tio Dwi Satrio</p>
        </div>
    </footer>
    </>
  )
}

export default Footer