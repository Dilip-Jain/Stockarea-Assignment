import React from 'react';
import styles from './styles/alert.module.css';

function Alert({message, type, setMessage}) {
    let i = 'help';
    switch(type){
        case 'success':
            i = 'check_circle';
            break;
        case 'danger':
            i = 'error';
            break;
        case 'warning':
            i = 'warning';
            break;
        case 'info':
            i = 'info';
            break;
        default:
            i = 'help';
    }

    return (
        <div className={`position-fixed w-100 mt-5 row justify-content-center mx-auto ${styles.stackUp}`}>
            <div className={`alert alert-dismissible col-11 col-md-8 border-0 col-lg-6 mt-5 shadow-lg text-${type} ${styles.outBurst} ${styles[type]}`} role="alert">
                <i className="material-icons-round align-middle">{i}</i>
                <span className="ml-3">{message}</span>
                <button type="button" onClick={()=>{setMessage(null)}} className="close" data-dismiss="alert" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Alert
