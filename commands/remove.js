const conf = new (require('conf'))()
const chalk = require('chalk')

function remove({ tasks }) {
    let todoList = conf.get('todo-list');
    if (!todoList || !todoList.length) {
        console.log(chalk.red.bold("You don't have any tasks yet"));
        return;
    }

    if (!tasks || !tasks.length) {
        conf.set('todo-list', []);
        console.log(chalk.green.bold('Tasks have been removed successfully'))
        return;
    }

    if (todoList && todoList.length) {
        todoList = todoList.filter((task, index) => {
            if (tasks.indexOf(index.toString()) === -1) {
                return task;
            }
        })
        conf.set('todo-list', todoList);
        console.log(chalk.green.bold('Tasks have been removed successfully'))
    }
}
module.exports = remove