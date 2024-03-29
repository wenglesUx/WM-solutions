document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
  }, 3000);  
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").classList.add("scroll");
        document.querySelector("#logo-white").style.display = 'none';
        document.querySelector("#logo-def").style.display = 'block';
        document.querySelector("#sub-brand").style.color = '#343434 ';
    } else {
        document.querySelector(".navbar").classList.remove("scroll");
        document.querySelector("#logo-white").style.display = 'block';
        document.querySelector("#logo-def").style.display = 'none';
        document.querySelector("#sub-brand").style.color = '#fff';
    }
}
document.getElementById("whatsapp-button").addEventListener("click", function() {
    var phoneNumber = "61993624234";
    var message = encodeURIComponent("Olá! Gostaria de saber mais sobre os seus serviços.");

    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message, "_blank");
});

const myOffcanvas = document.getElementById('myOffcanvas')
// myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
//     alert('estado do componente')
    
// })
let menuMbAction = document.querySelectorAll('.navbar-nav li')

 
var navbarNav = document.querySelector('.navbar-Nav');
menuMbAction.forEach((item,index) =>{
    var navbarNav = document.querySelector('#offcanvasNavbar');
    item.addEventListener('click', () => {

        if (navbarNav.classList.contains('show')) {
            // Certifique-se de que a barra de menu está aberta antes de tentar fechá-la
           navbarNav.classList.remove('show')
           navbarNav.classList.add('hide')
           if(navbarNav.classList.contains('hide')){
            document.querySelector('body').style = 'none'
            document.querySelector('.navbar').style.paddingRight = 'none'
            document.querySelector('.offcanvas-backdrop').classList.remove('show')
            document.querySelector('.offcanvas-backdrop').classList.add('hide')
           } else(document.querySelector('.offcanvas-backdrop').classList.add('show'))
          

           
            // var offcanvas = new bootstrap.Offcanvas(navbarNav);
            // offcanvas.hide();
        }
    });
})


// função de destacar items do menu

// function destacarItemMenu(){
//     const sections = document.querySelectorAll('.page-mark');
//     const menuItems = document.querySelectorAll(".navbar-nav li a");

//     sections.forEach((section,index)=>{
//         const rect = section.getBoundingClientRect();
//         if(rect.top <= 50 && rect.bottom >= 50){
//             menuItems.forEach((item)=> item.classList.remove("active"));
//             menuItems[index].classList.add("active");
          
//             if(index == 1){
              
               
//                 // changeColorsCard()
//             }
          
           
            
//         }  else{
//             menuItems[index].classList.remove("active");
            
//         }
      
//     })
    


// }
// window.addEventListener("scroll", destacarItemMenu);


const form       = document.getElementById('form')
const campos     = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    textValidate();
    messegeValidate();
})

function setError(index){
    campos[index].style.border = ' 1px solid #e63636 '
    spans[index].style.display ='block'
}
function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display ='none'
}
function nameValidate(){
    if(campos[0].value.length < 4){
        setError(0)
    }else{
       removeError(0)
    }
}
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1)
    }
    else{
      removeError(1)
    }
}
function textValidate(){
    if(campos[2].value.length < 5){
       setError(2)

    }else{
        removeError(2)
    }
}
function messegeValidate(){
    if(campos[3].value.length < 5){
      

    }else{
        
    }
}
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
//   metodo de envio
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();



  // cards action
  const cardsActive =  document.querySelectorAll('.information-card .card-section')
  const infoAreaActived = document.querySelectorAll('.areaSobre .about') 
  
 console.log(infoAreaActived[0])
cardsActive.forEach((item,index)=>{


  

    item.addEventListener("click",()=>{
      cardsActive.forEach((card) => {
        card.classList.remove('card-active');
    });

    // Adiciona a classe 'card-active' apenas ao item clicado
    item.classList.add('card-active');

    console.log(index)
    infoAreaActived.forEach((area, areaIndex) => {
      if (index === areaIndex) {
          area.classList.add('active-about');
          area.classList.remove('desactive-about');
      } else {
          area.classList.remove('active-about');
          area.classList.add('desactive-about');
      }
  });
    // Agora você pode realizar outras ações aqui, se necessário
    // Exemplo: console.log('Item clicado:', item);
});

})
