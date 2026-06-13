 import { useState, useEffect } from "react";
function Admin() {
    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchLeads = async () => {
        try {
            const response = await fetch("http://localhost:3000/getleads");
            
            const data = await response.json();
            console.log("admin--"+JSON.stringify(data))  ;
            if (data.success) {
                setLeads(data.zohoResponse.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching leads:", error);
        }
    };
    fetchLeads();
    }, []);
    
    const filteredLeads = leads.filter(
  (lead) =>
    lead.Last_Name?.toLowerCase().includes(search.toLowerCase()) ||
    lead.Email?.toLowerCase().includes(search.toLowerCase())
);
    const tablestyle = {
        borderCollapse: "collapse",
        width: "100%",
    };
    const thstyle = {
        border: "1px solid #ddd",
        padding: "8px",
    };
    const bodyStyle = {
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "center",
    };
    return (
        <div style={{ padding: "20px"}}>
            <h1>Admin Dashboard</h1>
            <input style={{ marginBottom: "12px", padding: "8px", width: "400px", boxSizing: "border-box" }}
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table style={tablestyle}>
                <thead>
                    <tr>
                        <th style={thstyle}>Name</th>
                        <th style={thstyle}>Email</th>
                        <th style={thstyle}>Phone</th>
                        <th style={thstyle}>Experience</th>
                        <th style={thstyle}>Skills</th>
                        <th style={thstyle}>Created Time</th>
                    </tr>
                </thead>
                {filteredLeads.length===0?(
                <tbody style={bodyStyle}> 
                    <tr colSpan="6"><td colSpan="6">No leads found</td></tr>
                </tbody>
                ):(
                <tbody style={bodyStyle}> 
                    {filteredLeads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.Last_Name}</td>
                            <td>{lead.Email}</td>
                            <td>{lead.Phone}</td>
                            <td>{lead.No_of_Employees?lead.No_of_Employees:"N/A"}</td>
                            <td>{lead.Twitter?lead.Twitter:"N/A"}</td>
                            <td>{lead.Created_Time?new Date(lead.Created_Time).toLocaleString():"N/A"}</td>
                        </tr>
                    ))}
                </tbody>
                )
            }
            </table>
            
        </div>
    );
}
export default Admin;