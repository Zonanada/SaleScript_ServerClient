import React from 'react'

function Finish() {
  return (
    <div className='childRoot'>
        <h1>Завершение</h1>
        <div className="border">
            <p>На этом закончим. Напишите, как вы вообще?</p>
            <p className='example'>Например: Отлично, продуктивно, интересно</p>
            <div className='input' id="finish" contentEditable="true"></div>
        </div>
    </div>
  )
}

export default Finish