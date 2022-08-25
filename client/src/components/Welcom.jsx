import React from 'react'

function Welcom(props) {
    return (
        <div className='childRoot'>
            <h1>Приветствие</h1>
            <div className='border'>
                <p>Напишите должность сотрудника, который звонит</p>
                <p className='example'>Например: менеджер, специалист, администратор. Пишем должность с маленькой буквы. Точку в конце не ставим.</p>
                <div className='input' id="position" contentEditable="true">{props.welcom.position}</div>
            </div>
            <div className='border'>
                <p>Напишите форму вашей организации</p>
                <p className='example'>Например: "компания", "юридическая фирма", "автосервис", "салон красоты"</p>
                <div className='input' id="form" contentEditable="true">{props.welcom.form}</div>
            </div>
            <div className='border'>
                <p>Напишите название вашей организации</p>
                <div className="example">Например: компании, салона красоты, юридической фирмы. Пишем в родительном падеже с маленькой буквы. Точку в конце не ставим.</div>
                <div className='input' id="title" contentEditable="true">{props.welcom.title}</div>
            </div>

        </div>


    )
}

export default Welcom