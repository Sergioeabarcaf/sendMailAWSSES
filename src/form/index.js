const aws = require("aws-sdk");
const ses = new aws.SES();
const charset = "UTF-8";

exports.sendMailFormContact = async (event) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }

  const body = JSON.parse(event.body);


  const { sender, recipient, subject, body_text, body_html } = createMail(body);

  const params = {
    Source: sender,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset,
        },
        Html: {
          Data: body_html,
          Charset: charset,
        },
      },
    },
  };

  const response = await ses.sendEmail(params).promise();

  const responseUser = {
    statusCode: 200,
    body: JSON.stringify(response.ResponseMetadata.RequestId),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
      "X-Requested-With": "*",
    },
  };

  return responseUser;
};

const createMail = ({ name, email, message }) => {
  const sender = `Sender Name <xxxxxx>`;
  const recipient = 'XXXXXX';
  
  const subject = `DiscoveryForm - Contacto de ${name}`;
  const body_text = `${name} Quiere conocer sobre Discovery`;
  const body_html = `<html>
    <head></head>
    <body>
    <h1>${name} Quiere conocer sobre Discovery!!!</h1>
    <br>
    <p><b>${name}</b> Comento lo siguiente: </p>
    <p><i>${message}</i></p>
    <br>
    <p>Su correo de contacto es: <a href="mailto:${email}">${email}</a></p>
    <br>
    <p>Este correo se genera de manera automática, favor no responder.</p>
    </body>
    </html>`;

  return { sender, recipient, subject, body_text, body_html };
};
