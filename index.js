const inputBox = document.querySelector('#input-caixa'); 
const listContainer = document.querySelector('#lista-container')

const btnAdc = document.querySelector('.btn-adc');

function apagaInput(){
    inputBox.value = '';
    inputBox.focus();
}


inputBox.addEventListener('keydown', function(tecla){
    if (tecla.key === 'Enter'){
        adcItem();
    }
})

function adcItem(){
    if (!inputBox.value){
        alert('Você precisa digitar algo.')
    }
    else{
        let li = document.createElement('li');
        txtValue = document.createTextNode(inputBox.value);
        
        li.appendChild(txtValue);
        listContainer.appendChild(li);
        apagaInput()
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        salvarInformacao()
    }
    
}

btnAdc.addEventListener('click', adcItem)

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        salvarInformacao()
    }
    if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        salvarInformacao();
    }
}, false)

function salvarInformacao(){
    localStorage.setItem('tarefas', listContainer.innerHTML);
}

function mostraTarefa(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    listContainer.innerHTML = tarefasSalvas || '';
}

mostraTarefa();
