import React from 'react'
import { Tabs, Space } from "antd";
import { Divider } from "antd";
import { Collapse, Carousel, Rate } from "antd";

const contentStyle = {
    margintop: "90px",
    height: "160px",
    color: "purple",
    lineHeight: "160px",
    textAlign: "center",
    background: "white",
};
const { TabPane } = Tabs;

import {
    StarOutlined,
    BehanceSquareOutlined,
    DownloadOutlined,
    TeamOutlined,
    CalendarOutlined,
    SyncOutlined,
    HomeOutlined,
    SafetyCertificateOutlined,
    VideoCameraOutlined,
    BulbOutlined,
    MessageOutlined,
    RightOutlined,
    ArrowRightOutlined,
    LeftOutlined,
    ArrowLeftOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import { Steps, Popover } from "antd";

const { Step } = Steps;
import Nav2 from './Nav2';

import { Card, Col, Row } from "antd";
import { Button } from "antd";
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
} from "antd";

import { Typography } from "antd";
import { Image } from "antd";

const { Title } = Typography;
const { Text } = Typography;

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

const gridStyle = {
    width: "25%",
    textAlign: "center",
};
const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
        <ul>

            <li>Personal settings</li>
            <li>Company details</li>
            <li>Gamescope</li>

        </ul>
    </p>
);
const text1 = (
    <ul>
        <li>Leads, contacts, accounts, deals, and campaigns
<br />Activities (tasks, events, and calls)</li>

    </ul>
);
const text2 = (
    <ul>
        <li>Email Marketing</li>
    </ul>
);
const text3 = (
    <ul>
        <li>Products, quotes, invoices, sales orders, purchase
<br />orders, price books, and vendors</li>

    </ul>
);
const text4 = (
    <ul>

        <li> Users</li>
        <li>Security control</li>
        <li>Compliance settings</li>
        <li>Territory management</li>


    </ul>
);
const text5 = (
    <ul>
        <li>All mass actions (emails, field updates,
        changing owner, converting, etc.)</li>
        <li>Macro actions</li>
        <li>Tags</li>
        <li>Merge duplicates</li>


    </ul>
);
const text6 = (
    <ul>


        <li>List view</li>
        <li>Kanban view</li>
        <li>Canvas view</li>
        <li>Advance filters</li>
        <li> Business card view</li>
        <li>Related list customization</li>


    </ul>
);
const text7 = (
    <ul>

        <li>Modules and fields</li>
        <li>Templates</li>
        <li>Wizards</li>
        <li>Pipelines</li>
        <li>  Copy customization
        Customize home page (three types of home screen)
        Translation</li>

    </ul>
);
const text8 = (
    <ul>

        <li>Emails</li>
        <li>Telephony</li>
        <li> Social</li>
        <li>Chats</li>
        <li>Signals</li>
        <li>Portals</li>

    </ul>
);
const text9 = (
    <ul>
        <li>Workflow and actions</li>
        <li>Schedules</li>
        <li>Assignments rules</li>
        <li>Case escalation rules</li>
        <li>Scoring rules</li>
        <li>  Marketing attribution</li>

    </ul>
);
const text10 = (
    <ul>

        <li>Blueprint</li>
        <li>Approval process</li>
        <li>Review process</li>
        <li>CommandCenter</li>



    </ul>
);
const text11 = (
    <ul>

        <li>Import (module specific and data migration
        from other CRM)</li>
        <li>Export</li>
        <li>Data backup</li>
        <li>Storage (documents)</li>
        <li>Recycle bin</li>
        <li>Audit log</li>


    </ul>
);
const text12 = (
    <ul>

        <li> All</li>
        <li>Zoho</li>
        <li>Google</li>
        <li>Microsoft</li>

    </ul>
);
const text13 = (
    <ul>

        <li>Reports and dashboards</li>
        <li>Forecasts</li>
        <li>feeds</li>



    </ul>
);
const text14 = (
    <ul>

        <li>Webforms and analytics</li>
        <li>Webform A/B testing</li>



    </ul>
);
const text15 = (
    <ul>

        <li>CRM mobile app</li>

    </ul>
);
const text16 = (
    <ul>

        <li> Single sign-on (SAML)</li>
        <li>Security policies</li>
        <li>Active directory sync</li>
        <li>Login history</li>



    </ul>
);



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                color: "",
                fontSize: "25px",
                lineHeight: "1.5715",
                marginRight: ""
            }}
            onClick={onClick}
        >
            <RightOutlined style={{ color: 'purple' }} />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                color: '',
                fontSize: "25px",
                lineHeight: "1.5715",
                margineft: '500px'

            }}
            onClick={onClick}
        >
            <LeftOutlined style={{ color: 'purple' }} />
        </div>
    );
};

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

const contentStyle1 = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const SampleNextArrow1 = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                color: '',
                fontSize: "25px",
                lineHeight: "1.5715",
                marginRight: '290px'
            }}
            onClick={onClick}
        >
            <ArrowRightOutlined style={{ color: "purple" }} />
        </div>
    );
};

const SimplePrevArrow1 = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                color: "",
                fontSize: "50px",
                lineHeight: "1.5715",
                marginLeft: "250px"
            }}
            onClick={onClick}

        >
            <ArrowLeftOutlined style={{ color: 'white' }} />

        </div>
    );
};

const settings1 = {
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SimplePrevArrow1 />
};

export default function Home1() {
    return (
        <div>
            <Nav2 />
            <div
                class="row"
                style={{
                    marginLeft: "40px",
                    top: "px",
                    left: "30px",
                    backgroundcolor: "purple",
                }}
            >
                <Image
                    style={{ marginTop: "120px", width: "100%", color: "purple" }}
                    width={1250}
                    src="a10.webp"
                />

                <div
                    className="col-6"
                    style={{
                        position: "absolute",
                        bottom: "278px",
                        left: "796",
                        color: "white",
                        top: "200px",
                        marginTop: "10px",

                    }}
                >
                    <div
                        className="site-card-border-less-wrapper"
                        style={{ padding: "30px", background: "#ececec", marginLeft: '750px' }}
                    >
                        <Card bordered={false} style={{ width: "400px", height: "500px", marginLeft: '' }}>
                            <div style={{ width: "70%", border: '', }}>
                                <Form>
                                    <Form.Item label="Email" placeholder="Ayush@gmail.com">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Password">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="FullName">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Mobile no">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Batch">
                                        <Select>
                                            <Select.Option value="demo">
                                                start 1st December 2020
                      </Select.Option>
                                            <Select.Option value="demo">
                                                start 15th December 2020
                      </Select.Option>
                                            <Select.Option value="demo">
                                                start 20th December 2020
                      </Select.Option>
                                            <Select.Option value="demo">
                                                start 1st January 2021
                      </Select.Option>
                                            <Select.Option value="demo">
                                                start 15th january 2021
                      </Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="choose your Objective">
                                        <Select>
                                            <Select.Option value="demo">
                                                Gain aa new skill
                      </Select.Option>
                                            <Select.Option value="demo">
                                                Build my own project
                      </Select.Option>
                                            <Select.Option value="demo">
                                                Get an internship/job in future
                      </Select.Option>
                                            <Select.Option value="demo">
                                                Get Certificate
                      </Select.Option>
                                            <Select.Option value="demo">
                                                fulfil college Reqirement
                      </Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <span
                                        style={{
                                            color: "black",
                                            Right: "80px",
                                            marginLeft: "60px",
                                        }}
                                    >
                                        {" "}
                                        <Text delete>Rs4499</Text>Rs 3339 valid till Dec
                  </span>
                                    <br></br>
                                    <Button
                                        style={{
                                            backgroundColor: "blue",
                                            color: "white",
                                            borderRadius: "30px",
                                            marginLeft: "100px",
                                        }}
                                    >
                                        Signup
                  </Button>
                                </Form>
                            </div>
                        </Card>
                    </div>
                </div>

                <div
                    class="bottom-left"
                    style={{
                        position: "absolute",
                        bottom: "278px",
                        left: "196px",
                        color: "white",
                        top: "200px",
                        marginTop: "15px",

                    }}
                >
                    &nbsp; <Button
                        style={{
                            borderRadius: "1px",
                            backgroundColor: "#00FFC6",
                            color: "#005441",
                            font: "proximanova-semibold",
                            color: "black",
                            margineft: '90px'
                        }}
                    >
                        Certified Online Training{" "}
                    </Button>
                    <br />
                    <br />
                    <br />
                    <div style={{ margintop: "10px" }}>
                        {" "}
                        <Text
                            underline
                            style={{
                                color: "white",
                                font: "60px proximanova-extrabold",
                                padding: "3px -8px",
                                marginTop: "-9px",
                                marginLeft: "4px",
                                lineheight: "64px",
                            }}
                        >
                            LEARN ZOHO
                            CRM
            </Text>
                        <br />
                        <br />
                        <Title
                            style={{
                                color: "white",
                                font: "24px proximanova-regular",
                                Top: "5px",
                                color: "white",
                            }}
                        >
                            Zoho CRM streamlines the day-to-day operations<br />
                             of thousands of businesses around the globe, every <br />
                             single day.

            </Title>
                        <Button
                            style={{
                                color: "black",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                marginLeft: "",
                                fontweight: "600",
                                fontsize: "14px",
                                lineheight: "16px",
                            }}
                        >
                            <StarOutlined />
              4.2
            </Button>
                        <Button
                            style={{
                                color: "black",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                marginLeft: "5px",
                            }}
                        >
                            <TeamOutlined />
              32,289 Enrolled
            </Button>
                        <Button
                            style={{
                                color: "black",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                marginLeft: "5px",
                            }}
                        >
                            <CalendarOutlined />6 weeks
            </Button>
                        <Button
                            style={{
                                color: "black",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                marginLeft: "5px",
                            }}
                        >
                            <SyncOutlined />
              Placement Assistance
            </Button>
                    </div>
                </div>
            </div>

            <div
                className="card"
                style={{
                    color: "black",
                    backgroundColor: "",
                    width: "100%",
                    marginTop: "100px",
                    marginBottom: "100px",
                    marginLeft: "140px",
                }}
            >
                <Title
                    style={{
                        color: "black",
                        justifyContent: "center",
                        marginLeft: "360px",
                        marginBottom: "80px",
                        font: "28px proximanova-bold",
                        color: "#444444",
                    }}
                ></Title>
            </div>
            <div
                className="card"
                style={{
                    color: "black",
                    backgroundColor: "",
                    width: "100%",
                    marginTop: "100px",
                    marginBottom: "100px",
                    marginLeft: "140px",
                }}
            >
                <Title
                    style={{
                        color: "black",
                        justifyContent: "center",
                        marginLeft: "360px",
                        marginBottom: "80px",
                        font: "28px proximanova-bold",
                        color: "#444444",
                    }}
                >
                    <b>Training Highlights</b>{" "}
                </Title>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img style={{ width: "50px" }} src="learn.png" />
          &nbsp;&nbsp;
          <h3 style={{ font: "20px proximanova-bold", color: "#444444" }}>
                        {" "}
                        <b>Learn from home</b>
                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            stay safe indoors
            </Text>
                    </h3>
                    <img
                        style={{ width: "50px", marginLeft: "130px" }}
                        src="certificate.png"
                    />
          &nbsp;&nbsp;
          <Title
                        style={{
                            marginTop: "2px",
                            margineft: "",
                            padding: "0 0 0 ",
                            font: "20px proximanova-bold",
                            color: "#444444",
                        }}
                    >
                        <b>Certificate of Training</b>
                        <br />
                        <Text style={{ font: "16px proximanova-bold" }}>
                            From ZOHO Trainings
            </Text>
                    </Title>


                    <img style={{ width: "50px", marginLeft: "100px" }} src="weeks.png" />
          &nbsp;&nbsp;
          <Title
                        style={{
                            marginTop: "2px",
                            margineft: "",
                            padding: "0 0 0 ",
                            font: "20px proximanova-bold",
                            color: "#444444",
                        }}
                    >
                        <b>6 weeks access</b>

                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            To the platform
            </Text>
                    </Title>
                </div>
                <div style={{ display: "flex", marginTop: "30px" }}>
                    <img style={{ width: "50px" }} src="video.png" />
          &nbsp;&nbsp;
          <Title style={{ font: "20px proximanova-bold", color: "#444444" }}>
                        {" "}
                        <b>video tutorials</b>
                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            Learn anytime, anywhere
            </Text>
                    </Title>
                    <img
                        style={{ width: "50px", marginLeft: "120px" }}
                        src="projects.png"
                    />
          &nbsp;&nbsp;
          <Title
                        style={{
                            marginTop: "2px",
                            margineft: "",
                            padding: "0 0 0 ",
                            font: "20px proximanova-bold",
                            color: "#444444",
                        }}
                    >
                        <b>Build  projects</b>
                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            For hands-on practice
            </Text>
                    </Title>
                    <img
                        style={{ width: "50px", marginLeft: "150px" }}
                        src="doubt1.png"
                    />
          &nbsp;&nbsp;
          <Text
                        style={{
                            marginTop: "2px",
                            margineft: "",
                            padding: "0 0 0 ",
                            font: "20px proximanova-bold",
                            color: "#444444",
                        }}
                    >
                        <b>Doubt clearing</b>
                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            Through Q&A forum
            </Text>
                    </Text>
                </div>



            </div>



            <div
                className="site-card-wrapper"
                style={{ backgroundColor: "#FCF5FF", width: "90%", marginLeft: '60px', paddingBottom: '40px', marginRight: '40px', paddingTop: '40px' }}
            >
                <div style={{ paddingBottom: "50px" }}>
                    <Text style={{ font: '28px proximanova-bold', color: '#4444444', marginLeft: '380px' }}><b>How will you get your certificate?</b>
                    </Text>
                </div>
                <Row gutter={24}>
                    <Col span={12}>
                        <div
                            style={{
                                marginTop: "110px",
                                font: "px proximanova-regular",
                                color: "#444444",
                                marginLeft: "350px",
                            }}
                        >
                            <Text style={{ font: '16px proximanova-regular', color: '#444444' }}>
                                {" "}
                  Take the final exam online to complete the Zoho CRM{" "}
                   Training after which you will be able to download your
                  certificate from Zoho Crm Trainings
                </Text>
                .
              </div>
                    </Col>
                    <Col span={12}>
                        <Image width={350} src="zohocc.png" />
                    </Col>
                </Row>
            </div>
            <div style={{ paddingRight: '10px', paddingLeft: '10px', marginRight: '10px', marginLeft: '10px' }}>
                <div style={{ marginTop: '80px', marginLeft: '40px', marginRight: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', paddingBottom: '40px' }}>
                    {" "}
                    <Text style={{ font: "28px proximanova-bold", color: "#444444", marginLeft: '380px' }}>
                        <b> What placement assistant will you receive?</b>
                    </Text>{" "}
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginLeft: "40px" }}
                                    width={200}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_1.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    Free{" "}
                                    <b>
                                        Placement <br />
                    Preparation Training
                  </b>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginLeft: "40px" }}
                                    width={200}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_2.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    Access to{" "}
                                    <b>
                                        accurated <br /> internship & jobs
                  </b>{" "}
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginRight: "40px" }}
                                    width={500}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_3.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    Top performers will be{" "}
                                    <b>highlighted in their internship & job applications</b> on
                  Internshala
                </h>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#FCF5FF",
                    width: "90%",
                    marginTop: "100px",
                    marginLeft: '60px',
                    marginRight: '20px',
                    paddingTop: '50px',
                    paddingBottom: '50px'
                }}
            >
                <div style={{ paddingBottom: '60px', marginLeft: '80px' }}>
                    <h style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '20px', marginLeft: '400px' }}><b>Why we learn Zoho Crm</b></h></div>

                <div
                    className="site-card-wrapper"
                    style={{ backgroundColor: "#FCF5FF", }}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={600}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/take_your_idea_to_millions.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "90px",
                                    }}
                                >
                                    <b>Take your idea to millions</b>
                                    <br />
                                    <h1 style={{ font: '16px proximanova-regular', color: '#444444' }} >Whether you have an app, blog, YouTube channel, or want to
                    manage publicity for your college fest; !</h1>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={700}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/be_in_demand.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Be in demand</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>Digital marketing is one of the hottest career options these
                                    days with thousands of internships and jobs being added
                    everyday..</h2>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={600}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/channel_your_creativity.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Channel your creativity</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>
                                        Whether you like numbers, or wordplay, or designing things;
                                        digital marketing offers a heady mix of creativity for
                                        everyone.
                    </h2>
                                </h>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div style={{ width: "90%", marginTop: "80px", marginBottom: "80px", paddingleft: '180px', paddingRight: '40px', marginLeft: '70px' }}>
                <div>
                    <Text
                        style={{
                            marginLeft: "430px",
                            color: "black",
                            font: "28px proximanova-bold",
                        }}
                    >
                        <b>How will your training work</b>
                    </Text>
                </div>
                <div style={{ marginTop: "120px", color: "purple" }}>
                    <Steps style={{ backgroundcolor: "purple" }} current={1}>
                        <Step
                            style={{ color: 'black' }}
                            title="1"
                            description="<b>Watch the video you learn various concept.</b>"
                        />
                        <Step style={{ Color: 'purple' }}
                            status="finish"

                            title="2"
                            description="Test your knowledge through quizzes and module test."
                        />
                        <Step
                            status="finish"
                            style={{ color: "purple" }}
                            title="3"
                            description="Get hand on practice by doing project."
                        />
                        <Step
                            status="finish"
                            style={{ color: "purple" }}
                            title="4"
                            description="Take the final exam to get certified in digital marketing."
                        />
                    </Steps>
                </div>
            </div>

            <div style={{ backgroundColor: "#FCF5FF", marginTop: '40px', marginBottom: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', marginLeft: '80px' }}>
                <div style={{ backgroundcolor: "#f8f8f8", marginLeft: "380px" }}>
                    <Title style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '40px', paddingBottom: '40px' }} level={5}><b>How will your doubt get solved</b></Title>
                    <img src="doubt1.png" style={{ width: "80px", margintop: "180px" }} />
                    <Text style={{ display: "inline-block" }}>
                        You can post your doubts on the Q&A forum{" "}<br />
              which will be answered by the teachers within 24 hours.
            </Text>
                </div></div>

            <div style={{ marginTop: "50px", marginLeft: "500px" }}>
                <div className="site-card-wrapper" marginRight>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card >
                                <img src="bbsir.jpg" style={{ borderRadius: '50%', width: '150px' }} />
                                <Title level={4}>Bhuwnesh Shrivastava</Title>
                                <Button style={{ backgroundColor: 'black', color: 'white' }}>8+ year experience</Button>
                                <br /><br /><br />
                                <Text>PGPDA (IIIT-B) | Digital Marketing (IIM<br />&nbsp;&nbsp;&nbsp;&nbsp;-B)</Text><br />
                                <br /> Google Certified | Managed 10 Million+ Ads Spent<br />
                                <br />
                                <LinkedinOutlined style={{}} />

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <img src="rahul.jpg" style={{ borderRadius: '80%', width: '250px' }} />
                                <Title level={4}>Abhishek Singh Bhadouria</Title>
                                <Button style={{ backgroundColor: 'black', color: 'white' }}>4+ year experience</Button>
                                <br /><br /><br />
                                <Text>
                                    OMCP | Google Certified |
                                   <br /> Facebook Ad Expert |
                                   <br /> Managed 1 Million+ Ads Spent
                                </Text><br /><br /><br />
                                <LinkedinOutlined />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card >
                                <img src="pp.jpg" style={{ width: '250px' }} />
                                Card content
        </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            <div
                style={{
                    width: "80%",
                    height: "",
                    margintop: "80px",
                    marginLeft: "120px",
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    marginBottom: '40px'
                }}
            >
                <Text
                    style={{
                        marginTop: "50px",
                        marginLeft: "280px",
                        justifyContent: "center",
                        font: "28px proximanova-bold",
                        color: "black",

                        marginBottom: '40px',
                        paddingBottom: '40px'
                    }}
                >
                    <b>What will be the training syllabus?</b>
                </Text>
                <div style={{ fontSize: "50px", margintop: "180px", paddingTop: '80px', }}>
                    <Collapse bordered={false} defaultActiveKey={["1"]}>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="General"
                            key="1"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text}</div>
                        </Panel>
                        <br />
                        <br />

                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Sales Process Automation"

                            key="2"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text1}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Inventory Management"
                            key="3"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text2}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Users and Control"

                            key="4"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text3} </div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="User Interface"
                            key="5"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text4}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Basic Customization
                                                                 "
                            key="6"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text5}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Advanced Customization"
                            key="7"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Channels"
                            key="8"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Automation"
                            key="9"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text7}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 11 Process Management"
                            key="10"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text8}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Data Administration"
                            key="11"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text9}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Data Administration"
                            key="12"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text10}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Marketplace"
                            key="13"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text11}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Other Modules"
                            key="14"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text12}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Zoho Directory
"
                            key="15"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text13}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 18 Zia in Zoho CRM

"
                            key="16"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text14}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 19 Accounts Security

"
                            key="17"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text15}</div>
                        </Panel>
                        <br />
                        <br />

                    </Collapse>
                </div>
            </div>

        </div>
    )
}
