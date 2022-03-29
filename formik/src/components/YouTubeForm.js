import React from 'react';
import { useFormik } from 'formik';

function YouTubeForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => {
      console.log('Form data: ', values)
    },
    
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name </label>
        <input 
          type={'name'} 
          id='name' 
          name='name' 
          onChange={formik.handleChange} 
          value={formik.values.name} 
        />
        <br /><br />
        <label htmlFor='email'>Email </label>
        <input 
          type={'email'} 
          id='email' 
          name='email' 
          onChange={formik.handleChange} 
          value={formik.values.email} 
        />
        <br /><br />
        <label htmlFor='channel'>Channel </label>
        <input 
          type={'channel'} 
          id='channel' 
          name='channel' 
          onChange={formik.handleChange} 
          value={formik.values.channel} 
        />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm