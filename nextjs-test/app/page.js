import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  let name = 'Han Gyeongjun'
  let link = 'www.apple.com'

  return (
    <div>
      <h4 className="title">Halogen</h4>
      <p className="description">by { name }</p>
      <a href={ link }>Apple</a>
    </div>
  )
}
