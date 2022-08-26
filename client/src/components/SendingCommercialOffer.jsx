import React from 'react'

function SendingCommercialOffer(props) {
  return (
    <div className='childRoot'>
        <h1>Отправка коммерческого предложения</h1>
        <div className='border'>
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.sendingCommercialOffer}</div>
        </div>
    </div>
  )
}

export default SendingCommercialOffer