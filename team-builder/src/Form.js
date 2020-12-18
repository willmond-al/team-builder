import React from 'react'

export default function Form(props){
    
    const { values, update, submit } = props;

     const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value)
        console.log(name, value)
     };
     

     const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
     }
    
    return(
    <form onSubmit={onSubmit}>
        
            <label>
                Name
                <input 
                type="text"
                name="name"
                value={values.name}
                placeholder="type your name"
                onChange={onChange}/>

            </label>
            <label>
                Email
                <input 
                type="text"
                name="email"
                value={values.email}
                placeholder="type your email"
                onChange={onChange}/>
                </label>
            <label>
                Role
                <select name="role" onChange={onChange} value={values.role}>
                    <option value="">-----select your role-----</option>
                    <option value="backendengineer">Backend engineer</option>
                    <option value="uideveloper">UI developer</option>
                    <option value="frontendengineer">Frontend engineer</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Design</option>
                </select>
                </label>

                <div className="submit">
                    <button>submit</button>
                </div>
    </form>
    )
}
