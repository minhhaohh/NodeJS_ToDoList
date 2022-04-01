const fs = require("fs");

const createTask = (name, address) => {
    const newTask = {
        id: Math.random().toString(),
        name,
        address,
    };
    let allTasks = readAllTasks();
    allTasks.push(newTask);
    fs.writeFileSync("task.json", JSON.stringify(allTasks));
    return newTask;
};

const readAllTasks = () => {
    const buffer = fs.readFileSync("task.json");
    const taskString = buffer.toString();
    const taskJSON = JSON.parse(taskString);
    return taskJSON;
};

const readDetailTask = (id) => {
    let allTasks = readAllTasks();
    const detailTask = allTasks.find((task) => task.id === id);
    return detailTask;
};

const updateTask = (id, name, address) => {
    let allTasks = readAllTasks();
    const index = allTasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        const oldTask = allTasks[index];
        const newTask = { ...oldTask, name, address };
        allTasks[index] = newTask;
        fs.writeFileSync("task.json", JSON.stringify(allTasks));
        return newTask;
    }
    return false;
};

const deleteTask = (id) => {
    let allTasks = readAllTasks();
    const index = allTasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        const task = allTasks[index];
        allTasks = allTasks.filter((task) => task.id !== id);
        fs.writeFileSync("task.json", JSON.stringify(allTasks));
        return task;
    } else {
        return false;
    }
};

module.exports = {
    createTask,
    readAllTasks,
    readDetailTask,
    updateTask,
    deleteTask,
};
