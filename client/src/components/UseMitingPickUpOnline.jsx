import React from 'react'

function UseMitingPickUpOnline(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Online</h1>
        <div className='border'>
            <p>Напишите какое приложение вы будете использовать для связи с клиентом</p>
            <p className='example'>Например: Zoom, Google Meet, Skype</p>
            <div className='input' id="communicationApp" contentEditable="true">{props.useMitingPickUpOnline.communicationApp}</div>
        </div>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpOnline.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOnline