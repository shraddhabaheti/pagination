import React from 'react'
import './googleApp.css'
const GoogleApp = () => {
    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    <div className='text-input'>
                        <textarea spellCheck="false" className='from-text' placeholder='Enter the text'></textarea>
                        <textarea readOnly spellCheck="false" className='to-text' placeholder='Translate'></textarea>
                    </div>

                    <ul className='controls'>
                        <li className='row-from'>
                            <div className='icons'>
                                <i class="fa-solid fa-volume-high"></i>
                                <i class="fa-regular fa-copy"></i>
                                <select></select>
                            </div>
                        </li>

                        <li className='exchange'>
                            <i class="fa-brands fa-stack-exchange"></i>
                        </li>
                        <li className='row to'>
                            <select></select>
                            <div className='icons'>
                                <i class="fa-solid fa-volume-high"></i>
                                <i id="to" class="fa-regular fa-copy"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <button>Translate text</button>
            </div>
        </>
    )
}

export default GoogleApp
