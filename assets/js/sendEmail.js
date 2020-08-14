function sendMail(contactForm) {
    emailjs.sned("gmail", "rickAndMortyFanClub", {
        "from_name": contactForm.name,value,
        "from_email": contactForm.emailaddress.value,
        "join_the_club": contactForm.jointheclub.value
    })
    .then(
        function(response) {
            console.log ("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}