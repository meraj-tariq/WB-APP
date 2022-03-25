import React, { useEffect } from 'react';
import USERDATATABLE from './AgentTable';
import { Layout, Row, Col, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Reducers/UserSlice';
import { GET_SUPERVISOR_DATA } from '../utils/WallboardService/Api';
import { filterAgents } from '../Manager/store/managerSlice';

const { Text } = Typography;
const { Header, Content } = Layout;

const SupervisorScreen = () => {
    const { loginUser } = useSelector(state => state?.UserSlice); //redux toolkit store 
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { superVisorTableData, TotalActiveAgent, TotalNotReady, TotalLogOut } = useSelector(state => state?.ManagerdSlice);


    useEffect(() => {
        dispatch(GET_SUPERVISOR_DATA());
    }, [])

    const logOut = () => {
        dispatch(logOutUser());
        navigate('/login');
    }

    const filterAgentsHandle = (category) => {
        if (category === "all") {
            dispatch(GET_SUPERVISOR_DATA());
        } else {
            dispatch(filterAgents(category))
        }
    }
    return (
        <Layout className="supervisor-main">
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

                        <div className='agent-status-logOut' style={{ display: "flex" }}>
                            <div className='w-b-filterAgentItem'>
                                <div>
                                    <h2 style={{ fontWeight: "bold" }}>AGENT STATUS</h2>
                                </div>
                                <div>
                                    <select
                                        onChange={(e) => filterAgentsHandle(e.target.value)}
                                        placeholder="SELECT CRITERIA"
                                        style={{ borderRadius: "7px", marginBottom: "6px", width: "200px", height: "30px", padding: "0 4px" }}>
                                        <option value={"all"}>SELECT CRITERIA</option>
                                        <option value={"RY"}>Ready</option>
                                        <option value={"NR"}>Not Ready</option>
                                        <option value={"LO"}>Logout</option>
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
                                <div className='df sts-item'>{TotalActiveAgent ? TotalActiveAgent?.length : "00"}</div>
                                <div className='df s-item'>READY</div>
                            </div>
                            <div className='w-b-box' style={{ backgroundColor: "#ff9d0b" }}>
                                <div className='df sts-item'>{TotalNotReady ? TotalNotReady?.length : "00"}</div>
                                <div className='d s-item'>NOT READY</div>
                            </div>
                            <div className='w-b-box' style={{ backgroundColor: "#d80000e0" }}>
                                <div className='df sts-item'>{TotalLogOut ? TotalLogOut?.length: "00"}</div>
                                <div className='df s-item'>LOGOUT</div>
                            </div>
                        </div>

                    </div>

                    <USERDATATABLE data={superVisorTableData} />
                </div>
            </Content>
        </Layout>


    )
}

export default SupervisorScreen;