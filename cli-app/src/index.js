#!/usr/bin/env node

'use strict';

const http = require('http');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Spinner = CLI.Spinner;
const axios = require('axios');

  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter location of the github users you want to find: ',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the location of the users u want to find:';
        }
      }
    }
  ]

   let locat;
   inquirer.prompt(questions).then(function(res){
       locat = res.username;
    })

axios.get('https://api.github.com/search/users?q=location:'+locat).then(function(response){
	var item = response.data.items;
  for(var u=0; u<item.length; u++){
    console.log(chalk.yellow('Username: ')+chalk.green(item[u].login));
}
});
