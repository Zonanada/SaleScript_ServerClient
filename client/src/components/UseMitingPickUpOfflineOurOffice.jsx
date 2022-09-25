import React from 'react'

function UseMitingPickUpOfflineOurOffice(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Offline. Наш офис</h1>
        <div className='border'>
            <p>Напишите адрес вашего офиса</p>
            <p className='example'>
              <p>
                <span className='fatty'>Например:</span>
              </p>
              <p>
                Невский проспект, дом 35, БЦ Атриум
              </p>
              </p>
            <div className='input' id="officeAdress" contentEditable="true">{props.useMitingPickUpOfflineOurOffice.officeAdress}</div>
        </div>
        <div className='border'>
            <p>Напишите, сколько времени потребуется на встречу</p>
            <p className='comment'>
              <p>
                <span className='fatty'>Комментарий:</span>
              </p>
              <p>
                Во-первых, это проявление заботы о клиенте. Мы даем ему понять, что переживаем о том, чтобы ему хватило времени выслушать вас, задать вопросы и принять решение. Каждому будет приятен такой подход.
              <br/>Во-вторых, это важная фраза, позволяющая минимизировать возражение на следующем звонке “Давайте быстрее, у меня не так много времени” или что-то похожее. 
              <br/>Итого, клиент будет предупрежден о том, сколько необходимо выделить времени на встречу с вами, а вы будете иметь достаточно времени, чтобы осуществить продажу.
              </p>
            </p>
            <p className='example'>
              <p>
                <span className='fatty'>Например:</span>
              </p>
              <p>
                1 час
              </p>
              </p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpOfflineOurOffice.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOfflineOurOffice