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

        const card =
            document.createElement("div");

        card.classList.add("curso-card");

        card.innerHTML = `
    <img
        src="img/design.jpg"
        class="curso-img">

    <div class="curso-body">

        <span class="nivel">
            ${curso.nivel || "Iniciante"}
        </span>

        <h3>
            ${curso.nome_curso}
        </h3>

        <p>
            ${curso.descricao || ""}
        </p>

        <div class="curso-info">

            <span>⭐ 4.8</span>

            <span>
                ⏱ ${curso.carga_horaria || "20h"}
            </span>

        </div>

    </div>
`;

       card.onclick = function () {

    document
        .getElementById("tituloCurso")
        .textContent =
        curso.nome_curso;

    document
        .getElementById("descricaoCurso")
        .textContent =
        curso.descricao || "";

    abrirModal(
        "modalDetalhes",
        "",
        event
    );
};

lista.appendChild(card);

    });
}