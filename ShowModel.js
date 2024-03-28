import React from 'react'

const MyModal=({closeModel})=>{
    
    return(
        <>
        <div className='modelWrapper'></div>
        <div className='model-Container'>
        <h1>Welcome User</h1>
       <strong><label> user Name : </label></strong><br />
        <input type="text" name='name' autoComplete='off' placeholder='Enter Your Name' /><br /><br />
        <strong><label> Email : </label></strong><br />
        <input type="email" name='email' autoComplete='off' placeholder='Enter Your Email' /><br />
        <strong><label> Password : </label></strong><br />
        <input type="password" name='password'  /><br />
        <button className='model1-button' onClick={closeModel}>Login</button>
        </div>
        </>
    )
}
export default MyModal;