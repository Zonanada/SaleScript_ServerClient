import React from 'react'

function UseMitingPickUpOnline(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Знакомство. Online</h1>
        <div className='border'>
            <p>Напишите какое приложение вы будете использовать для связи с клиентом</p>
            <p className='example'>
              <p>
                <span className='fatty'>Например:</span>
              </p>
              <p>
                Zoom, Google Meet, Skype
              </p>
              </p>
            <div className='input' id="communicationApp" contentEditable="true">{props.useMitingPickUpOnline.communicationApp}</div>
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
              <p><span className='fatty'>Например:</span></p>
               <p>
                1 час
               </p>
              </p>
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingPickUpOnline.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingPickUpOnline