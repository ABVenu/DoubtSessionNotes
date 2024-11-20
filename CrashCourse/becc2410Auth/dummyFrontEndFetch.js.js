localStorage.setItem("token", res.token)
let token = JOSN.parse(localStorage.getItem("token"))
fetch("http://127.0.0.1:8080/todos/", {
    method:"POST",
    headers:{
        "content-type":"Application/json",
        "authorization":`bearer ${token}`
    }, 
    body:{title:"Learn auth"}
})