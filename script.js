function data() {
    fetch("https://api.icndb.com/jokes/").then(response => {
        if (!response.ok) {
            throw Error("error")
        }
        return response.json()
    }).then(data => {
        const content = data.value.map(d => {
            return `<div class="edit"><p>ID : ${d.id} <br> Smile Text : ${d.joke}</p></div>`
        }).join("")
        document.querySelector("#api")
            .insertAdjacentHTML('afterbegin', content)
    }).catch(error => {
        console.log(error)
    })
}
data()