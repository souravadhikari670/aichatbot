import React from 'react'
import './ButtonStyle.css'

export default function Messanger(){
    return(
        <a href="https://m.me/101581574569880" target="_blank">
            <button className="btn btn-danger" id="btnMessanger" title="What can i help you?">
            <i className="fa fa-comments-o" aria-hidden="true" id="btnMessangerIcon"></i>
            </button>
        </a>
    )
}