import React from 'react';
import '../styles/_variables.scss';

const ButtonPrimary = ({ ...props }) => {
  return (
    <div >
      <button className={props.btnClass} type='submit' >{props.btnText}</button>
    </div>
  )
}

export default ButtonPrimary