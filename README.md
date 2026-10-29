# Resíduos - Monitoramento de pontos de descarte irregular

## Descrição
Foi proposto na aula de pbe1 pelo professor Wellington (SENAI - SP) que fosse feito um sistema fictício para gerenciar o descarte ilegal de resíduos na cidade de Amparo

## Diagrama de classes

## Tecnologias
* VS Code
* ThunderCliente
* mySQL
* JavaScript

<details>
<summary> <h2>Passo a passo para testar</h2> </summary>

1 - Clone esse repositório <br>
2- Aperte crtl + ' <br>
3 - Certifique-se de que esteja escrito "node" ou "cmd" no canto superior direito <br>
4 - Escreva "npm init -y" <br>
5 - Após escrever o comando acima, escreva "npm run dev" <br>
6 - Vá ao ThunderCliente, e se não tiver, clique na lupa no lado superior esquerdo, pesquise "ThunderClient", instale e depois clique no raio dentro de um circulo <br>
7 - Clique em "New Request" <br>
8 - Troque o link ao lado de GET por "http://localhost:3000/usuarios" <br>
9 - Clique no GET e troque-o por POST <br>
10 - Copie e cole, editando as informações: `` { "nome": "macaco", "email": "makakin@email.com", "senha": "123" } `` <br>
11 - Clique em SEND, e seu Thunder Client deverá ficar assim:
<img src="docs/prints/exemplo/post_thunder-client.png">
</details>

<details> <summary><h2>Prints dos testes</h2></summary> 
<h1>Listar Usuários</h1>
<img src="docs/prints/usuarios.png">
<h1>Listar Ocorrências</h1>
<img src="docs/prints/ocorrencias.png">
<h1>Resumo Ocorrências</h1>
<img src="docs/prints/ocorrenciasresumo.png">
<h1>Alterar Usuários</h1>
<img src="docs/prints/alterar/usuariosalterar.png">
<img src="docs/prints/alterar/alterarusuario.png">
<h1>Alterar Ocorrências</h1>
<img src="docs/prints/alterar/ocorrenciaalterar.png">
<img src="docs/prints/alterar/alterarocorrencia.png">
<h1>Excluir Usuários</h1>
<img src="docs/prints/excluir/usuariosexcluir.png">
<h2>Se não apagar o evento correspondente ao usuário antes de tentar deletá-lo, irá dar o seguinte erro:</h2>
<img src="docs/prints/excluir/excluirusuarioerro.png">
<h1>Excluir Ocorrências</h1>
<img src="docs/prints/excluir/ocorrenciaexcluir.png">
<img src="docs/prints/excluir/excluirocorrencias.png">

</details>