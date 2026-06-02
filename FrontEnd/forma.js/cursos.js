
let cursos = [];

async function carregarCursos() {
    try {
        const resposta =
            await fetch("../../BackEnd/src/cursos.json");

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
    const lista = document.getElementById("lista" + categoria);
    lista.innerHTML = "";

    // 1. ALTERADO: de 'categoria_curso' para 'materia'
    const filtrados = cursos.filter(curso => curso.materia === categoria);

    filtrados.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("curso-card");

        card.innerHTML = `
            <img src="img/imagem 1.jpg" class="curso-img">
            <div class="curso-body">
                <span class="nivel">${curso.nivel || "Iniciante"}</span>
                <h3>${curso.nome_curso}</h3>
                
                <p>Professor: ${curso.professor}</p> 

                <div class="curso-info">
                    <span>⭐ 4.8</span>
                    
                    <span>⏱ ${curso.tempo_curso}</span> 
                </div>
            </div>
        `;

        card.onclick = function (event) {
            document.getElementById("tituloCurso").textContent = curso.nome_curso;
            
            // Ajuste aqui também para exibir o professor nos detalhes
            document.getElementById("descricaoCurso").textContent = "Professor: " + curso.professor;

            abrirModal("modalDetalhes", "", event);
        };

        lista.appendChild(card);
    });
}