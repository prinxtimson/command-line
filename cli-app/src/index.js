#!/usr/bin/env node

'use strict';

const http = require('http');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Spinner = CLI.Spinner;
const axios = require('axios');


axios.get('https://api.github.com/search/users?q=location:lagos').then(function(response){
	var item = response.data.items;
  for(var u=0; u<item.length; u++){
    console.log(chalk.yellow('Username: ')+chalk.green(item[u].login));
}
});
