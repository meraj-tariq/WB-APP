import React from 'react';
import USERDATATABLE from './AgentTable';
import { Layout, Row, Col, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Reducers/UserSlice';

const { Text } = Typography;
const { Header, Content } = Layout;

const SupervisorScreen = () => {
    const { loginUser } = useSelector(state => state?.UserSlice); //redux toolkit store 
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logOutUser());
        navigate('/login');
    }
    return (
        <Layout  className="supervisor-main">
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                <Row span={24} justify="space-between">
                    <Col style={{ marginLeft: "12px" }}>
                        <Text strong >{loginUser.role_type === 1 ? "Manager Panel" : "Supervisor Panel"}</Text>
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
                <div className='wallboard-main-container'>
                    <div className='wallBoard-main-row'>

                        <div className='agent-status-logOut' style={{display: "flex" }}>
                            <div className='w-b-filterAgentItem'>
                                <div>
                                    <h2 style={{ fontWeight: "bold" }}>AGENT STATUS</h2>
                                </div>
                                <div>
                                    <select
                                        placeholder="SELECT CRITERIA"
                                        style={{ borderRadius: "7px", marginBottom: "6px", width: "200px", height: "30px", padding: "0 4px" }}>
                                        <option value={""}>SELECT CRITERIA</option>
                                    </select>
                                </div>
                                <div>
                                    <input placeholder="SEARCH HERE"
                                        style={{
                                            width: "200px", height: "30px", borderRadius: "7px", border: "1px solid black",
                                            padding: " 0px 7px", color: "black", FfontSize: "12px"
                                        }} /></div>
                            </div>

                            <div className='w-b-logout-status'>
                                <div className='status-logout'>
                                    10 Min
                                    LOGOUT
                                </div>

                            </div>
                        </div>

                        <div className="box-container">
                            <div className='w-b-box' style={{ backgroundColor: "#62b6ff" }}>
                                <div className='df sts-item'>230</div>
                                <div className='df s-item'>ACTIVE AGENTS</div>
                            </div>
                            <div className='w-b-box' style={{ backgroundColor: "#ff9d0b" }}>
                                <div className='df sts-item'>20</div>
                                <div className='d s-item'>NOT READY</div>
                            </div>
                            <div className='w-b-box' style={{ backgroundColor: "#d80000e0" }}>
                                <div className='df sts-item'>05</div>
                                <div className='df s-item'>LOGOUT</div>
                            </div>
                        </div>

                    </div>

                    <USERDATATABLE />
                </div>
            </Content>
        </Layout>


    )
}

export default SupervisorScreen;