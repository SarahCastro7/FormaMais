//---------- tabela da lista dos cursos -----------

CREATE TABLE IF NOT EXISTS public.lista_curso
(
    id_curso uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_curso text COLLATE pg_catalog."default" NOT NULL,
    categoria_curso text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT lista_curso_pkey PRIMARY KEY (id_curso)
)

//-------------- tabela do cadastro ------------

CREATE TABLE IF NOT EXISTS public.usuarios_cadastro
(
    id_usuario uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_usuario text COLLATE pg_catalog."default" NOT NULL,
    email_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    telefone_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    senha_usuario numeric NOT NULL,
    CONSTRAINT usuarios_cadastro_pkey PRIMARY KEY (id_usuario)
)

//----------------- tabela do login ---------------

CREATE TABLE IF NOT EXISTS public.usuarios_login
(
    email_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    senha_usuario numeric NOT NULL,
    CONSTRAINT usuarios_login_pkey PRIMARY KEY (email_usuario)
)
