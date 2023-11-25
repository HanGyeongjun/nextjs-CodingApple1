import Image from "next/image";

export default function List() {
  let products = [
    "iPhone15",
    "MacBook Pro",
    "AirPods Pro",
    "iPad Pro",
    "iMac",
    "Apple Watch",
  ];

  return (
    <div>
      <h4 className="title">Apple</h4>
      {products.map((product, i) => {
        return (
          <div className="appleProduct" key={i}>
            <img src={'/' + product + '.png'} className="appleProductImg"/>
            <h4>{product}</h4>
          </div>
        );
      })}
    </div>
  );
}
