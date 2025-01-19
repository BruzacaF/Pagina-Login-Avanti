
// Função para verificar se o email e senha são válidos

function verificarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.(com|com\.br)$/i;
    return re.test(email);
}

function verificarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    return true;
}




// Manipulação do DOM para alterar a interface de acordo com o resultado da validação

const getEmail = () => document.getElementById('email').value;
const getSenha = () => document.getElementById('senha').value;

const validate = (email, senha) => {
    return verificarEmail(email) && verificarSenha(senha);
};

// Criação de uma div para exibir o alerta de erro ou sucesso

const createAlertElement = () => {
    const alertElement = document.createElement('div');
    alertElement.id = 'alert';
    alertElement.className = 'alert';
    document.getElementById('senha').insertAdjacentElement('afterend', alertElement);
};

// 

const errorUI = () => {
    let alert = document.getElementById('alert');
    let inputSenha = document.getElementById('senha');
    let inputEmail = document.getElementById('email');
    alert.style.display = 'none';

    inputEmail.classList.remove('error');
    inputSenha.classList.remove('error');

  
    
    alert.classList.remove('alert-success');

    btn.value = 'Carregando...';
    btn.disabled = true;

    setTimeout(() => {
        alert.style.display = 'block';

        alert.classList.add('alert-danger');

        inputEmail.classList.add('error');
        inputSenha.classList.add('error');

        alert.innerHTML = 'Email ou senha inválidos';
        btn.value = 'Logar';
        btn.disabled = false;
        
    }
    , 2000);

    

   

}

const successUI = () => {
    let alert = document.getElementById('alert');
    let btn = document.getElementById('btn');
    let inputSenha = document.getElementById('senha');
    let inputEmail = document.getElementById('email');
    alert.style.display = 'none';

    inputEmail.classList.remove('error');
    inputSenha.classList.remove('error');
    
    alert.classList.remove('alert-danger');

    btn.value = 'Carregando...';
    btn.disabled = true;

    setTimeout(() => {
        alert.style.display = 'block';
        alert.classList.add('alert-success');
        alert.innerHTML = 'Login efetuado com sucesso';
        btn.value = 'Logar';
        btn.disabled = false;
    }, 2000);


    

    

  
}


createAlertElement();
const showAlert = (isValid) => {
    if (isValid) {
        successUI();
    } else {
        errorUI();
    }
}


document.getElementById('btn').addEventListener('click', () => {
    const email = getEmail();
    const senha = getSenha();
    const isValid = validate(email, senha);
    showAlert(isValid);
});
