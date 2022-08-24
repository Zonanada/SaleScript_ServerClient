import React from 'react'

export default function ScriptConstructor() {
  return (
    <div className='childRoot'>
      <div className='border'>
        <p>Электронная почта</p>
        <div className='input' typeof='text' id='mail' contentEditable="true"></div>
      </div>
    </div>

  )
}
