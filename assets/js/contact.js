document.addEventListener("DOMContentLoaded", () => {
    const validation = new JustValidate(".main__contact"); 
    let isValidate = false;

    validation
        .addField("#contact-name", [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El nombre es muy corto"
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "El nombre es demasiado largo"
            }
        ])
        .addField("#surname", [
            {
                rule: "required",
                errorMessage: "Los apellidos es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Los apellido es muy corto"
            },
            {
                rule: "maxLength",
                value: 25,
                errorMessage: "Los apellido es demasiado largo"
            }
        ])
        .addField("#contact-email", [
            {
                rule: "required",
                errorMessage: "El email es obligatorio"
            },
            {
                rule: "email",
                errorMessage: "Email no es valido"
            }
        ])
        .addField("#gender", [
                {
                    rule: "required",
                    errorMessage: "Selecciona el genero"
                },
                
            ])
        .addField("#date", [
                {
                    rule: "required",
                    errorMessage: "La fecha es obligatoria"
                },
                
            ])
        .addField("#year", [
            {
                rule: "required",
                errorMessage: "La edad es obligatoria"
            },
            {
                rule: "integer",
                errorMessage: "Solo son valido los numeros"
            }
        ])
        .onSuccess(()=>{
            isValidate = true;

            alert("Mensaje enviado.. Gracias!!");
        });

});