const yargs = require('yargs');
const log = console.log;

yargs.command({
    command : 'add',
    describe : 'Add a new Note',
    handler : function(){
        log('Adding a new note.')
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove Note',
    handler : function(){
        log('Removing a new note.')
    }
})

log(yargs.argv);
