import React from 'react'

function DesignProps(image, title, text) {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={image} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>

        </div>
    )
}

export default DesignProps
