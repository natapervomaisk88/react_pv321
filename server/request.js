// fetch("http://localhost:3000/users")
//     .then((data) => data.json())
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
const url = "http://localhost:3000/users";
fetch(url,{
    method:"POST",
    body: JSON.stringify({name:"Simon"}),
})
.then((data) =>console.log(data))
.catch((err) => console.log(err));