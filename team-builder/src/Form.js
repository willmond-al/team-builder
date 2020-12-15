import React from 'react'




export default function Form(){
    return(
    <form>
        <div className="form-container">
            <label>
                Name
                <input 
                name="name"
                type="text"
                placeholder="type your name"/>

            </label>
            <label>
                Email
                <input 
                name="email"
                type="text"
                placeholder="type your name"/>
                </label>
            <label>
                Role
                <select name="role">
                    <option value="">-----select your role-----</option>
                    <option value="backendengineer">Backend engineer</option>
                    <option value="uideveloper">UI developer</option>
                    <option value="frontendengineer">Frontend engineer</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Design</option>
                </select>
                </label>
        </div>
    </form>
    )
}
