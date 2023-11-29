'use client'
import Image from "next/image"
import { useState } from "react"

export default function List() {
  let products = [
    "iPhone15",
    "MacBook Pro",
    "AirPods Pro",
    "iPad Pro",
    "iMac",
    "Apple Watch",
  ]

  let [quantityOfItem, changeQuantity] = useState([0, 0, 0, 0, 0, 0])

  return (
    <div>
      <h4 className="title">Apple</h4>
      {products.map((product, i) => {
        return (
          <div className="appleProduct" key={i}>
            <img src={'/' + product + '.png'} className="appleProductImg"/>
            <h4>{product} $999</h4>
            <span> {quantityOfItem[i]} </span>
            <button className="button" onClick={ ()=>{ 
              let copy = [...quantityOfItem]
              copy[i]++
              changeQuantity(copy)
              } }>+</button>
            <button className="button" onClick={ ()=>{ 
              let copy = [...quantityOfItem]
              copy[i]--
              changeQuantity(copy) 
              } }>-</button>
          </div>
        );
      })}
    </div>
  );
}
