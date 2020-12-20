import React from 'react'
import Link from 'next/link'
import { Button, Card, Descriptions } from 'antd'
import { Collapse, Form, Input, Checkbox } from 'antd';

const { Panel } = Collapse;
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};


const menu = (
    <Menu onClick={onClick}>

        <Descriptions layout="vertical" style={{ marginLeft: '80px', color: 'black', marginBottom: '50px', marginRight: '80px', width: '50%' }}>
            <Descriptions.Item label="Digital Marketing">Advance Excel<br />Seo<br />Learn Startup<br />Financial modelling and evaluation
          </Descriptions.Item>
            <Descriptions.Item label="Crm">zohocrm<br />Graphic design<br />UI/Ux design</Descriptions.Item>
            <Descriptions.Item label="Accounting">Zoho books<br />Bussiness communication skills<br />Internship & job opportunities</Descriptions.Item>



        </Descriptions>


    </Menu>);
const menu1 = (
    <Menu onClick={onClick}>

        <Descriptions layout="vertical" style={{ marginLeft: '80px', color: 'black', marginBottom: '50px', marginRight: '80px' }}>
            <Descriptions.Item label="Location" >Work from Home<br />Internship in Banglore<br /> Internship in Delhi<br />Internship in Chhatisgarh
         <br />Internship in Dubai<br />Internship in karnataka  </Descriptions.Item>
            <Descriptions.Item label="Profile">computer science Internship<br />MarketingInternship<br />Finance Internship<br />part Time job internship<br />Graphic designing Internship</Descriptions.Item>
            <Descriptions.Item label="Category">BE in CS/IT<br />MBA <br />BBA/BCOM<br />BE in ETNInternship & job opportunities</Descriptions.Item>



        </Descriptions>


    </Menu>);
const menu2 = (
    <Menu onClick={onClick}>

        <Descriptions>
            <Card>
                <Form

                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
        </Button>
                    </Form.Item>
                </Form>



            </Card>
        </Descriptions>


    </Menu>);
const menu3 = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">As a student</Menu.Item>
        <Menu.Item key="2">As a employeeee</Menu.Item>
    </Menu>
);

export default function Nav1() {
    return (

        <div style={{ width: '80%', marginBottom: '0px', paddingBottom: '0px', marginLeft: '600px', display: 'flex', overflowX: 'hidden', marginTop: '50px', top: '0px', postion: 'fixed' }}>


            <div style={{ marginLeft: '0px', marginTop: '6px' }}><img src="logo2.png" style={{ width: '150px', paddingTop: '0px' }} /></div>
            <div style={{ padding: '20px', font: '20px proximanova-bold' }}>

                <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Internship <DownOutlined />
                    </a>
                </Dropdown>


            </div>
            <div style={{ padding: '20px', font: '20px proximanova-bold' }}>

                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Online Training <DownOutlined />
                    </a>
                </Dropdown>


            </div>
            <div style={{ padding: '20px', font: '20px proximanova-bold' }}>

                <Dropdown overlay={menu2}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: 'white', backgroundColor: 'blue' }}>
                        Login <DownOutlined />
                    </a>
                </Dropdown>


            </div>
            <div style={{ padding: '20px', font: '20px proximanova-bold' }}>

                <Dropdown overlay={menu3}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: 'white', backgroundColor: 'blue' }}>
                        Register
                    </a>
                </Dropdown>


            </div>





        </div>
    )
}
