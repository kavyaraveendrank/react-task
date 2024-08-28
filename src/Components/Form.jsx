
import React from 'react'
import  {useEffect, useState } from 'react';
import "./form.css"

const Form = () => {
    
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
      
        const [errors, setErrors] = useState({})
      
        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({
              ...formData, [name] : value
          })
        }
      
        const handleSubmit = (e) => {
          e.preventDefault()
          const validationErrors = {}
          if(!formData.username.trim()) {
              validationErrors.username = "*username is required"
          }
          else if(formData.username.length<4 ){
          
                validationErrors.username = "*Minimum 4 Characters"
        }
         else if(formData.username.length>10 ){
          
          validationErrors.username = "*Maximum 10 Characters"
  }
      
          if(!formData.email.trim()) {
              validationErrors.email = "*email is required"
          } else if(!/\S+@\S+\.\S+/.test(formData.email)){
              validationErrors.email = "*email is not valid"
          }
      
          if(!formData.password.trim()) {
              validationErrors.password = "*password is required"
          } else if(formData.password.length < 6){
              validationErrors.password = "*password should be at least 6 characters"
          }
        
          if(formData.confirmPassword !== formData.password) {
              validationErrors.confirmPassword = "*password not matched"
          }
      
          setErrors(validationErrors)
      
          if(Object.keys(validationErrors).length === 0) {
              alert("Form Submitted successfully")
          }
      
        }
      
        return (
          <form className='form-valid' onSubmit={handleSubmit}>
            <div className='form-div'>
              <label className='lbl'>Username:</label>
              <input
              className='input-fld'
                type="text"
                name="username"
                placeholder='username'  
                autoComplete='off'  
                onChange={handleChange}   
              />
                {errors.username && <span>{errors.username}</span>}  
            </div>
            <div className='form-div'>
              <label className='lbl'>Email:</label>
              <input
              className='input-fld'
                type="email"
                name="email"
                placeholder='example@gmail.com'
                autoComplete='off'
                onChange={handleChange} 
              />
                {errors.email && <span>{errors.email}</span>}  
            </div>
            <div className='form-div'>
              <label className='lbl'>Password:</label>
              <input
              className='input-fld'
                type="password"
                name="password"
                placeholder='************'
                onChange={handleChange} 
              />
                {errors.password && <span>{errors.password}</span>}  
            </div>
            <div className='form-div'>
              <label className='lbl'>Confirm Password:</label>
              <input
              className='input-fld'
                type="password"
                name="confirmPassword"
                placeholder='************'
                onChange={handleChange} 
              />
             
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
            </div>
            <button className='submit-btn' type="submit">Submit</button>
          </form>
        );
      };
      export default Form;