/*
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

let str=`<div><img src="https://www.j2store.org/media/k2/items/cache/9e18ae44efb984e430f0539350fef656_XL.jpg" alt="Girl in a jacket" width="500" height="600"><h1>Congratulations!</h1><h2>Dear, %username%</h2><p>You are successfully inrolled into the course plan <b>%coursename%</b>.</p><p>Your instructor is <b>%instructorname%</b>.</p>
<p>Click here for further information,</p><a href='https://www.youtube.com/'><button style="background-color: rgb(78, 116, 205); color: azure; border-radius: 7%;cursor: pointer;">Click Here</button></a><h1>Thank You!</h1>
</div>`;

    var mapObj = {
      '%username%':"Deepak",
      '%instructorname%':"Vishal",
      '%coursename%':"JavaScript Advanced"
   };
   str = str.replace(/%username%|%coursename%|%instructorname%/gi, function(matched){
     return mapObj[matched];
   });
  console.log(str);
const msg = {
  to: 'mr.deepaknagvanshi@gmail.com', // Change to your recipient
  from: 'dbhagat@krishworks.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: str,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  */
  /*
  const { PDFDocument, StandardFonts, rgb }= require('pdf-lib');

  const fs = require('fs');
  
// Use fs.readFile() method to read the file
const existingPdfBytes =fs.readFile('template1.pdf', 'utf8', function(err, data){ 
    // Display the file content
    //console.log(data);
    return data;
});

// Load a PDFDocument from the existing PDF bytes
const pdfDoc =async ()=> await PDFDocument.load(existingPdfBytes);
  
console.log('readFile called');
*/

/*

const { PDFDocument, StandardFonts, rgb,TextAlignment } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");

async function createPDF() {
  const document = await PDFDocument.load(readFileSync("./template1.pdf"));

  const courierBoldFont = await document.embedFont(StandardFonts.Courier);

  let img= readFileSync("./sadahai.png");

  image=await document.embedPng(img);

  const firstPage = document.getPage(0);
  //console.log(firstPage);
  //firstPage.moveTo(105, 530);

  imgdim=image.scale(0.15);
  //console.log(img.width);

  //const {width,height}=img.scale(1);

  firstPage.drawImage(image, {
    x: firstPage.getWidth()/1.4 - imgdim.width / 2,
    y: firstPage.getHeight() / 5 - imgdim.height / 2,
    width: image.width/6,
    height: image.height/6,
  })
  let name="Deepak Kuamrssss";
  
    firstPage.drawText(name, {
      x:110,
      y:340,
      font: courierBoldFont,
      size: 50,
      color:rgb(0.55,0.53,0.71),
      maxWidth:700,
      center:1,
      lineHeight:35,
    });
  firstPage.drawText("Javascript Advance", {
    x:260,
    y:220,
    font: courierBoldFont,
    size: 30,
    color:rgb(1.00,0.10,0.10)
  });
  firstPage.drawText("26/08/2022", {
    x:195,
    y:100,
    font: courierBoldFont,
    size: 20,
    color:rgb(0.35,0.33,0.50)
  });
 writeFileSync("./temp.pdf", await document.save());
}

createPDF().catch((err) => console.log(err));

*/


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