import React from 'react'

function CallStatusTable() {

    let data = [
        { name: "Landed", kcc: "250", lcc: "362", total: "6512" },
        { name: "Answered", kcc: "621", lcc: "691", total: "6512" },
        { name: "Answer Per Agent", kcc: "250", lcc: "362", total: "6512" },
        { name: "A.H.T", kcc: "250", lcc: "362", total: "6512" }]

    return (
        <div style={{ display: "flex", margin: "5px 30px 3px 30px", flexDirection: "column" }}>
            <div className="" style={{ display: "flex", width: "inherit", justifyContent: "space-between" }}>
                <div style={{ width: "350px", flex: 1 }}></div>
                <div style={{
                    width: "350px", backgroundColor: "#5a4183", margin: "5px 3px", textAlign: "center", color: "#fff",
                    fontWeight: "bold", padding: "3px 0px"
                }}>KCC</div>
                <div style={{
                    width: "350px", backgroundColor: "#01a283", margin: "5px 3px", textAlign: "center", color: "#fff",
                    fontWeight: "bold", padding: "3px 0px"
                }}>LCC</div>
                <div style={{
                    width: "350px", backgroundColor: "#384757", margin: "5px 3px", textAlign: "center", color: "#fff",
                    fontWeight: "bold", padding: "3px 0px"
                }}>TOTAL</div>
            </div>

            {data.map(item => (
                <div className="col-data-row" style={{ display: "flex", width: "inherit", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "350px", flex: 1, fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ width: "350px", margin: "5px 3px", textAlign: "center", fontWeight: 500 }}>{item.kcc}</div>
                    <div style={{ width: "350px", margin: "5px 3px", textAlign: "center", fontWeight: 500 }}>{item.lcc}</div>
                    <div style={{ width: "350px", margin: "5px 3px", textAlign: "center", fontWeight: 500 }}>{item.total}</div>
                </div>
            ))}
        </div>
    )
}

export default CallStatusTable
