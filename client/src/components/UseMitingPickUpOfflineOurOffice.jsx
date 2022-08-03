import React from 'react'

function UseMitingPickUpOfflineOurOffice() {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Offline. Наш офис</h1>
        <div className='border'>
            <p>Напишите адрес вашего офиса</p>
            <p className='example'>Например: Невский проспект, дом 35, БЦ Атриум</p>
            <div className='input' id="officeAdress" contentEditable="true"></div>
        </div>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true"></div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineOurOffice