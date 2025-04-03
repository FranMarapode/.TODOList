let tareas = []
let ingreso = document.getElementById("ingreso")


const agregar = ( ) => {
    let time = Date.now()
    if (ingreso.value !== "") {
        tareas.push({
            texto: ingreso.value,
            estado: false,
            fechaTachado: null,
            fechaCreacion: new Date(time)
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
                <button id="eliminar" onclick="eliminar(${id})">Eliminar</button>
            </li>`;
           
            
        })

        
    }

const marcar = (id) => {
    let time = Date.now()
    tareas[id].estado = !tareas[id].estado
    let fechaT = tareas[id].estado ? new Date(time) : null
    tareas[id].fechaTachado = fechaT ? fechaT.toLocaleString() : null
    mostrar()
}

const eliminar = (id) => {
    let confirmar = confirm("¿Está seguro de eliminar la tarea?")
    if (confirmar) {
        tareas.splice(id, 1)
        mostrar()
    }
}

const CalculoMasRapido = () => {
    let tareaMasRapido;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].fechaTachado != null) {
            let rapidez = (tareas[i].fechaTachado - tareas[i].fechaCreacion);
            let masRapido = ""
            if ( masRapido == "" || rapidez < masRapido) {
                masRapido = rapidez;
                tareaMasRapido = tareas[i]
            }
        }
        
    }
    mostrar()
    alert(tareaMasRapido.texto)
   
}



