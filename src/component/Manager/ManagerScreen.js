import React from 'react';
import AgentStatusCard from './agentStatusCard';
import CallStatusTable from './CallStatusTable';
import StatuTag from "./StatusTag";
import { HiChartPie } from 'react-icons/hi';
import { GiProgression } from 'react-icons/gi';
import { HiPhoneIncoming } from 'react-icons/hi';
import { MdPhoneInTalk } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import { MdQueue } from 'react-icons/md';
import { MdPhoneMissed } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { ImSwitch } from 'react-icons/im';
import { IoTimerSharp } from 'react-icons/io5';
import "./style.css";
import { Layout, Row, Col, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Reducers/UserSlice';
const { Text } = Typography;
const { Header, Content } = Layout;

const ManagerScreen = () => {
    const { loginUser } = useSelector(state => state?.UserSlice); //redux toolkit store 
    let navigate = useNavigate();
    const dispatch = useDispatch();


    const logOut = () => {
        dispatch(logOutUser());
        navigate('/login');
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                <Row span={24} justify="space-between">

                    <Col style={{ marginLeft: "12px" }}>
                        <Text strong >Manager Panel</Text>
                    </Col>
                    <Col style={{ marginRight: "12px" }}>
                        <Text strong style={{ marginRight: "12px" }}> {loginUser?.first_name}{" "} {loginUser?.last_name} </Text>
                        <Button type='primary' size='middle' shape='round' onClick={logOut}>
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Header>
            <Content style={{ overflowX: 'scroll' }}>
                <div className="site-layout-background" >
                    <div className='wallboard-main-container wll-brd' >
                        <div className='wll-bord-row-1'>
                            {/* <div className="borderBox" /> */}
                            <div className='total-agent-box'>
                                <div className="total">1794</div>
                                <div className="heading">TOTAL NUMBER OF AGENTS</div>
                            </div>

                            <div className="wll-bord-row-2">
                                <AgentStatusCard color={"#5a4183"} borderColor={"#3b2361"} boxShadow={"#4f3379"} />
                                <AgentStatusCard color={"#01a283"} borderColor={"#036855"} boxShadow={"#505e5b"} />
                            </div>
                        </div>

                        <div className='row-divider' />

                        <div className="wll-bord-row-3">
                            <StatuTag data={{ icon: <MdQueue color={"#1ace6b"} size={33} />, title: "Call in queue", status: "022", color: "#1ace6b" }} />
                            <StatuTag data={{ icon: <IoMdClock color={"#1aae5a"} size={45} />, title: "WAIT TIME", status: "02", color: "#1aae5a" }} />
                            <StatuTag data={{ icon: <HiPhoneIncoming color={"#5aaae5"} size={36} />, title: "LANDED CALLS", status: "02", color: "#5aaae5" }} />
                            <StatuTag data={{ icon: <MdPhoneInTalk color={"#217dbe"} size={35} />, title: "ANSWERED CALL", status: "02", color: "#217dbe" }} />
                            <StatuTag data={{ icon: <HiChartPie color={"#ad65d5"} size={40} />, title: "PIE CHART", status: "02", color: "#ad65d5" }} />
                            <StatuTag data={{ icon: <GiProgression color={"#8c3cb5"} size={33} />, title: "SERVICE LEVEL", status: "02", color: "#8c3cb5" }} />
                            <StatuTag data={{ icon: <MdPhoneMissed color={"#ef5b9ad6"} size={33} />, title: "ABANDONED CALLS", status: "02", color: "#ef5b9ad6" }} />
                            <StatuTag data={{ icon: <FaCalendarAlt color={"#a6004a"} size={30} />, title: "MTD SERVICE LEVEL", status: "02", color: "#a6004a" }} />
                            <StatuTag data={{ icon: <IoTimerSharp color={"#ffaa3b"} size={45} />, title: "AVERAGE HANDLING TIME", status: "02", color: "#ffaa3b" }} />
                            <StatuTag data={{ icon: <ImSwitch color={"#d68a2a"} size={35} />, title: "LAST 5 MINUTES LOGOUT", status: "02", color: "#d68a2a" }} />
                        </div>

                        <div className='row-divider' />
                        <CallStatusTable />
                    </div>
                </div>
            </Content>


        </Layout>

    )
}

export default ManagerScreen;