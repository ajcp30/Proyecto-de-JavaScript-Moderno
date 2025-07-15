document.addEventListener("DOMContentLoaded", () => {

    let loginForm = document.querySelector(".aside__login");
    let inputName = document.querySelector("#name");
    let inputEmail = document.querySelector("#email");
    let inputPasword = document.querySelector("#pass");
    let asideData = document.querySelector(".aside__data");
    let loginName = document.querySelector(".data__name");
    let btnLogout = document.querySelector(".data__logout");

    let getUser = () => {
        let myUser = localStorage.getItem("user")
        if(myUser){
            let identity = JSON.parse(myUser);

            loginName.innerHTML = identity.name;
            loginForm.classList.add("aside__login--hide");
            asideData.classList.remove("aside__data--hide");

        };
    };

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //recoger valores formulario

        let name = inputName.value;
        let email = inputEmail.value;
        let pasword = inputPasword.value;

        // comprobar que todos los campos estan relleno
        let user = {};
        if(name  && email && pasword){
            //Guardar los datos en un objeto
            user = {name, email, pasword};

            //Guardar en localstorage

            localStorage.setItem("user", JSON.stringify(user));

            //vaciar formulario

            loginForm.reset();

            //mostrar usuario
            getUser();


        }
          
    });

    //mostarr usuario
    getUser();

    //logout

    btnLogout.addEventListener("click", () => {
        localStorage.clear();
        loginForm.classList.remove("aside__login--hide");
        asideData.classList.add("aside__data--hide");
    })
    

});




