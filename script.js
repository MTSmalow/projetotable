class validator{

    constructor() {
        this.validation = [

        ]
    }

validate(form){
    let inputs = form.getElementsByTagName('input');
    console.log(inputs);

    let inputsArray = [...inputs];
    console.log(inputsArray);
}

}
let form= document.getElementById("register-form");
let submit = document.getElementById("bnt-submit");

let Validator = new validator();

//evento de validaçao 

submit.AddEventListener('click', function(e) {
    e.preventDefault();

    validator.validate(form);
})