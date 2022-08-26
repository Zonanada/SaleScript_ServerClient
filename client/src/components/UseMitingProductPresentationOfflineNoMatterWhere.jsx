import React from 'react'

function UseMitingProductPresentationOfflineNoMatterWhere(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Презентация продукта. Offline. Не важно где пройдет встреча</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.useMitingProductPresentationOfflineNoMatterWhere.need}</div>
        </div>
        <div className="border">
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='example'>Например: 1 час</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingProductPresentationOfflineNoMatterWhere.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOfflineNoMatterWhere