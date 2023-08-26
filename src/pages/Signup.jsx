import {Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import toast  from 'react-hot-toast';




const onFinish = async (values) => {
 try {
    const response = await axios.post("/api/user/Signup", values);
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
 } catch (error) {
    toast.error("something went wrong");
 }

}

function Signup() {
  return (
    <div className="authentication">
        <div className="authentication-form card p-2">
            <h1 className="card-title">Nice To Meet U</h1>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label='Name' name='name'>
                        <Input placeholder='Name' />
                </Form.Item>
                <Form.Item label='Email' name='email'>
                        <Input placeholder='Name' />
                </Form.Item>
                <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password' />
                </Form.Item>

                <Button className='primary-button my-2' htmlType='submit'>Register</Button>
    
            </Form>
            <Link  to='/Login' className="anchor mt-2">Click Here To Login</Link>
        </div>
    </div>
  )
}

export default Signup
