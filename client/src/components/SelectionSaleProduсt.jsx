import React from 'react'

function SelectionSaleProduct(props) {
  return (
    <div className='childRoot'>
        <h1>Подбор и продажа продукта (здесь и сейчас)</h1>
        <div className='border'>
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='example'>Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.selectionSaleProduct.need}</div>
        </div>
        <div className='border'>
            <p>Напишите последовательно все этапы оформления продукта после положительного решения клиента</p>
            <p className='example'>Например: Сейчас я отправлю вам ссылку в Телеграм. Вам необходимо будет пройти по ней и нажать "Купить". После чего, ввести свои данные и данные вашей карты. Далее нажать кнопку "Оплатить"</p>
            <div className='input' id="stagesOfRegistration" contentEditable="true">{props.selectionSaleProduct.stagesOfRegistration}</div>
        </div>
    </div>
  )
}

export default SelectionSaleProduct