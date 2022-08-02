const table = document.getElementById('table')
const gtin = document.getElementById('GTIN')
const descricao = document.getElementById('descricao')
const categoria = document.getElementsByName('categoria')
const precoPromo = document.getElementById('precoPromocional')
const precoRegular = document.getElementById('precoRegular')
const inicioPromo = document.getElementById('inicioPromocao')
const fimPromo = document.getElementById('fimPromocao')

function novoRegistro() {
    let valorGtin = gtin.value
    let valorDescricao =  descricao.value
    //to_do:define "categoria"
    let valorPrecoPromo = precoPromo.value
    let valorPrecoRegular = precoRegular.value
    let valorInicioPromo = inicioPromo.value
    let valorFimPromo = fimPromo.value

    table.innerHTML+=` <tr>
   <td>${valorGtin}</td>
    <td>${valorDescricao}</td>
    <td>categoria</td>
    <td>${valorPrecoPromo}</td>
    <td>${valorPrecoRegular}</td>
    <td>${valorInicioPromo}</td>
    <td>${valorFimPromo}</td>
    <td><img src="icon/editar.png" alt="ícone de editar"> <img src="icon/excluir.png" alt="icone de editar"></td>
`
}