import React from "react";

const USERDATATABLE = () => {

    const columns = [{ name: "AGENT NAME" }, { name: "SUPERVISOR NAME" }, { name: "AGENT ID" }, { name: "AGENT STATE DURATION" },
    { name: "AGENT STATE" }];

    const data = [
        { agent_name: "Zara Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 0 },// Active
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "MAAZ Khan", supervisor_name: "khalil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 3 }, // Logout
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "MAAZ Khan", supervisor_name: "khalil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 3 }, // Logout
        { agent_name: "Meraj Khan", supervisor_name: "Faraz Sharif", agent_id: "10004", agent_state_duration: "00:30", agent_state: 1 }, //Ready
        { agent_name: "Ali Khan", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        { agent_name: "mmm", supervisor_name: "Kahlil", agent_id: "10004", agent_state_duration: "00:30", agent_state: 2 }, // Not Ready
        
    ];


    return (
        <div className="u-s-table-container">
            <div className="table-container">

                <div className="table-header-row">
                    {columns.map((item, ind) => (<div className="item" key={ind}>{item.name}</div>))}
                </div>


                {data.map((item, ind) => (
                    <div key={ind} className="table-row">
                        <div className="item">{item.agent_name}</div>
                        <div className="item">{item.supervisor_name}</div>
                        <div className="item">{item.agent_id}</div>
                        <div className="item">{item.agent_state_duration}</div>
                        <div className="item">
                            <div className="agent-status-box"
                                style={{
                                    backgroundColor: item.agent_state === 0 ? "#38ab8e" :
                                        item.agent_state === 1 ? "#2979ff" : item.agent_state === 2 ? "#ffa82f" :
                                            item.agent_state === 3 ? "#ff1f1f" : ""
                                }}>
                                {item.agent_state === 0 ? "Active" :
                                        item.agent_state === 1 ? "Ready" : item.agent_state === 2 ? "Not Ready" :
                                            item.agent_state === 3 ? "Logout" : ""
                                            }
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default USERDATATABLE;
