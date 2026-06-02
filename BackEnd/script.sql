//----- tab de usuario
CREATE TABLE IF NOT EXISTS public.tab_cursos
(
    id_curso uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_curso text NOT NULL,
    tempo_curso character varying NOT NULL,
    profe_curso text NOT NULL,
    materia_curso text NOT NULL,
    PRIMARY KEY (id_curso)
);

//------ tab  de cursos
CREATE TABLE IF NOT EXISTS public.tab_usuarios
(
    id_usuario uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_usuario text COLLATE pg_catalog."default" NOT NULL,
    email_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    senha_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    telefone_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tab_cadastro_pkey PRIMARY KEY (id_usuario)
);


//--- tabela de cadastro
-- id - PK
-- email 
-- senha
-- confirmar senha
-- nome 
-- telefone

-- //---------tabela de login 

-- id - PK
-- nome
-- email
-- recuperar senha (por id)
-- localização
-- descrição bio

-- FK -  tabela de cadastro: conectar senha para recuperação

-- //---------tabela de usuario (perfil)
-- id - PK id usuario
-- email
-- nome - tab de usuario
-- atualizar senha 
-- localização
-- descrição bio

-- FK - tabela de cursos

-- //------tabela de curso
-- id - PK
-- nome do curso
-- tempo do curso 
-- profe do curso 
-- materia 

-- FK - tabela de usuario: para sabermos qual curso o usuario acessa


-- // p apagar tab

-- DELETE FROM public.tab_cadastro
-- 	WHERE id_cadastro = 'e96dd98e-b266-4f5b-b372-4d472275dd41'