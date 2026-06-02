# Forma+

> Formação técnica prática para o mercado real.

## 📌 Sobre o Projeto

O **forma+** é uma plataforma educacional focada em formação técnica, metodologias ágeis e desenvolvimento profissional, criada para substituir o modelo tradicional baseado em memorização por uma experiência prática, dinâmica e orientada aos desafios reais do mercado.

A plataforma conecta aprendizado, experiência profissional simulada e empregabilidade, preparando estudantes para a realidade operacional e cultural das empresas modernas.

---
## 👥 Integrantes do Grupo

- Bianca Oliveira  - Função/Cargo, : Desenvolvedor Frontend
- Luiza Souza  - Função/Cargo, : Desenvolvedor Frontend , Backend
- Sarah Castro - Função/Cargo, : Desenvolvedor Backend
- Valeria Vasquez - Função/Cargo, : Desenvolvedor Frontend, Backend 
- Thayla Pureza - Função/Cargo, : UX/UI Designer

---

## 🚀 O Problema

O cenário atual enfrenta dois grandes desafios:

- a inflação de diplomas sem preparo prático
- o apagão técnico de mão de obra qualificada

Enquanto milhares de jovens concluem cursos e graduações sem experiência real de mercado, empresas enfrentam dificuldades para encontrar profissionais preparados para ambientes digitais, metodologias ágeis e rotinas operacionais modernas.

O resultado é um desalinhamento entre formação e contratação.

---

## 💡 A Solução

O forma+ resolve esse problema através de uma experiência educacional prática e orientada ao mercado.

Ao invés de focar apenas em teoria e memorização, a plataforma oferece:

- formação técnica aplicada
- desafios reais
- metodologias ágeis
- projetos práticos
- cultura de trabalho colaborativa
- conexão com oportunidades profissionais

O estudante não apenas aprende uma profissão:
ele vivencia um verdadeiro **“estágio de realidade”**.

---


## 💰 Modelo de Monetização

O Forma+ opera sob um modelo comercial focado na democratização do ensino técnico e especialização direcionada:

### 1. Cursos Básicos (Acessíveis)
- **Introdução e Fundamentos:** Conteúdos e trilhas iniciais gratuitos ou de baixo custo para garantir ampla acessibilidade.
- **Porta de Entrada:** Permite que qualquer estudante comece a desenvolver suas primeiras habilidades sem barreiras financeiras.

### 2. Cursos Específicos (Pagos)
- **Especializações Avançadas:** Módulos aprofundados e focados em demandas técnicas estritas do mercado.
- **Diferencial Comercial:** Acesso a mentorias, desafios práticos com empresas reais e recursos avançados do sistema *More Match*.

---

## 🎯 Para Quem é

### 👨‍🎓 Estudantes
Jovens que desejam:
- ingressar rapidamente no mercado de trabalho
- desenvolver habilidades práticas
- construir experiência real
- se preparar para profissões modernas

### 🏢 Empresas
Organizações que:
- enfrentam dificuldades para contratar talentos preparados
- buscam profissionais alinhados à cultura digital
- precisam reduzir tempo de treinamento operacional

---

## ⚡ Diferenciais

- aprendizado baseado em prática
- experiência próxima da rotina real das empresas
- formação técnica + comportamental
- metodologias ágeis aplicadas
- projetos orientados ao mercado
- foco em empregabilidade
- conexão entre educação e contratação

---

## 🧠 More Match

O **More Match** é o principal diferencial da plataforma.

Através das habilidades desenvolvidas, desempenho do aluno e competências adquiridas durante os cursos, o sistema conecta estudantes a oportunidades compatíveis com seu perfil profissional.

Transformando aprendizado em oportunidades reais.

---

## 🛠️ Tecnologias

- React
- Node.js
- Express
- PostgreSQL

---
## 💻 Como Rodar o Projeto Localmente

Siga rigorosamente a ordem dos passos abaixo para executar a aplicação em sua máquina.

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (Versão 18 ou superior)
- [PostgreSQL](https://postgresql.org) (Em execução)

### Passo a Passo

#### 1. Clonar o Repositório
Abra o terminal e baixe os arquivos do projeto:
```bash
git clone https://github.com
cd Forma-Plus
```

#### 2. Instalar as Dependências
Instale globalmente e baixe os pacotes principais do ecossistema do projeto (servidor HTTP, variáveis de ambiente e driver do banco de dados):
```bash
npm install express dotenv pg
```

#### 3. Verificar o Localhost do Servidor
Acesse a pasta do backend para analisar o arquivo de configuração e conferir qual porta local o ambiente vai utilizar:
```bash
cd server
```
*Abra as configurações do servidor e verifique qual `PORT` está definida para o seu endereço local.*

#### 4. Configurar o `package.json`
Para permitir o uso de importações modernas do ES6 (`import` / `export`), abra o seu arquivo `package.json` no editor e certifique-se de adicionar a propriedade `"type": "module"` nas configurações principais:

```json
{
  "name": "forma-plus-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  }
}
```

#### 5. Executar o Comando de Inicialização
Após realizar as configurações no arquivo, inicie o servidor executando o seguinte comando no terminal:
```bash
npm run dev
```
O servidor backend estará ativo e respondendo em: `http://localhost:${PORT}`

---

## 📈 Visão Futura

O objetivo do Forma+ é se tornar um ecossistema completo de formação profissional moderna, unindo:

- educação prática
- experiência profissional
- inteligência de carreira
- conexão com empresas
- desenvolvimento técnico e humano

---

## 📄 Licença

MIT
