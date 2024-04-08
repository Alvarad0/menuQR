document.addEventListener("DOMContentLoaded", function() {
    fetch("src/data.json")
    .then(response => response.json())
    .then(data => {
        let menu = $(".menu")
        let section = ""

        data.categorias.forEach(element => {
            section += `<section>
                <p class="title">${element.nombre}</p>
                <div class="list">`

            element.items.forEach(item => {
                let subgrupo = ""
                if (typeof item.subgrupo !== "undefined") {
                    item.subgrupo.forEach(descri => subgrupo += `<p class="subgrupo">${descri.descri}</p>`)
                }

                section += `<div class="item-master">
                    <div class="item">
                        <span>${item.nombre}</span>
                        <span>${item.precio}</span>
                    </div>
                    ${subgrupo}
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