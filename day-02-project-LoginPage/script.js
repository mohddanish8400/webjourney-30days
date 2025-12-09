        const form = document.getElementById("loginForm");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const remember = document.getElementById("remember");

        form.addEventListener("submit",function(event){
            event.preventDefault();

            let errors =[];

            if(username.value.trim()===""){
                errors.push("username can't be empty")
            }else{
                   const firstFour = username.value.substring(0, 4);
                if (!/^[A-Za-z]{4}$/.test(firstFour)) {
                errors.push("username First 4 characters must be letters (A-Z or a-z)");
            }
            }
            if(password.value.length<6){
                errors.push("password length must be >= than 6");
            }
            if(errors.length>0){
                alert(errors.join("\n"));
            }
            else{
                if(remember.checked){
                    alert("Login Successful! ✔ (Remember Me enabled)")
                }else{
                    alert("Login Successful! ✔")
                }
            }
        })