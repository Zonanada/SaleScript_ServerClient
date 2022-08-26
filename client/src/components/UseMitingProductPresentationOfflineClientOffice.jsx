import React from 'react'

function UseMitingProductPresentationOfflineClientOffice(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Презентация продукта. Offline. Офис клиента</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.useMitingProductPresentationOfflineClientOffice.need}</div>
        </div>
        <div className="border">
           <p>Напишите, сколько времени потребуется на встречу</p>
           <p className='example'>Например: 1 час</p> 
           <div className='input' id="meetingTime" contentEditable="true">{props.useMitingProductPresentationOfflineClientOffice.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOfflineClientOffice