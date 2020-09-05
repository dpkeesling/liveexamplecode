'use strict'

let codeBlock = document.createElement('textarea');
let body = document.getElementsByTagName('body');
codeBlock.id = 'codeBlock';
codeBlock.name = 'codeBlock';
codeBlock.rows = '10';
codeBlock.cols = '80';
codeBlock.innerHTML = 'Enter your code here';
/* TODO: Use onchange event for the textarea!!!!! */
body[0].appendChild(codeBlock);