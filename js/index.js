let pdfFiller = require("pdffiller");
let sourcePDF = "../formats/master_form_2.pdf";
let destinationPDF = "../dest/filled_form_js.pdf";

const data = {
	"firstName": "JavaScript",
  "lastName": "PoC",
  "address": "Japanese font are not embedded in this document."
};

pdfFiller.fillForm(sourcePDF, destinationPDF, data, function(err) {
  if (err) throw err;
  console.log("In callback (we're done).");
});
