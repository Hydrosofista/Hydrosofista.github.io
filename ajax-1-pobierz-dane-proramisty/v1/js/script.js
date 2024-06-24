console.log('jQuery - $.ajax()');

$(document).ready(function () {

  // jQuery - $.ajax() => https://api.jquery.com/jquery.ajax/
  // za pomocą tej metody można pobierać/wysyłać dane w jakimkolwiek formacie (np. JSON, XML) i za pomocą jakiejkolwiek metody (GET, POST, PUT, DELETE, OPTION)

  $.ajax({
    url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
    statusCode: {
      200: function () {
        console.log(`OK - wszystko gra :)`);
      }
    },
    success: function (data) {

      console.log(data);
      console.log(data.name);
      console.log(data.email);
    },
    error: function (error) {
      console.error(error);
    },
  });

  $.ajax({
    url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
    statusCode: {
      200: function () {
        console.log(`OK - wszystko gra :)`);
      }
    },
  })
    .done(function (data) {

      console.log(data);
      console.log(data.name);
      console.log(data.email);
    })
    .fail(function (error) {
      console.error(error);
    })

});
