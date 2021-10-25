import React from 'react'

const Textbox = ({onTextChange, textbox}) => {
    return(
        <div>
            <input type="text" id="textbox" onChange={onTextChange} />
            <div style={{marginTop:'30px'}}>
                <p>{textbox}</p>
            </div>
        </div>
    )
}


export default Textbox;