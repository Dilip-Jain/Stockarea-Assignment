import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { useFormik } from 'formik';
import * as Validator from 'validatorjs';
import { AlertContext } from './Index';
import Element from './Element';

function Edit({editing, setEditing, warehouse, setWarehouse}) {
    const {setMessage, setType} = useContext(AlertContext);
    const [submit, setSubmit] = useState(false);

    const edit = useFormik({
        initialValues: {id:editing.id, name:editing.name, code:editing.code, city:editing.city, space_available:editing.space_available, type:editing.type, cluster:editing.cluster, is_registered:editing.is_registered, is_live:editing.is_live},
        validate: values => {
            let errors = {};

            let editRules = {
                name: 'required|string|max:255',
                code: 'required|string|max:255',
                city: 'required|string|max:255',
                space_available: 'required|integer|min:0',
                type: 'required|integer',
                cluster: 'required|string|max:255',
            };

            let editErrorMsg = {
                'required.name': 'Please enter the name of your warehouse',
                'string.name': 'Please enter the name of your warehouse',
                'max.name': "Max. 255 character allowed",
                'required.code': 'Please enter the code of your warehouse',
                'string.code': 'Please enter the code of your warehouse',
                'max.code': "Max. 255 character allowed",
                'required.city': 'Please enter the city of your warehouse',
                'string.city': 'Please enter the city of your warehouse',
                'max.city': "Max. 255 character allowed",
                'required.space_available': "Please enter the available space in the warehouse",
                'integer.space_available': "Please enter the available space in the warehouse",
                'min.space_available': "Please enter the available space in the warehouse",
                'required.type': 'Please specify the type of your warehouse',
                'integer.type': 'Please specify the type of your warehouse',
                'required.cluster': 'Please specify the cluster of your warehouse',
                'string.cluster': 'Please specify the cluster of your warehouse',
                'max.cluster': "Max. 255 character allowed",
            };

            const editValidation = new Validator(values, editRules, editErrorMsg );
            if(editValidation.fails()){
                errors.name = editValidation.errors.first('name');
                errors.code = editValidation.errors.first('code');
                errors.city = editValidation.errors.first('city');
                errors.space_available = editValidation.errors.first('space_available');
                errors.type = editValidation.errors.first('type');
                errors.cluster = editValidation.errors.first('cluster');
            }
            return errors;
        },
        onSubmit: async (values) => {
            if(!submit){
                setSubmit(true);
                // await axios.get('/sanctum/csrf-cookie').then(response => {});
                await axios.post(`/api/warehouse/edit/${editing.id}`, values)
                    .then(res => {
                        switch(res.status){
                            case 201:
                                setEditing(false);
                                setWarehouse(warehouse => {
                                    warehouse.map(w => {
                                        if(w.id == res.data.id) return res.data
                                        else return w
                                    });
                                });
                                break;
                            default:
                                console.log('hmm?');
                        }
                    })
                    .catch(err => {
                        switch(err.response.status){
                            case 422:
                                Object.keys(err.response.data.errors).forEach((item)=>{
                                    edit.errors[item] = err.response.data.errors[item][0];
                                });
                                break;
                            case 401:
                                setMessage(err.response.data.message);
                                setType('danger');
                                break;
                            default:
                                setMessage('Oops! We\'re facing some issue. Please try again.');
                                setType('danger');
                        }
                    });
                setSubmit(false);
            }
        }
    });

    const cancelEdit = () => {
        edit.resetForm();
        setEditing(false);
        setSubmit(false);
    }

    const handleRadio = (e) => {
        const { checked, value } = e.target;
        edit.setFieldValue("type", value);
    };

    const handleLive = (e) => {
        const { checked, value } = e.target;
        edit.setFieldValue("is_live", !edit.values.is_live);
    };

    const handleRegistered = (e) => {
        const { checked, value } = e.target;
        edit.setFieldValue("is_registered", !edit.values.is_registered);
    };

    return (
        <Element>
            <div className="m-2">
                <form className="w-100 m-0 px-2" onSubmit={edit.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Warehouse Name:</label>
                        <input type="text" placeholder="Name" className={`form-control ${edit.touched.name && edit.errors.name? "border border-danger ": ""}`} id="name" required {...edit.getFieldProps('name')}/>
                        {edit.touched.name && edit.errors.name?<div className="text-danger">{edit.errors.name}</div>:null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Warehouse Code:</label>
                        <input type="text" placeholder="Code" className={`form-control ${edit.touched.code && edit.errors.code?"border border-danger ": ""}`} id="code" required {...edit.getFieldProps('code')}/>
                        {edit.touched.code && edit.errors.code?<div className="text-danger">{edit.errors.code}</div>:null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Warehouse City:</label>
                        <input type="text" placeholder="City" className={`form-control ${edit.touched.city && edit.errors.city?"border border-danger ": ""}`} id="city" required {...edit.getFieldProps('city')}/>
                        {edit.touched.city && edit.errors.city?<div className="text-danger">{edit.errors.city}</div>:null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="space_available">Available Space:</label>
                        <input type="number" placeholder="Available Space"  className={`form-control ${edit.touched.space_available && edit.errors.space_available?"border border-danger ": ""}`} id="space_available" required {...edit.getFieldProps('space_available')}/>
                        {edit.touched.space_available && edit.errors.space_available?<div className="text-danger">{edit.errors.space_available}</div>:null}
                    </div>
                    <label htmlFor='type' className='pr-3'>Type:</label>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="type" value={1} checked={edit.values.type == 1?true:false} onChange={handleRadio} />Warehouse Service
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="type" value={2} checked={edit.values.type == 2?true:false} onChange={handleRadio} />Leasable Space
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cluster">Cluster:</label>
                        <input type="text" placeholder="Cluster" className={`form-control ${edit.touched.cluster && edit.errors.cluster ? "border border-danger ": ""}`} id="cluster" required {...edit.getFieldProps('cluster')} />
                        {edit.touched.cluster && edit.errors.cluster?<div className="text-danger">{edit.errors.cluster}</div>:null}
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" checked={edit.values.is_registered==1} onChange={handleRegistered} />Is Registered
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" checked={edit.values.is_live==1} onChange={handleLive} />Is Live
                        </label>
                    </div>
                    <div className="my-3">
                        <button type='button' onClick={cancelEdit} className="btn btn-secondary">Cancel</button>
                        <button type="submit" className="btn btn-primary float-right" onClick={()=>edit.handleSubmit()}>Submit</button>
                    </div>
                </form>
            </div>
        </Element>
    );
}

export default Edit;