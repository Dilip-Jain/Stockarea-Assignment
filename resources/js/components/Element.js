import React from 'react';

const block = {
    borderRadius:"0.8rem", 
}

function Element({children, className=null, style=null, optional={}}) {
    return (
        <div className={`element-theme mx-0 w-100 overflow-hidden outer-shadow ${className}`} style={{...block, ...style}} {...optional}>
            {children}
        </div>
    )
}

export default Element;