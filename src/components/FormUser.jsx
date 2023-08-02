import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import './styles/FormUser.css'

const FormUser = ({ createNewUsers, updateInfo, updateUsersById, setUpdateInfo, CloseForm, setCloseForm}) => {


    const { register, reset, handleSubmit }= useForm();

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])
    

    const submit = (data) => {
        if(updateInfo) {
            updateUsersById("", updateInfo.id, data);
            setUpdateInfo();

        } else {
            createNewUsers("", data);
        }
        // createNewUsers('', data)
        // console.log(data)
        reset ({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })

    };

    const handleCloseForm = () => {
        setCloseForm(true)
    }

    return (
     

        <div className="formuser-container">
        <form className="formuser" onSubmit={handleSubmit(submit)}>
            <h2 className="formuser_title">{updateInfo ? 'Update':"New User"}</h2>
            <div className="formuser__close">x</div>
            <div className="formuser__container">
                <label className="formuser_label" htmlForm="first_name">First Name</label>
                <input className="formuser__input"{ ...register('first_name')} type="text" id='first_name'/></div>
                <div className="formuser__container">
                <label className="formuser_label" htmlForm="last_name">Last Name</label>
                <input className="formuser__input"{ ...register('last_name')}type="text" id='last_name'/></div>
                <div className="formuser__container">
                <label className="formuser_label"  htmlForm="email">Email</label>
                <input className="formuser__input"{ ...register('email')}type="email" id='email'/></div>
                <div className="formuser__container">
                <label className="formuser_label" htmlForm="password">Password</label>
                <input className="formuser__input"{ ...register('password')}type="password" id='password'/></div>
                <div className="formuser__container">
                <label  className="formuser_label" htmlForm="birthday">Birthday</label>
                <input className="formuser__input" { ...register('birthday')}type="date" id='birthday'/></div>
                <button className="formuser__btn">{ updateInfo ? 'Update this User' : 'Add a new user' }</button>
        </form>
        </div>
    )
}

export default FormUser;