const express = require("express");
const logger = require("morgan");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config(); 

const app = require('./app');

const PORT = process.env.SERVER_PORT || 2345;

app.listen(PORT, () => console.info(`Server up and running on port ${SERVER_PORT}`));
