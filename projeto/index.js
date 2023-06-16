fetch("https://api.github.com/users/CaioFSLima")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((erro) => console.log("Error", erro))