import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";

function Leads(){
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        apiFetch("/leads").then(setLeads)
    }, []);

    return (
        <div>
            <h2>Leads</h2>
            <ul>
                 {leads.map((lead)=> (
                    <li key={lead.id}>{ lead.name}-{lead.status}</li>
                 ))}
            </ul>
        </div>
    )
}

export default Leads;