const form = document.getElementById('form-agenda');
const atividades = [];
const notas = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});



function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (atividades.includes(inputTelefoneContato.value)) {
        alert(`O telefone: ${inputTelefoneContato.value} já foi cadastrado`);
    } else { 
    
    atividades.push(inputTelefoneContato.value);
    notas.push(parseFloat(inputTelefoneContato.value));
    
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value} </td>`;
    linha += `<td>${inputTelefoneContato.value} </td>`;
    linha += `</tr>`;

    linhas += linha;
    
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

    
}


function atualizaTabela() {

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }