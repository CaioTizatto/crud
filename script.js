const table = document.getElementById('table')
const gtin = document.getElementById('GTIN')
const descricao = document.getElementById('descricao')
const categoria = document.getElementsByName('categoria')[0]
const precoPromo = document.getElementById('precoPromocional')
const precoRegular = document.getElementById('precoRegular')
const inicioPromo = document.getElementById('inicioPromocao')
const fimPromo = document.getElementById('fimPromocao')

function validacaoDeDados(Gtin, Descricao, Categoria, PrecoPromo, PrecoRegular, InicioPromo, FimPromo ) {
   const erro = []
   
   if (Gtin.length != 14 ){
      erro.push(' o GTIN deve ter 14 caracteres')
   }if ( Descricao == 0 ) {
      erro.push(' o campo "descrição completa" deve ser preenchido')  
   }if (categoria[0].selected){
      erro.push(' selecione uma categoria')
   }if (PrecoPromo <= 0) {
      erro.push(' selecione um preço promocional valido')
   }if (PrecoRegular <= 0) {
      erro.push(' selecione um preço regular válido')
   }if (InicioPromo == 0) {
      erro.push ('data inválida para inicio da promoçao')
   }if (FimPromo == 0) {
      erro.push('data inválida para fim da promoção')
      
   }
   if (erro.length > 0) {
      window.alert(erro)
   }else {mostrarRegistro()}
   function mostrarRegistro() { 
      table.innerHTML+=` <tr>
      <td>${Gtin}</td>
      <td>${Descricao}</td>
      <td>${Categoria}</td>
      <td>${PrecoPromo}</td>
      <td>${PrecoRegular}</td>
      <td>${InicioPromo}</td>
      <td>${FimPromo}</td>
      <td><img src="icon/editar.png" alt="ícone de editar"> <img src="icon/excluir.png" alt="icone de editar"></td>`
   }
}
   
function novoRegistro() {
   
   let valorGtin = gtin.value
   let valorDescricao =  descricao.value
   let valorCategoria = ""
   let valorPrecoPromo = precoPromo.value
   let valorPrecoRegular = precoRegular.value
   let valorInicioPromo = inicioPromo.value
   let valorFimPromo = fimPromo.value
   
   if (categoria[0].selected) {
      valorCategoria = "erro"
      
   } else if (categoria[1].selected) {
      valorCategoria = "eletrônicos"
      
   } else if (categoria[2].selected) {
      valorCategoria = "bebidas"
   } else{
      valorCategoria = "cervejas"
   }
      validacaoDeDados(valorGtin, valorDescricao, valorCategoria, valorPrecoPromo, valorPrecoRegular, valorInicioPromo, valorFimPromo)
      function mostrarRegistro() { 
         table.innerHTML+=` <tr>
            <td>${valorGtin}</td>
            <td>${valorDescricao}</td>
            <td>${valorCategoria}</td>
            <td>${valorPrecoPromo}</td>
            <td>${valorPrecoRegular}</td>
            <td>${valorInicioPromo}</td>
            <td>${valorFimPromo}</td>
            <td><img src="icon/editar.png" alt="ícone de editar"> <img src="icon/excluir.png" alt="icone de editar"></td>`
         }
}
