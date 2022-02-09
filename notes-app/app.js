const yargs = require('yargs');
const log = console.log;

yargs.command({
    command : 'add',
    describe : 'Add a new Note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
           describe : 'Note Body',
           demandOption : true,
           type : 'string' 
        }
    },
    handler : function(argv){
        log('Title : ', argv.title);
        log('Body : ' , argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove Note',
    handler : function(){
        log('Removing a new note.')
    }
})

yargs.command({
    command : 'read',
    descripe : 'Read a Note',
    handler : function(){
        log('Reading a Note.');
    }
})

yargs.parse();
//log(yargs.argv);
