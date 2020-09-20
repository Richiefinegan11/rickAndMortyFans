  function sendMail(contactForm) {
    emailjs.send("gmail", "rickandmortyfanclub", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "join_the_club": contactForm.jointheclub.value
    })
    .then(
        function(response) {
            alert("SUCCESS! We will be in touch, if you are worthy :)", response);
        },
        function(error) {
            alert("FAILED, please try again.", error);
        }
        
    );
    return false;  // To block from loading a new page
}   