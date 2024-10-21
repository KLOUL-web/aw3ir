window.onload = function () {
  // Ce code est exécuté une fois que toute la page est téléchargée par le navigateur
  console.log("DOM ready!");

  // Fonction pour valider l'email
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // Fonction pour valider la date de naissance
  function validateBirthday(birthday) {
      const birthdayDate = new Date(birthday);
      const birthdayTimestamp = birthdayDate.getTime();
      const nowTimestamp = Date.now();

      if (birthdayTimestamp <= nowTimestamp && !isNaN(birthdayTimestamp)) {
          return true;
      } else {
          return false;
      }
  }

  // Ajouter l'événement de soumission du formulaire
  document.getElementById('form').addEventListener('submit', function (event) {
      let isValid = true; // Réinitialiser la validité du formulaire

      // Récupérer les valeurs des champs à valider
      const email = document.getElementById('email').value;
      const birthday = document.getElementById('birthday').value;

      // Valider l'email
      if (!validateEmail(email)) {
          document.getElementById('email').classList.add('is-invalid');
          isValid = false;
      } else {
          document.getElementById('email').classList.remove('is-invalid');
      }

      // Valider la date de naissance
      if (!validateBirthday(birthday)) {
          document.getElementById('birthday').classList.add('is-invalid');
          isValid = false;
      } else {
          document.getElementById('birthday').classList.remove('is-invalid');
      }

      // Empêcher la soumission du formulaire si des champs sont invalides
      if (!isValid) {
          event.preventDefault();
          event.stopPropagation();
      }
  });
};
