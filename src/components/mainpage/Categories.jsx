import React from 'react'

const Categories = () => {

  const data = [
    {
      cateImg: '../images/category/cat1.png',
      cateName: "Pakaian",
    },{
      cateImg: "./images/category/cat2.png",
      cateName: "Elektronik",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Kendaraan",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Peralatan Rumah",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Hadiah",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musik",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Kesehatan dan Kecantikan",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Peliharaan",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Mainan Anak",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Sembako",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Buku",
    },
  ]

  return (
    <>
      <div className="category">
        {
          data.map((value, index) => {
            return(
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories