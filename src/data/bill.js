//Import the library into your project


var billInvoiceTemplate = {
    // Customize enables you to provide your own templates
    // Please review the documentation for instructions and examples
    "customize": {
        //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
    },
    "images": {
        // The logo on top of your invoice
        "logo": "http://testing.alterati.in/images/Logo.png",
        // The invoice background
        // "background": "http://testing.alterati.in/images/Watermark.png"
    },
    // Your own data
    "sender": {
        "company": "Kavka Codes",
        "address": "100 Oakville Rd.",
        "zip": "M9W3B1",
        "city": "Toronto",
        "country": "Canada"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    // Your recipient
    "client": {
        "company": "",
        "address": "",
        "zip": "",
        "city": "Toronto",
        "country": "Canada",
        // "contact": "6478614418",
        // "custom2": "custom value 2",
        // "custom3": "custom value 3"
    },
    "information": {
        // Invoice number
        "number": "2021.0001",
        // Invoice data
        "date": Date().toString().substring(4,15),
        // Invoice due date
        "due-date": Date().toString().substring(4,15)
    },
    // The products you would like to see on your invoice
    // Total values are being calculated automatically
    "products": [
    ],
    // The message you would like to display on the bottom of your invoice
    "bottom-notice": "Thank you for visiting. || Merci pour votre visite.",
    // Settings to customize your invoice
    "settings": {
        "currency": "CAD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')        
        // "margin-top": 25, // Defaults to '25'
        // "margin-right": 25, // Defaults to '25'
        // "margin-left": 25, // Defaults to '25'
        // "margin-bottom": 25, // Defaults to '25'
        // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
        // "height": "1000px", // allowed units: mm, cm, in, px
        // "width": "500px", // allowed units: mm, cm, in, px
        // "orientation": "landscape", // portrait or landscape, defaults to portrait
    },
    // Translate your invoice to your preferred language
    "translate": {
        // "invoice": "FACTUUR",  // Default to 'INVOICE'
        // "number": "Nummer", // Defaults to 'Number'
        // "date": "Datum", // Default to 'Date'
        // "due-date": "Verloopdatum", // Defaults to 'Due Date'
        // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
        // "products": "Producten", // Defaults to 'Products'
        // "quantity": "Aantal", // Default to 'Quantity'
        // "price": "Prijs", // Defaults to 'Price'
        // "product-total": "Totaal", // Defaults to 'Total'
        // "total": "Totaal", // Defaults to 'Total'
        // "vat": "btw" // Defaults to 'vat'
    },
};
export default billInvoiceTemplate;
