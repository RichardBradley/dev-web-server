#!/usr/bin/env node

/**
 * @fileOverview Run web server.
 *
 * VERSION 1.1.0
 *
 * run with arguments:
 * - BASEDIR x: path to dir containing httpdocs root (default: current dir).
 * - PORT x: port of the wev server (default: 8080).
 */

var path = require('path');
var HttpServer = require('./server/http-server.js');

var config = {
  baseDir: process.cwd() // set to the current dir by default.
};

// apply BASEDIR argument if present in the command line.
var baseDirIndex = process.argv.indexOf('BASEDIR');
if (baseDirIndex !== -1 && (baseDirIndex + 1) < process.argv.length) {
  var baseDir = process.argv[baseDirIndex + 1];
  config.baseDir = path.resolve(config.baseDir, baseDir);
}

// apply PORT argument if present in the command line.
var portIndex = process.argv.indexOf('PORT');
if (portIndex !== -1 && (portIndex + 1) < process.argv.length) {
  var port = process.argv[portIndex + 1];
  config.port = port;
}

// start the web server.
var httpServer = new HttpServer(config);
httpServer.start();