import React from 'react'

function Welcom() {
    return (
        <div className='childRoot'>
            <h1>Приветсвие</h1>
            <div className='border'>
                <p>Напишите должность сотрудника, который звонит</p>
                <div className='input' id="position" contentEditable="true"></div>
            </div>
            <div className='border'>
                <p>Напишите форму вашей организации</p>
                <p className='example'>Например: "компания", "юридическая фирма", "автосервис", "салон красоты"</p>
                <div className='input' id="form" contentEditable="true"></div>
            </div>
            <div className='border'>
                <p>Напишите название вашей организации</p>
                <div className='input' id="title" contentEditable="true"></div>
            </div>

        </div>


    )
}

export default Welcom