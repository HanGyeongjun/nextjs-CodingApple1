import { iphone, macbook, airpods } from './data';
import Hello from './hello';

export default function Cart() {
let items = ['tomato', 'cucumber', 'apple', 'orange', 'melon']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={items[0]} />
      <CartItem item={items[1]} />
      <CartItem item={items[2]} />
      <Hello/>
      <Button text="구매하기" color='blue'/>
    </div>
  )
} 

function CartItem(props) {
 return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Button(props) {
  return (
    <button className="button" style={{ background : props.color }}>{ props.text }</button>
  )
}
