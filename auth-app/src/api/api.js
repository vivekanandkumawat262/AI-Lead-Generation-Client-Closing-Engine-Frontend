const BASE_URL = "http://127.0.0.1:8000";



export async function apiFetch(endpoint, options ={}) {
    const token = localStorage.getItem("token");

    const res = await fetch("",{
                      headers:{
                        "Content-Type": "application/json",
                        Authorization: token ? `Bearer ${token}`: "",
                        ...options.headers,
                      },
                },
    );

    if (res.status === 401){
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    
    return res.json();
}




