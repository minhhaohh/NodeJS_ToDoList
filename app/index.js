const yargs = require("yargs");
const {
    createTask,
    readAllTasks,
    readDetailTask,
    updateTask,
    deleteTask,
} = require("./model/task");

// Create command CRUD
// Create - node app/index.js create
// node app/index.js create --name="VIP" --address="Lam Dong"
yargs.command({
    command: "create",
    builder: {
        name: {
            type: "string",
        },
        address: {
            type: "string",
        },
    },
    handler: (args) => {
        const { name, address } = args;
        const newTask = createTask(name, address);
        console.log("Task created: ", newTask);
    },
});

// Read all - node app/index.js read-all
yargs.command({
    command: "read-all",
    handler: () => {
        const allTask = readAllTasks();
        console.log("All tasks: ", allTask);
    },
});

// Read detail - node app/index.js read-detail
// node app/index.js read-detail --id="1"
yargs.command({
    command: "read-detail",
    builder: {
        id: {
            type: "string",
        },
    },
    handler: (args) => {
        const { id } = args;
        const detailTask = readDetailTask(id);
        if (detailTask) {
            console.log("Detail task:", detailTask);
        } else {
            console.log("Not found!!!");
        }
    },
});

// Update - node app/index.js update
// node app/index.js update --id="1" --name="Tran" --address="Da Nang"
yargs.command({
    command: "update",
    builder: {
        id: {
            type: "string",
        },
        name: {
            type: "string",
        },
        address: {
            type: "string",
        },
    },
    handler: (args) => {
        const { id, name, address } = args;
        const newTask = updateTask(id, name, address);
        if (newTask) {
            console.log("Task updated: ", newTask);
        } else {
            console.log("Not found!!!");
        }
    },
});

// Delete - node app/index.js delete
// node app/index.js delete --id="0.3358734708707989"
yargs.command({
    command: "delete",
    builder: {
        id: {
            type: "string",
        },
    },
    handler: (args) => {
        const { id } = args;
        const task = deleteTask(id);
        if (task) {
            console.log("Task deleted: ", task);
        } else {
            console.log("Not found!!!");
        }
    },
});

// Save command
yargs.parse();
