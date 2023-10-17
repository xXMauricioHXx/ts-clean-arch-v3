# Score

O sistema deverá ser capaz de:

- Inscrever um aluno em uma turma.
- Remover o aluno da turma.
- Criar turmas de conteúdos específicos.
- Criar conteudos do tipo texto.
- Gerenciar as notas do aluno em cada turma de cada curso e sua frequência em aulas.

## Regras de negócio

- O aluno não pode estar matriculado em mais de 1 curso no mesmo horario e dia;
- Todas as turmas cadastradas deverão ter no máximo 50 alunos;
- O Aluno pode ter no máximo 5 cursos em andamento;
- Ao final do curso o aluno deverá receber um e-mail com sua nota e seu certificado;
- Ao ser inscrito em um curso o aluno deverá receber um e-mail informando o horário de inicio das aulas;

## Aluno

O aluno deve conter as seguintes informações:

- E-mail: Prescisa ser um e-mail valido;
- CPF;
- Nome completo;

## Conteúdo

O conteudo deve conter as seguintes informações:

- Título;
- Descrição;

## Turma

A turma deve conter as seguintes informações:

- O conteudo sobre o qual as aulas serão feitas;
- A data de início;
- A data de fim;

## Matricula

A matricula deve conter as seguintes informações:

- A turma;
- O Aluno que irá participar da turma;
- Status do curso;

## Ficha do aluno

A Ficha do aluno deve conter as seguintes informações:

- O aluno;
- O conteúdo;
- A nota que o aluno tirou no curso;
