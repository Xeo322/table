import React from 'react'
import '../styles/loader.scss'

export const Loader = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}