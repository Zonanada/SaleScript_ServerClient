import React from 'react'

export default function Password(props) {
    if (props.incorrect) {
    return (
      <div className='childRoot'>
      <div className='border'>
        <p>Пароль</p>
        <div className='input' typeof='text' id='password' contentEditable="true"></div>
      </div>
      <p className='emptyIput'>Пароль не верный</p>
    </div>
    )} else {
      return (
        <div className='childRoot'>
        <div className='border'>
          <p>Пароль</p>
          <div className='input' typeof='text' id='password' contentEditable="true"></div>
        </div>
      </div>
    )}
    
  
}