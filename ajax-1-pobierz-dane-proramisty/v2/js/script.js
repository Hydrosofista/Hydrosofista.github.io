console.log('jQuery - $.ajax()');

$(document).ready(function () {
	$("#get-data").click(function () {
		console.log("click-data");
		$.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
			.done(function (data) {
				console.log(data);

				let pImie = $("<p></p>").text(`Imię: ${data.imie}`);
				let pNazwisko = $("<p></p>").text(`Nazwisko: ${data.nazwisko}`);
				let pZawod = $("<p></p>").text(`Zawód: ${data.zawod}`);
        let pFirma = $("<p></p>").text(`Firma: ${data.firma}`);
				let hr = $("<hr />");

				let jqDiv = $('div');

				jqDiv.append(pImie);
				jqDiv.append(pNazwisko);
				jqDiv.append(pZawod);
				jqDiv.append(pFirma);
				jqDiv.append(hr);
			})
			.fail(function (error) {
				console.error(error);
			});



	});
});
