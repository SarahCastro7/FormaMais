--tabela de cursos
CREATE TABLE IF NOT EXISTS public.tab_cursos
(
    id_curso uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_curso text COLLATE pg_catalog."default" NOT NULL,
    tempo_curso character varying COLLATE pg_catalog."default" NOT NULL,
    profe_curso text COLLATE pg_catalog."default" NOT NULL,
    materia_curso text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tab_cursos_pkey PRIMARY KEY (id_curso)
);

--tabela de usuarios

CREATE TABLE IF NOT EXISTS public.tab_usuario
(
    id_usuario uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_usuario text COLLATE pg_catalog."default" NOT NULL,
    email_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    senha_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    telefone_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tab_cadastro_pkey PRIMARY KEY (id_usuario)
);
