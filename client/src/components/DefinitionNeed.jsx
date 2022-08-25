import React from 'react'

function DefinitionNeed(props) {
  return (
    <div className='childRoot'>
        <h1>Выявление потребностей (перед звонком с презенацией продукта)</h1>
        <div className='border'>
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.definitionNeed.need}</div>
        </div>
        <div className='border'>
            <p>Напишите в течение какого количества дней ваше предложение будет готово для клиента</p>
            <p className='example'>Например: 1 день</p>
            <div className='input' id="readyTime" contentEditable="true">{props.definitionNeed.readyTime}</div>

        </div>
        <div className='border'>
            <p>Напишите сколько времени вам с клиентом понадобится на обсуждение предложения на следующем звонке</p>
            <p className='example'>Например: 15 минут</p>
            <div className='input' id="meetingTime" contentEditable="true">{props.definitionNeed.meetingTime}</div>
        </div>

    </div>
  )
}

export default DefinitionNeed