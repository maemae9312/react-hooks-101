import React from 'react'
import { useState } from 'react'


 // 初期値の定義
App.defaultProps = {
  name: '',
  price: 1000,
}

export default function App(props) {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price +1)}>+1</button>
      <button onClick={() => setPrice(price -1)}>-1</button>
      <button onClick={() => setPrice(reset)}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  )

}
