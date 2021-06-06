<h1 align="center">Welcome to sendMailServerlessAWS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This project is a Serverless solution for send mail from API path to administrator mail.
> Use AWS technologies (Cloudformation, API Gateway, Lambda and SES).
> 

## Pre Requisites
* Install NodeJS.
* Install and configure AWS CLI.
* Install AWS-SDK. 
## Install

```sh
npm install
```

## Usage
1. Clone this repo. 
2. changes values in src/form/index.js

```js
  const sender = `Sender Name <xxxxxx>`;
  const recipient = 'XXXXXX';
```

3. Make a Build

```sh
  sam build
```

4. Deploy

```sh
  sam deploy --guided 
```
## Author

👤 **sergioeabarcaf**

* Github: [@sergioeabarcaf](https://github.com/sergioeabarcaf)
* LinkedIn: [@sergioeabarcaf](https://linkedin.com/in/sergioeabarcaf)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_