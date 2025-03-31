let tareas = []
let ingreso = document.getElementById("ingreso")


const agregar = ( ) => {
    if (ingreso.value !== "") {
        tareas.push({
            texto: ingreso.value,
            estado: false,
            fechaTachado: null,
            fechaCreacion: new Date()
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
            let fechaC = new Date(t.fechaCreacion).toLocaleString()
            lista.innerHTML += `
            <li>
                <input type="checkbox" id="checkbox-${id}" onchange="marcar(${id})" ${estaCheck}>
                <span style="text-decoration: ${t.estado ? "line-through" : "none"}">${t.texto}</span>
                <small>Creado: ${fechaC}</small>
                <small>Tachado: ${t.fechaTachado ? t.fechaTachado : "-"}</small>
            </li>`;
        })

        
    }

const marcar = (id) => {
    tareas[id].estado = !tareas[id].estado
    let fechaT = tareas[id].estado ? new Date() : null
    tareas[id].fechaTachado = fechaT ? fechaT.toLocaleString() : null
    mostrar()
}



