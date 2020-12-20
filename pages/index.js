import React from 'react'

import Link from 'next/link'
import Nav from './Nav'
import Home from './Home'
import LearnzohoCrm from './LearnzohoCrm'
import { Descriptions, Badge } from 'antd';


import { StarOutlined, BehanceSquareOutlined, DownloadOutlined, TeamOutlined, CalendarOutlined, SyncOutlined, HomeOutlined, SafetyCertificateOutlined, VideoCameraOutlined, BulbOutlined, MessageOutlined, CheckOutlined } from '@ant-design/icons';
import { Steps, Popover } from 'antd';
import { Typography } from 'antd';


const { Step } = Steps;

import { Card, Col, Row } from 'antd';
import Nav1 from './Nav1'
import { Button } from 'antd'
import {
  Form,
  Input,

  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
'react'

import { Tabs, Space } from 'antd';
import { Divider } from 'antd';
import { Collapse, Carousel, Rate } from 'antd';


const { TabPane } = Tabs;
const { Text } = Typography;







import { Image } from 'antd'

import { Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function index() {
  return (
    <div style={{ overflowX: 'hidden' }} >
      <Nav1 />
      <div style={{ marginTop: '100px', marginBottom: '100px', marginLeft: '120px' }}>

        <div style={{ display: 'flex', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '0px', paddingRight: '80px' }}>
          <div>




            <img src="download.jpg" />
            <br /><br />
            <Title level={4}>Learn Digital Marketing<br />
              <CheckOutlined style={{ color: 'blue' }} />  Search engine optimization &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (SEO)<br />
              <CheckOutlined style={{ color: 'blue' }} />Social media marketing<br />
              <Link href="/Home"><Button style={{ color: 'white', backgroundColor: 'red', borderRadius: '20px' }}>Learn Digital marketing</Button></Link>

            </Title>
            <br /><br />



          </div>
          <div style={{ marginLeft: '120px' }}>


            <img src="zohoc.jpg" />
            <br /><br />
            <Title level={4}>Learn Zoho Crm
               <br /><CheckOutlined style={{ color: 'blue' }} />Email management<br />
              <CheckOutlined style={{ color: 'blue' }} />Sales Automation.<br />  <CheckOutlined style={{ color: 'blue' }} />Sales Automation.<br />

              <Link href="/LearnzohoCrm"><Button style={{ color: 'white', backgroundColor: 'red', borderRadius: '100px' }}>Learn Zoho Crm</Button></Link>

            </Title>
            <br /><br />




          </div>
          <div style={{ marginLeft: '120px' }}>





            <img src="zohob.jpg" />
            <br /><br />
            <Title level={4}>Learn Zoho Books
              <br /><CheckOutlined style={{ color: 'blue' }} />- Licencing<br />
              <CheckOutlined style={{ color: 'blue' }} />- Implementation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consultancy<br />
              <Link href="/LearnZohoBooks"><Button style={{ color: 'white', backgroundColor: 'red', borderRadius: '60px' }}>Learn Zoho Books</Button></Link>

            </Title>




          </div>


        </div>
      </div>






      <div style={{ color: 'white', backgroundColor: 'grey', marginTop: '100px' }}>

        <Descriptions layout="vertical" style={{ marginLeft: '80px', backgroundColor: '', color: 'white', marginBottom: '50px', marginRight: '80px' }}>
          <Descriptions.Item label="Digital Marketing">Advance Excel<br />Seo<br />Learn Startup<br />Financial modelling and evaluation
          </Descriptions.Item>
          <Descriptions.Item label="Crm">zohocrm<br />Graphic design<br />UI/Ux design</Descriptions.Item>
          <Descriptions.Item label="Accounting">Zoho books<br />Bussiness communication skills<br />Internship & job opportunities</Descriptions.Item>



        </Descriptions>

      </div>









    </div>




  )
}
