import React from 'react'
import style from './style.module.css'
export default function Home() {
  return (
   <>
   <div className={style.container}>
    <div className={style.col}>
        <h1 className={style.title}>Your one-stop e-commerce destination! </h1>
        <p className={style.description}>Dscover a world of endless shopping posslbllltles at our online store. Browse,</p>
        <button className={style.button}>Shop Now </button>
    </div>
   </div>
   
   </>
  )
}
