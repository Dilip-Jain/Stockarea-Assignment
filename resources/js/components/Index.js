import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Nav from './Nav';

import './styles/root.css';
import Alert from './Alert';
import Main from './Main';

export const AlertContext = React.createContext();

function Index() {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false); // false - Dark, true - Light
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <div className={`${theme?'light-theme':'dark-theme'} bg-theme`}>
            <AlertContext.Provider value={{setMessage: setMessage, setType: setType}}>
                {message? <Alert message={message} type={type} setMessage={setMessage} />:null }
                <Nav theme={theme} setTheme={setTheme} />
                <Main />
            </AlertContext.Provider>
        </div>
    );
}


export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}