import React from 'react';
import { useState, useEffect } from 'react';

import Element from './Element';
import styles from './styles/index.module.css';
import Edit from './Edit';
import Graph from './Graph';

function Main() {
    const [warehouse, setWarehouse] = useState(null);
    const [city, setCity] = useState(null);
    const [cluster, setCluster] = useState(null);
    const [name, setName] = useState(null);
    const [editing, setEditing] = useState(false);
    
    function handleChange(event) {setName(event.target.value)}

    useEffect(() => {
        let isMounted = true;
        if(!warehouse){
            axios.get(`/api/warehouse/details`).then(response => {
                if(isMounted){
                    setWarehouse(response.data.warehouse);
                }
            });
        }
        return () => {isMounted=false};
    },[warehouse]);

  return(
      <div className='container-fluid'>
        <div className="row w-100 p-0 m-0">
            <div className="col-md-8">
                <Element>
                    <h4 className="m-4 float-left">Warehouse</h4>
                    <div className="input-group m-3 w-50 float-right">
                        <input type="text" className={`form-control`} placeholder="Warehouse Name" onChange={handleChange} aria-label="Warehouse Name" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text material-icons-outlined" id="basic-addon2">search</span>
                        </div>
                    </div>

                    <div className={`table-responsive`}>
                        <table className={`table table-borderless w-100 element-theme ${styles.tableTheme} mb-0`}>
                            <thead className="text-left">
                                <tr>
                                    <th className="p-4" scope="col">Name</th>
                                    <th className="p-4" scope="col">Code</th>
                                    <th className="p-4" scope="col">City
                                        <span className="dropdown pl-2">
                                            <button className="bg-transparent border-0 dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#" onClick={() => setCity(null)}>No Filter</a>
                                                {warehouse?[... new Set(warehouse.map(w => w.city))].map(w =>
                                                    <a className="dropdown-item" key={w} href="#" onClick={() => setCity(w)}>{w}</a>
                                                ):null}
                                            </div>
                                        </span>
                                    </th>
                                    <th className="p-4" scope="col">Available Space</th>
                                    <th className="p-4" scope="col">Type</th>
                                    <th className="p-4" scope="col">Cluster
                                        <span className="dropdown pl-2">
                                            <button className="bg-transparent border-0 dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#" onClick={() => setCluster(null)}>No Filter</a>
                                                {warehouse?[... new Set(warehouse.map(w => w.cluster))].map(w =>
                                                    <a className="dropdown-item" key={w} href="#" onClick={() => setCluster(w)}>{w}</a>
                                                ):null}
                                            </div>
                                        </span>
                                    </th>
                                    {/* <th className="p-4" scope="col">Registered</th> */}
                                    {/* <th className="p-4" scope="col">Live</th> */}
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                {warehouse? warehouse.filter(w => ((name && w.name.toLowerCase().includes(name.toLowerCase())) || (!name && ((city && !cluster && w.city == city) || (cluster && !city && w.cluster == cluster) || (cluster && city && w.cluster == cluster && w.city==city) || (!city && !cluster))))).map(w => 
                                    <tr key={w.id} onClick={() => setEditing(w)}>
                                        <td>{w.name}</td>
                                        <td>{w.code}</td>
                                        <td>{w.city}</td>
                                        <td>{w.space_available}</td>
                                        <td>{w.type == 1? "Warehouse Service":"Leasable Space"}</td>
                                        <td>{w.cluster}</td>
                                        {/* <td>{w.is_registered}</td> */}
                                        {/* <td>{w.is_live}</td> */}
                                    </tr>
                                ):null}
                            </tbody>
                        </table>
                    </div>
                </Element>
            </div>
            <div className="col-md-4">
                {editing?
                    <Edit editing={editing} setEditing={setEditing} warehouse={warehouse} setWarehouse={setWarehouse} />                    
                    :
                    <Graph warehouse={warehouse} />
                }

            </div>
        </div>
      </div>
  );
}

export default Main;
