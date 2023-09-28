import React from 'react';
import './checkbox.css'

const Checkbox = ({ name, id, info, onChange }) => {

  return (
    <div className="cont-checkbox">
      <input type="radio" name={name} id={id} onChange={onChange} />
      <label htmlFor={id}>
        <span className="cover-checkbox">
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className="info">{info}</div>
      </label>
    </div>
  )
}

export default Checkbox