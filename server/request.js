const url = "http://localhost:3000/users";

// fetch(url)
//     .then(data => data.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

    fetch(url, {
        method: "POST",
        body:JSON.stringify({ name: "Victor"}),
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));