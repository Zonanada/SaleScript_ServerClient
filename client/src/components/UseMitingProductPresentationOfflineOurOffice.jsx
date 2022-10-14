import React from 'react'

function UseMitingProductPresentationOfflineOurOffice(props) {
  return (
    <div className='childRoot'>
        <h1>Назначение встречи. Презентация продукта. Offline. Наш офис</h1>
        <div className="border">
            <p>Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать</p>
            <p className='comment'>
              <p><span className='fatty'>Комментарий:</span></p>
              <p>
                Давайте вспомним основную цель звонка. Она заключается в том, чтобы клиент дал согласие на следующий звонок для презентации продукта. Если не договоримся, возможности продать не будет.
              </p>
              <p>
                Как сделать так, чтобы клиент дал согласие на следующий звонок?
              </p>
              <p>
              Нам нужно продолжить формировать понимание клиента о том, что у нас есть то, что ему нужно. Но есть проблема - мы пока не знаем что ему нужно. Только вопросы помогут нам это понять. 
              <br/>От того, насколько правильные вопросы вы зададите, будет зависеть его представление о вас как о профессионале. Каждый заданный вопрос дает понимание клиенту, что вы знаете специфику и тонкости продукта и, вероятно, сможете подобрать ему именно то, что он ищет. 
              <br/>Также, такой подход дает возможность понять, что вы, действительно, хотите ему помочь, а не втюхать то, что нужно вам. 
              <br/>После правильно заданных вопросов он будет ожидать вашего звонка, потому что понимает, что вероятность того, что вы сможете ему помочь, очень высокая. 
              <br/>Также, мы сразу думаем не только о том, чтобы он поднял трубку в следующий раз, но и о том, чтобы состоялась продажа.
              </p>
              <p>
                Как повысить вероятность продажи?
              </p>
              <p>
                Нужно продавать то, что нужно клиенту и чем больше подобранный продукт отвечает запросу клиента, тем выше вероятность его продажи.
              </p>
              <p>
                Как узнать что хочет клиент?
              </p>
              <p>
                Просто задать ему несколько вопросов и получить нужную информацию, на основе которой будете подбирать продукт и продавать его в следующий раз.
              </p>
              <p>
                Как задать правильные вопросы?
              </p>
              <p>
                Просто задавать те вопросы, без которых подбор продукта невозможен. А для того, чтобы их сформулировать, нужно отталкиваться от тех характеристик, которые являются переменными в вашем продукте. Например, цена, размер, цвет, функциональность и т.д.
              </p>
              <p>
                Получив как можно больше информации, вы сможете подобрать именно то, что хочет клиент и сама продажа будет максимально целевой - вы продаете то, что хочет купить клиент.
              </p>
            </p>
            <p className='example'><p><span className='fatty'>Например:</span></p> Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?</p>
            <div className='input' id="need" contentEditable="true">{props.useMitingProductPresentationOfflineOurOffice.need}</div>
        </div>
        <div className="border">
            <p>Напишите адрес вашего офиса</p>
            <p className='example'>
              <p>
                <span className='fatty'>Например:</span>
              </p>
              <p>
                Невский проспект, дом 35, БЦ Атриум
              </p>
              </p>
            <div className='input' id="officeAdress" contentEditable="true">{props.useMitingProductPresentationOfflineOurOffice.officeAdress}</div>
        </div>
        <div className="border">
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
            <div className='input' id="meetingTime" contentEditable="true">{props.useMitingProductPresentationOfflineOurOffice.meetingTime}</div>
        </div>
    </div>
  )
}

export default UseMitingProductPresentationOfflineOurOffice