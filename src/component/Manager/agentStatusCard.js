import React from 'react';

const AgentStatusCard = ({ color, borderColor, boxShadow }) => {
    return (
        <div className="status-row"
            style={{
                borderBottom: `11px solid ${borderColor}`,
                boxShadow: `0px -3px 11px 0px inset ${boxShadow}`,
                backgroundColor: `${color}`
            }}>
            <div className='row-total-agent-con'>
                <div className='count'>512</div>
                <div className='detail'>AGENTS IN KARACHI</div>
            </div>

            <div className='row-status-agent-con'>

                <div className="box-tag">
                    <div className="tab-no" style={{ color: color }}>
                        <div className="counter">21</div>
                    </div>
                    <div className="tab-title">IDLE</div>
                </div>

                <div className="box-tag">
                    <div className="tab-no" style={{ color: color }}>
                        <div
                            className="counter">21</div>
                    </div>
                    <div className="tab-title" >BUSY</div>
                </div>

                <div className="box-tag">
                    <div className="tab-no" style={{ color: color }}>
                        <div className="counter">21</div>
                    </div>
                    <div className="tab-title" >NOT READY</div>
                </div>
            </div>
        </div>
    )
}

export default AgentStatusCard;