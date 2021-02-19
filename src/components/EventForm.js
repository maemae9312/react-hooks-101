import React, { useContext, useState } from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

export default function EventForm () {
  const { state, dispatch } = useContext(AppContext)
  const [title,setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'Created an event',
      operatedAt: timeCurrentIso8601()
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('Is it really okay to delete all events?')
    if (result){
      dispatch({ type: DELETE_ALL_EVENTS })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'Removed all events',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const unCreatable = title === '' || body === ''
  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('Is it okay to delete all operation logs?')

    if (result){
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }

  return(
    <>
      <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">内容</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable} >イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0} >全てのイベントを削除する</button>
          <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0} >全ての操作ログを削除する</button>
        </form>
    </>
  )
}