import React from 'react'

function UseMitingPickUpNoMatterWhere(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Формат встречи не имеет значения</h1>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpNoMatterWhere}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpNoMatterWhere