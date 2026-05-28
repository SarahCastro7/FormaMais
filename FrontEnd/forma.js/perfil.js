const cardVaga = document.getElementById('cardVaga');
const btnPassar = document.getElementById('btnPassar');
const btnInteressado = document.getElementById('btnInteressado');

const textoEmpresas = document.getElementById('texto-empresas');
const containerLogos = document.getElementById('container-logos');
const logoPrincipal = document.getElementById('logoPrincipal');

const bMatch = document.getElementById('beneficio-match');
const bEvolucao = document.getElementById('beneficio-evolucao');
const bConexao = document.getElementById('beneficio-conexao');

const listaVagas = [
    {
        titulo: "Analista de Marketing Digital",
        empresa: "Marketing Pro",
        match: "92% Match",
        local: "Remoto",
        salario: "R$ 3.000 - R$ 4.500",
        skills: ["SEO", "Google Ads", "Redes Sociais"],
        corLogo: "#ff5722",
        iconeLogo: "fa-border-all",
        totalInteressadas: "7 empresas interessadas",
        miniLogos: ["📈", "🚀", "🏢", "🍇", "🛍️", "+12"],
        beneficioAlvo: bMatch
    },
    {
        titulo: "Desenvolvedor Front-End",
        empresa: "Tech Solutions",
        match: "95% Match",
        local: "Remoto",
        salario: "R$ 4.000 - R$ 5.500",
        skills: ["HTML & CSS", "JavaScript", "React"],
        corLogo: "#108ee9",
        iconeLogo: "fa-code",
        totalInteressadas: "14 empresas interessadas",
        miniLogos: ["💻", "⚛️", "🛠️", "🚀", "🌐", "+25"],
        beneficioAlvo: bEvolucao
    },
    {
        titulo: "Designer UI/UX Júnior",
        empresa: "Studio Digital",
        match: "88% Match",
        local: "Híbrido (SP)",
        salario: "R$ 3.500 - R$ 4.800",
        skills: ["Figma", "Wireframes", "UI Design"],
        corLogo: "#e25cdd",
        iconeLogo: "fa-bezier-curve",
        totalInteressadas: "9 empresas interessadas",
        miniLogos: ["🎨", "📐", "📱", "🔮", "✏️", "+4"],
        beneficioAlvo: bConexao
    },
    {
        titulo: "Product Manager",
        empresa: "Fintech Brasil",
        match: "85% Match",
        local: "Remoto",
        salario: "R$ 7.000 - R$ 9.000",
        skills: ["Scrum", "Metas OKR", "Análise de Dados"],
        corLogo: "#2e7d32",
        iconeLogo: "fa-chart-pie",
        totalInteressadas: "19 empresas interessadas",
        miniLogos: ["📊", "💳", "🏦", "📈", "💎", "+31"],
        beneficioAlvo: bMatch
    }
];

let indiceAtual = 1;

listaVagas[0].beneficioAlvo.classList.add('destaque');

function transicaoVaga(animacao) {
    cardVaga.classList.add(animacao);

    setTimeout(() => {
        const novaVaga = listaVagas[indiceAtual];

        cardVaga.querySelector('.titulo-vaga').innerText = novaVaga.titulo;
        cardVaga.querySelector('.nome-empresa').innerHTML = `<i class="fa-solid fa-building-columns"></i> ${novaVaga.empresa}`;
        cardVaga.querySelector('.tag-match').innerText = novaVaga.match;
        
        logoPrincipal.style.backgroundColor = novaVaga.corLogo;
        logoPrincipal.innerHTML = `<i class="fa-solid ${novaVaga.iconeLogo}"></i>`;
        
        const painelDetalhes = cardVaga.querySelector('.detalhes-vaga');
        painelDetalhes.innerHTML = `
            <p><i class="fa-solid fa-location-dot"></i> ${novaVaga.local}</p>
            <p class="salario"><i class="fa-solid fa-dollar-sign"></i> ${novaVaga.salario}</p>
        `;

        const blocoSkills = cardVaga.querySelector('.lista-skills');
        blocoSkills.innerHTML = '';
        novaVaga.skills.forEach(skill => {
            const badge = document.createElement('span');
            badge.className = 'tag-skill';
            badge.innerText = skill;
            blocoSkills.appendChild(badge);
        });

        textoEmpresas.innerText = novaVaga.totalInteressadas;
        
        containerLogos.innerHTML = '';
        novaVaga.miniLogos.forEach((logo, idx) => {
            const span = document.createElement('span');
            if (idx === novaVaga.miniLogos.length - 1) {
                span.className = 'contador-mais';
                span.innerText = logo;
            } else {
                span.className = 'mini-logo';
                span.innerText = logo;
            }
            containerLogos.appendChild(span);
        });

        [bMatch, bEvolucao, bConexao].forEach(b => b.classList.remove('destaque'));
        novaVaga.beneficioAlvo.classList.add('destaque');

        indiceAtual = (indiceAtual + 1) % listaVagas.length;
        
        cardVaga.classList.remove(animacao);
    }, 400);
}

btnPassar.addEventListener('click', () => transicaoVaga('swipe-esquerda'));
btnInteressado.addEventListener('click', () => transicaoVaga('swipe-direita'));



const btnLogin = document.getElementById('btnLogin');
const btnCta = document.getElementById('btnCta');
const menuAvatar = document.getElementById('menuAvatar');

const profileModal = document.getElementById('profileModal');
const viewCard = document.getElementById('viewCard');
const editCard = document.getElementById('editCard');

const inName = document.getElementById('in-name');
const inRole = document.getElementById('in-role');
const inLocation = document.getElementById('in-location');
const inEmail = document.getElementById('in-email');
const inPass = document.getElementById('in-pass');
const fileInput = document.getElementById('fileInput');

const txtName = document.getElementById('txt-name');
const txtLocation = document.getElementById('txt-location');
const txtEmail = document.getElementById('txt-email');
const txtSubtitle = document.querySelector('#viewCard .subtitle');
const userImages = document.querySelectorAll('.user-img');

document.getElementById('goEdit').addEventListener('click', () => {
    viewCard.classList.add('hidden');
    editCard.classList.remove('hidden');
});

document.getElementById('cancelBtn').addEventListener('click', () => {
    editCard.classList.add('hidden');
    viewCard.classList.remove('hidden');
});

document.getElementById('closeView').addEventListener('click', () => profileModal.style.display = 'none');
document.getElementById('closeEdit').addEventListener('click', () => profileModal.style.display = 'none');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => userImages.forEach(img => img.src = e.target.result);
        reader.readAsDataURL(file);
    }
});

document.getElementById('editForm').addEventListener('submit', () => {
    // Atualiza dados na visualização
    txtName.textContent = inName.value;
    txtSubtitle.textContent = inRole.value;
    txtLocation.textContent = inLocation.value;
    txtEmail.textContent = inEmail.value;
    inPass.value = ''; 

    // Altera itens do Menu (Esconde botões e exibe o avatar)
    btnLogin.classList.add('hidden');
    btnCta.classList.add('hidden');
    menuAvatar.classList.remove('hidden');

    // Retorna para o card de visualização
    editCard.classList.add('hidden');
    viewCard.classList.remove('hidden');
});

// Clicar no avatar do menu reabre o modal de visualização
menuAvatar.addEventListener('click', () => {
    profileModal.style.display = 'flex';
    viewCard.classList.remove('hidden');
    editCard.classList.add('hidden');
});