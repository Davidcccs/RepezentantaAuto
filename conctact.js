function trimiteEmail(){
    var parametriEmail = {
        nume_utilizator : document.getElementById('inputName').value,
        email_utilizator: document.getElementById('inputEmail').value,
        subiect: document.getElementById('inputSubiect').value

    }

    // emailjs.send('default_service', 'template_WHxVXYdu',parametriEmail)
    emailjs.send('default_service', 'template_cavceom',parametriEmail) 
    console.log(parametriEmail.nume_utilizator);
    console.log(parametriEmail.email_utilizator);
    console.log(parametriEmail.subiect);
}