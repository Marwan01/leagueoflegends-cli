const program = require("commander");

program.version('0.0.1');

program
.command('league')
.description('league')
.action(function(hello){
    console.log(hello)
})

program.parse(process.argv)