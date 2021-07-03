const conf = new (require('conf'))()
const chalk = require('chalk')

function add(task) {
    let todoList = conf.get('todo-list');
    
    if (!todoList) {
        todoList = [];
    }

    todoList.push({
        text: task,
        done: false
    })

    conf.set('todo-list', todoList);

    console.log(chalk.green.bold('Task has been added successfully!'))
}

module.exports = add