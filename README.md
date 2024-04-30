# Taskease
## About

📋 Taskease - is a personal study project, where the purpose of the page is to best manage your daily tasks in an interactive panel with the user

---

## Features

- [x] Show all tasks in a list with priority levels, status and creation date
- [x] 'Pending' page filtering tasks with only 'not started' and 'in progress' status
- [x] Search and filter tasks by name
- [x] Adding a task and being able to choose the initial priority
- [x] Feedback on the last 5 tasks added in table format
- [x] Edit task with the ability to change the name, status and priority fields
- [x] Visual feedback when editing task, displaying before and after changes in table format
- [x] Night mode and light mode

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [MySQL](https://www.mysql.com/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Tuning your database

```bash

Run the script contained within taskease/backend/SQL.sql within your DBMS to create
the required database, table and columns

```

#### Running the web application (Back-end)

```bash

# Clone this repository
$ git clone https://github.com/3lucasrs/taskease.git

# Access the project folder in your terminal
$ cd taskease

# Access the backend folder
$ cd backend

# Install the dependencies
$ npm install

# Run the application with nodemon
$ nodemon src/server.js

# The app will open on the port: 3001 - go to http://localhost:3001/

```

#### Running the web application (Front-end)

```bash

# Access the project folder in your terminal
$ cd taskease

# Access the frontend folder
$ cd frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The app will open on the port: 5173 - go to http://localhost:5173/

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Backend**  ([Node.js](https://nodejs.org/en)  +  [Express.js](https://expressjs.com/))

- **[Sequelize](https://sequelize.org/)**
- **[Mysql2](https://www.npmjs.com/package/mysql2)**
- **[Cors](https://www.npmjs.com/package/cors)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**

#### **Frontend**  ([React + Vite](https://vitejs.dev/guide/))

- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[React Hook Form](https://react-hook-form.com/)**
- **[Zod](https://zod.dev/)**
- **[Date-fns](https://date-fns.org/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Apex Charts](https://apexcharts.com/)**
- **[Styled-components](https://styled-components.com/)**
