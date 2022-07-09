
const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('new', Date.now() + '.pdf');
pdfDoc
    // 1st Page
    .createPage('letter-size')
    .text('Welcome to Hummus-Recipe', 'center', 250, {
        color: '#066099',
        fontSize: 30,
        bold: true,
        font: 'Helvatica',
        align: 'center center',
        opacity: 0.8
    })
    .image('image.png', 170, 300, {width: 300, keepAspectRatio: true})
 
        .endPage()
    // // 2nd page
    // .createPage('A4', 90)
    // .circle(150, 150, 300)
    // .endPage()
    // end and save
    .endPDF(()=>{ /* done! */ });