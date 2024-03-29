const conf = new (require('conf'))()
const chalk = require('chalk')

function markDone({ tasks }) {
    let todoList = conf.get('todo-list');
    if (todoList && todoList.length) {
        todoList = todoList.map((task, index) => {
            if (tasks && tasks.length) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    task.done = true;
                }
            }
            else {
                task.done = true
            }
            return task;
        })
        conf.set('todo-list', todoList);
        console.log(chalk.green.bold('Tasks have been marked as done successfully'))
    }
    else {
        console.log(chalk.red.bold("You don't have any tasks yet"))
    }
}
module.exports = markDone