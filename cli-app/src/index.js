#!/usr/bin/env node

'use strict';

const http = require('http');
const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const inquirer = require('inquirer');
const Preferences = require('preferences');
const Spinner = CLI.Spinner;
const _ = require('lodash');
const touch = require('touch');
const GitHubApi = require('github');
const fs =require('fs');
const axios = require('axios');


var github = new GitHubApi({
  version: '3.0.0'
});

function getGithubCredentials(callback) {

  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Github username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
};

function getGithubToken(callback) {
  var prefs = new Preferences('ginit');

  if (prefs.github && prefs.github.token) {
  	if (error){
  		return callback(error);
  	}
    return callback(null, prefs.github.token);
  }

 getGithubCredentials(function(credentials) {
    var status = new Spinner(chalk.green('Authenticating you, please wait...'));
    status.start();

    github.authenticate(
      _.extend(
        {
          type: 'basic',
        },
        credentials
      )
    );

    github.authorization.create({
    scopes: ['user', 'public_repo', 'repo', 'repo:status'],
    note: 'ginit, the command-line tool for initalizing Git repos'
  }, function(err, res) {
    status.stop();
    if ( err ) {
      return callback( err );
    }
    if (res.token) {
      prefs.github = {
        token : res.token
      };
      return callback(null, res.token);
    }
    return callback();
  });
});
	 }

function getLocation (callback){

 var locat = [
 	{
 		type : 'input',
 		name : 'location',
 		message : 'Enter location of GitHub Users you want to find'
 	}
 ];
 inquirer.prompt(locat).then(callback);
}

axios.get('https://api.github.com/search/users?q=location'+ getLocation).then(function(response){
	console.log(response.data.login);
})
