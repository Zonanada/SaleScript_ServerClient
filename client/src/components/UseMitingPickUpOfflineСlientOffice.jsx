import React from 'react'

function UseMitingPickUpOfflineСlientOffice(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Offline. Офис клиента</h1>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpOfflineСlientOffice}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineСlientOffice