  const accountSender = "puissant.etienne@gmail.com";
  const accountDest = "puissant.etienne@gmail.com";

  exports.getContactMail = function (body) {
    const msg = {
      to: accountDest,
      from: accountSender,
      subject: "Online CV Contact - " + body.surname + " - " + body.entreprise,
      html: getContactMailBody(body),
      substitutions: {
        name: body.surname + " " + body.entreprise
      }
    };
    return msg;
  };

  function getContactMailBody(body) {
    const hasTel = body.phone ? "Tel : " + body.phone : " ";

    return body.surname + " - " + body.entreprise + " a ecrit le message suivant : <br> <br> - " +
      body.content + " - <br><br>" +
      "Mail : " + body.email + "<br>" + hasTel;
  }
