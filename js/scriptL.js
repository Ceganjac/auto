$(".dugme").on("click",function() {
    let text=$("#email").val();
    if(text.indexOf('@')!=-1){
        alert("Успешно сте се пријавили!");
    }
})

$(".dugme1").on("click",function() {
    let ime=$("#ime").val();
    let prezime=$("#prezime").val();
    let korisnickoIme=$("#korisnicko_ime").val();
    let selectedOption = $('input[name="pol"]:checked').val();
    let password=$("#lozinka1").val();
    let password1=$("#p_lozinka1").val();
    let text=$("#email1").val();
    if(password!==password1){
        alert("Лозинке нису исте!");
    }

    else if(password.length<=8){
        alert("Лозинка мора бити дужа од 8 карактера.");
    }
    else if(text.indexOf('@')<0){
        alert("Нисте унели добру форму за e-mail");
    }
    else{
        alert("Успешно сте се регистровали!\n"+ 
        "Име: "+ime + "\n" + "Презиме: "+prezime + 
        "\n" + "Корисничко име: " + korisnickoIme + "\n"+
        "Ваш e-mail: " + text + "\n"+
        "Ваша лозинка: " + password
              );
    }



})

