#! /usr/bin/env node
const { program } = require('commander')
const list = require('./commands/list');
const add = require('./commands/add');
const markDone = require('./commands/markDone');
const remove = require('./commands/remove');

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list);

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark tasks done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all the tasks will be marked as done')
    .action(markDone)

program
    .command('remove')
    .description('Remove tasks from list')
    .option('-t, --tasks <tasks...>', 'The tasks to remove. If not specified, all the tasks will be removed')
    .action(remove)

program.parse();