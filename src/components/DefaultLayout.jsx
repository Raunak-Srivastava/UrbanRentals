import React from 'react'
import { Dropdown, Button, Space , Row , Col , message, Flex } from "antd"
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const DefaultLayout = (props) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const items = [
    {
      key: '1',
      label: (
        <a href="/">
          Home
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="/userbookings">
          Bookings
        </a>
      ),
    },
    user.role==='admin' && {
      key: '3',
      label: (
        <a href="/admin">
          Admin
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a onClick={()=>{
          localStorage.removeItem('user')
          message.success('Logout Successfull');
          setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
        }}>
          Logout
        </a>
      ),
    },
  ];

  return (
    <div>
        <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                    <h1 style={{ color: 'orangered'}}><Link to='/'><b>UrbanRentals</b></Link></h1>

                    <Dropdown
                        menu={{
                          items,
                        }}
                        placement="bottom"
                        arrow
                        className='btn1'
                      >
                        <Button className='btn1'>{user.username}</Button>
                    </Dropdown>
                </div>
              </Col>
          </Row>
        </div>
        <div className="content">{props.children}</div>

        {/* <div className="footer bs1">
            <hr />
          <p>Design and Developed By</p>
          <p>Raunak</p>
        </div> */}

        <div className="footer bs1" style={{ padding: '40px 20px' , backgroundColor: 'azure' }}>
        <Row justify="space-between" align="middle" className="footer-content">
          <Col lg={7} sm={24} xs={24}>
            <div className="footer-section" style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '24px', fontWeight: 'bold' , color: 'orangered' }}>UrbanRentals</p>
              <p>Explore Beyond Limits, Embrace Every Mile</p>
              <p><i>We value your feedback.</i></p>
              <p><i>© UrbanRentals. All rights reserved.</i></p>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-section" style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '8px' , fontFamily: 'Montserrat' , fontSize: '24px' }}>Follow Us</p>
              <div className="d-flex flex-column align-items-center">
                <a
                  href="https://www.linkedin.com/in/raunak-srivastava6762/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: 8}}
                >
                  <AiFillLinkedin size={32} style={{ transition: 'color 0.3s' }} className="linkedin-icon" />
                </a>
                <a
                  href="https://github.com/Raunak-Srivastava/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={32} style={{ transition: 'color 0.3s' }} className="github-icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .linkedin-icon:hover {
          color: #0077b5;
        }
        .github-icon:hover {
          color: black;
        }
        .footer-content {
          display: flex;
          align-items: stretch;
        }
        .footer-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
          }
          .footer-section {
            text-align: center;
          }
        }
      `}</style>



    </div>
  )
}

export default DefaultLayout