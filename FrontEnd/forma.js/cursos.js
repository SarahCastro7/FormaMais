let cursos = [];

async function carregarCursos() {
    try {
        const resposta =
            await fetch("http://localhost:3000/cursos");

        cursos = await resposta.json();

        console.log(cursos);

    } catch (erro) {
        console.error(erro);
    }
}

carregarCursos();


function abrirModal(idModal, categoria, event) {

    event.stopPropagation();

    const modal =
        document.getElementById(idModal);

    modal.style.display = "flex";

    mostrarCursos(categoria);
}


function fecharModal(idModal) {

    document.getElementById(idModal)
        .style.display = "none";
}


function mostrarCursos(categoria) {

    const lista =
        document.getElementById(
            "lista" + categoria
        );

    lista.innerHTML = "";

    const filtrados =
        cursos.filter(curso =>
            curso.categoria_curso === categoria
        );

    filtrados.forEach(curso => {

        const item =
            document.createElement("li");

        item.textContent =
            curso.nome_curso;

        lista.appendChild(item);

    });
}