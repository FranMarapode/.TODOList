let tareas = []
let ingreso = document.getElementById("ingreso")


const agregar = ( ) => {
    if (ingreso.value !== "") {
        tareas.push({
            texto: ingreso.value,
            estado: false
        })
        ingreso.value = ""
        mostrar()
    } 
}

const mostrar = () => {
    let lista = document.getElementById("lista")
    lista.innerHTML = ""
    

        tareas.forEach((t, id) =>  {
            let estaCheck = t.estado ? "checked" : ""
            lista.innerHTML += `
            <li>
                <input type="checkbox" id="checkbox-${id}" onchange="marcar(${id})" ${estaCheck}>
                <span style="text-decoration: ${t.estado ? "line-through" : "none"}">${t.texto}</span>
            </li>`;
        })

        
    }

const marcar = (id) => {
    tareas[id].estado = !tareas[id].estado
    mostrar()
}



