import React from 'react'
import Nav from './Nav';
import { Image, Card, Row, Col } from 'antd'
import { Typography } from 'antd';
import { Button, notification } from 'antd';

const { Title } = Typography;




export default function Teacher() {
  return (
    <div >
      <Nav />




      <div className="site-card-wrapper" style={{ marginTop: '180px', width: '100%' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <img src="nsir.jpg" style={{ borderRadius: '50%' }} />
              <div style={{ marginLeft: '40px' }}><Title style={{ marginLeft: '50px' }} level={3}>Nasir bhati</Title>
                <Button style={{ backgroundcolor: 'black', color: 'white' }}><Title level={5}>Founder of NB technology </Title></Button>
              </div>  </Card>
          </Col>
          <Col span={8}>
            <Card>
              <img src="bsir.jpg" style={{ borderRadius: '50%' }} />
              <div style={{ marginLeft: '40px' }}><Title style={{ marginLeft: '50px' }} level={3}>Bhuvnesh shrivastav</Title>
                <Button style={{ backgroundcolor: 'black', color: 'white' }}><Title level={5}>Cofounder of NB technology </Title></Button>
              </div>  </Card>
          </Col>
          <Col span={8}>
            <Card>
              <img src="rahul.jpg" style={{ borderRadius: '50%' }} />
              <div style={{ marginLeft: '40px' }}><Title style={{ marginLeft: '50px' }} level={3}>Nasir bhati</Title>
                <Button style={{ backgroundcolor: 'black', color: 'white' }}><Title level={5}>Digital Marketing expert </Title></Button>
              </div>  </Card>
          </Col>
        </Row>
      </div>





    </div>

  )
}
