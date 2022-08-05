const http = require("http");
const url = require("url");
const nodemailer = require('nodemailer');


function getHTMLOrder(order){
    console.log(order);
    const o = JSON.parse(order);
    const html = o.reduce((acc, { id, name, count, price }) => (`${ acc }<p>Id : ${ id }</p>
    <p>Name : ${ name }</p>
    <p>Count : ${ count }</p>
    <p>Price for 1 : ${ price }</p>
    `), '');

    return html;
}

async function main(order) {  
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: 'owen.ohara@ethereal.email',
        pass: 'vGkxqfChxRzwHK8eCX'
      },
    });
    const d = Date.now();
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Shop" <SHOP@SHOP.com>', // sender address
      to: "ME@example.com, ADMIN@example.com", // list of receivers
      subject: `New Order${ d }`, // Subject line
      text: order, // plain text body
      html: getHTMLOrder(order), // html body
    });
  }
  
// main().catch(console.error);

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  console.log('ORDER', q.query.order);
  q.query.order && main(q.query.order);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Receive data`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});