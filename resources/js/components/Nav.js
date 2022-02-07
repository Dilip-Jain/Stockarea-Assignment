import React from 'react';

export default function Nav({theme, setTheme}) {
  return (
    <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#">Stockarea</a>
        <ul className="d-none d-md-flex navbar-nav ml-auto">
            <li className="nav-item">
                {/* <Link to='/' className="nav-link py-0 pr-3" data-toggle="tooltip" data-placement="bottom" title="Home"><i className="material-icons-round text-center">home</i></Link> */}
            </li>
            <li className="nav-item" onClick={()=>setTheme((t) => !t)}>
                <a href="#" role="button" className="nav-link py-0 pr-3"><i className="material-icons-round text-center" data-toggle="tooltip" data-placement="bottom" title={theme?"Switch to Dark":"Switch to Light"}>{theme?'dark_mode':'light_mode'}</i></a>
            </li>
            <li className="nav-item">
                {/* <Link to='/' className="nav-link py-0 pr-3"><i className="material-icons-round text-center" data-toggle="tooltip" data-placement="bottom" title="Notifications">notifications</i></Link> */}
            </li>
            <li className="nav-item dropdown">
                <a id="profileDropdown" className="nav-link py-0 pr-3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="true"><span data-toggle="tooltip" data-placement="bottom" title="Account"><i className="material-icons-round text-center">account_circle</i></span></a>

                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                    {/* <Link to='/profile' className="dropdown-item">Profile</Link> */}
                    <a className="dropdown-item" href="#">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
  );
}
