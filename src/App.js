import React from 'react'
import { useEffect, useState } from 'react'


 // 初期値の定義
App.defaultProps = {
  name: '',
  price: 1000,
}

export default function App(props) {

  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect (() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  useEffect (() => {
    console.log('This is like componentDidMount')
  }, [])

  useEffect (() => {
    console.log('This callback is for name only.')
  }, [name])


  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price +1})}>+1</button>
      <button onClick={() => setState({...state, price: price -1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </div>
  )

}
