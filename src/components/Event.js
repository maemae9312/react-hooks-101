import React, { useContext } from 'react'

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

export default function Event ({ event }) {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`Can I really delete the event?(id=${id})`)
    if (result) dispatch({ type: DELETE_EVENT, id})
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}