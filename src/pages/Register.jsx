import React from 'react'
import {Row , Col , Form , Input , message} from 'antd'
import {Link , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading} = useSelector(state => state.alerts);

  function onFinish(values){
    if(values.password !== values.ConfirmPassword){
      return message.error('Password and Confirm Password should be same');
    }
    dispatch(userRegister(values , navigate));
    // console.log(values);
  }


  return (
    <div className='login'>

          {loading && (<Spinner />)}


          <Row gutter={16} className='d-flex align-items-center'>
          <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100'
                    data-aos='slide-left'
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    alt='Register'
                    />
                     <h1 className='login-logo'>Urban Rentals</h1>
          </Col>

              <Col lg={8} className='text-left p-5'>
              <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                    <h1>Register</h1>
                    <hr />
                    <Form.Item name='username' label='Username' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label='Password' rules={[{required: true}]}>
                        <Input type='password'/>
                    </Form.Item>
                    <Form.Item name='ConfirmPassword' label='Confirm Password' rules={[{required: true}]}>
                        <Input type='password'/>
                    </Form.Item>

                    <button className='btn1 mt-2 mb-3'>Register</button>
                    <br />

                    <Link to='/login'>Click Here to Login</Link>
              </Form>
                    
              </Col>
          </Row>
    </div>
  )
}

export default Register