import React from 'react'

export default function ScriptConstructor() {
  return (
    <div className='childRoot'>
      <div className='border'>
        <p>Электронная почта</p>
        {/* <input type="email" name="mail" id="" /> */}
        <div className='input' typeof='text' id='mail' contentEditable="true"></div>
      </div>
    </div>

  )
}
