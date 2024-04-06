document.addEventListener("DOMContentLoaded", function() {
    fetch("src/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let menu = $(".menu")
        let section = ""

        data.categorias.forEach(element => {
            section += `<section>
                <p class="title">${element.nombre}</p>
                <div class="list">`

            element.items.forEach(item => {
                section += `
                <div class="item">
                    <span>${item.nombre}</span>
                    <span>${item.precio}</span>
                </div>`
            })
            section += `</div>
            </section>`
        })
        menu.append(section)
    })
    .catch(error => {
        console.error("Error al cargar el archivo JSON");
    })
})