## Student Information System

### Team Members

* Student 1: Sharan Melinda Wisdom
* Student 2: M M Mohamed Mansoor
* Student 3: Nilesh Gupta 

### Project Description

This is a simple web application that displays student information. The main purpose of this project is to learn Git and GitHub collaboration.

### Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub

### Git Branching Strategy

We used separate branches for different tasks. The changes were merged into the `main` branch using Pull Requests.

Branches used:

* `main`
* `feature/ui`
* `feature/javascript`
* `feature/contact`
* `feature/student-name`
* `feature/app-title`

### Pull Requests Created

* `feature/ui` → `main`
* `feature/javascript` → `main`
* `feature/contact` → `main`
* `feature/student-name` → `main`
* `feature/app-title` → `main`

### Merge Conflict

### What caused the conflict?

Two branches changed the same heading in `index.html` differently.

One branch changed it to:

```html
<h1>Student Management System</h1>
```

The other branch changed it to:

```html
<h1>MCA Student Information Portal</h1>
```

This caused a merge conflict.

### How was it resolved?

We opened the file and selected the required heading. We removed the conflict markers, committed the changes and pushed the branch.

The final heading was:

```html
<h1>Student Management System – MCA</h1>
```

The Pull Request was then merged into `main`.

### How to Run the Application

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

No database or server is required.

### Conclusion

This project helped us understand how three students can work together using Git and GitHub.
