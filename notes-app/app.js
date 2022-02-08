const command = process.argv[2];
const log = console.log;
if(command === 'add'){
    log(`Adding Note..`);
} else if(command === 'remove'){
    log(`Removing Note...`);
}