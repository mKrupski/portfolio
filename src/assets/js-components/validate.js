$("#contactForm").validate({
     errorClass: "text-error",
   rules: {
    name: "required",
    message: "required",   
    _replyto: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "To pole jest wymagane",
    message: "Wiadomość nie może być pusta",
    _replyto: {
      required: "Wprowadź prawidłowy adres e-mail",
      email: "Nieprawidłowy format"
    }
  }
});