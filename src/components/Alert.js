import React from 'react'

function Alert(props) { 
  return (
        <div style={{height: '60px'}}>
        {props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
