import React from 'react'
import '../popup/popup.scss';

const Popup = ({text})=>{
    return(
        <div className='popupContainer'>
            Empty field: {text.join(', ')}
        </div>
    )
}

export default Popup;