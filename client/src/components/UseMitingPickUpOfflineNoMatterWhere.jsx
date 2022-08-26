import React from 'react'

function UseMitingPickUpOfflineNoMatterWhere(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Offline. Не важно где пройдет встреча</h1>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpOfflineNoMatterWhere}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineNoMatterWhere