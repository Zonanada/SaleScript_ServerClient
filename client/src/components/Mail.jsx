import React from 'react'

export default function ScriptConstructor(props) {
  return (
    <div className='childRoot'>
      <div className='border'>
        <p>Электронная почта</p>
        <div className='input' typeof='text' id='mail' contentEditable="true">{props.mail}</div>
      </div>
    </div>

  )
}
