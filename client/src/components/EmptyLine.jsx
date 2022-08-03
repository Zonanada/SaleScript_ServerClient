import React from 'react'

function EmptyLine(props) {
    if (props.empty) {
        return <p className='emptyIput'>Одно из полей пустое</p>
    } else {
        return <p></p>
    }
}


export default EmptyLine