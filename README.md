# React Task Tracker

This is a simple task tracker web application built using React. It allows you to add, delete, and toggle reminders for tasks.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [React Components And Functions](#components)
- [Contributing](#contributing)
- [License](#license)

## Demo

## Features

- Add tasks with a description and day
- Toggle task reminders
- Delete tasks
- Responsive design

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/gkirat/Task-Manager.git
2. Navigate to the project directory:
   ```bash
   cd Task-Manager

3. Install the project dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start

The app should open automatically in your web browser. If not, you can access it at http://localhost:3000.


## Usage

Use the app to manage your tasks:
- Add tasks by clicking the "Add" button and filling in the details.
- Delete tasks by clicking the red "X" button.
- Toggle task reminders by double-clicking a task.

Customize the app by editing the code in the src directory.

## Components

### App.js:

- `toggleReminder(id)`: Toggles the reminder status of a task with the given `id`.
- `addTask(task)`: Adds a new task to the list with the provided `task` object.
- `deleteTask(id)`: Deletes a task with the given `id` from the list.
- `toggleShowTask()`: Toggles the visibility of the "Add Task" form.

### AddTask.jsx:

- `onSubmit(event)`: Handles the form submission when adding a new task. Validates the task input and calls the `onAdd` function passed as a prop to add the task.

### Button.jsx:

- This component is a simple button that can have a custom color, text, and click event handler. It's used in the `Header` component to toggle the visibility of the "Add Task" form.

### Header.jsx:

- `toggleShTa()`: Calls the `toggleShowTask` function passed as a prop to toggle the visibility of the "Add Task" form.

### Task.jsx:

- This component represents a single task item. It can:
  - Display the task's text, day, and reminder status.
  - Handle the double-click event to toggle the reminder status.
  - Handle the click event to delete the task.

### Tasks.jsx:

- `onDelete(id)`: Calls the `deleteTask` function with the given `id` to delete a task.
- `onToggle(id)`: Calls the `toggleReminder` function with the given `id` to toggle the reminder status of a task.

These components work together to create a task tracker application with features like adding, deleting, and toggling reminders for tasks.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the project to your own GitHub account.
- Create a new branch with a descriptive name.
- Make your changes and commit them to your branch.
- Push your branch to your GitHub fork.
- Open a pull request to the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Feel free to customize the information as per your requirements and project details. The Readme files provide an overview of the features and usage instructions for each smart contract.




