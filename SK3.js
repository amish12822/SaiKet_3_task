function emailSend(){

    Email.send({
        Host : "smtp.gmail.com",
        Username : "r31555776@gmail.com",
        Password : "A819FD9964A2B9D7C226A7F84003B426995B",
        To : 'j6669325@gmail.com',
        From : "r31555776@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}