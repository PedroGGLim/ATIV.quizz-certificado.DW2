let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = true

let password = document.querySelector('#password')
let labelSen = document.querySelector('#labelSen')
let validSen = true

let Confirmpassword = document.querySelector('#Confirmpassword')
let labelConfirmsen = document.querySelector('#labelConfirmsen')
let validConfirmsen = true



function cadastrar(){
    if(validEmail && validSen && validConfirmsen){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            emailCad: email.value,
            senhaCad: password.value,
            confirmsenCad: password.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        setTimeout(()=>{
            window.location.href='http://127.0.0.1:5500/index.html'
        }, 3000)
        

    } else {
        alert('Campos não preenchidos ou incorretos.')
    };
};