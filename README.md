# **memo.list - Project Management Software**

**memo.list** is a web-based project management software designed for managing tasks across divisions, ensuring users stay on track with notifications, task assignment, and collaborative tools. The platform offers task management, team collaboration, user role assignment, and analytics for progress tracking. This software developed using CSS for styling, JavaScript for interactivity, and HTML for structuring the web pages.

## **Features**

### **Project Management**
- **Create/Update Projects**: Admins can create and update projects with a start and end date.
- **Assign Users**: Assign team members to projects and track their progress.

### **Task Management**
- **Task Creation**: Users can create tasks, assign them to team members, and set deadlines.
- **Task Updates**: Users can update the status of a task (in progress, completed, etc.) and adjust due dates if necessary.
- **Task Progress Tracking**: Users and admins can view the current progress of assigned tasks.

### **User Management**
- **User Roles**: Assign roles to users such as admin, team member, or regular user. Each role has different permissions.
- **Task Assignment**: Users can assign tasks to themselves or other users based on their role.

### **Team Collaboration**
- **Team Management**: Admins can create teams, add members, and assign tasks to teams.
- **View Team Tasks**: Team members can view tasks assigned to their team and track team progress.

### **Notifications**
- **Task Notifications**: Automatically notify users when tasks are assigned or deadlines are approaching.
- **Custom Alerts**: Admins can send custom notifications or alerts to specific users or teams.

### **Analytics & Reporting**
- **Progress Reports**: Generate reports based on task completion, project progress, and overall performance.
- **View Statistics**: Analytics allow users to view detailed statistics such as average task completion time, user activity, and project efficiency.

### **Attachments**
- **File Uploads**: Users can upload, view, and delete files related to tasks.
- **Comment on Files**: Users can comment on attached files to provide additional context or feedback.

## **Structured Folder of the Software** 

memolist-software/
 index.html               # Main HTML file
 README.md                # Documentation for the project
 package.json             # If using npm for dependencies
 .gitignore               # Files to be ignored by git
   assets/                # Folder to hold images, fonts, and other static assets
      images/
   css/                   # Folder to hold CSS files
      style.css           # Main stylesheet
   js/                    # Folder to hold JavaScript files
      main.js             # Main JavaScript file
   components/            # Reusable HTML components (like header, footer)
      header.html
      footer.html
   dashboard/             # initiation design
   views/                 # Specific HTML views/pages
      project.html        # Project-related UI
      task.html           # Task-related UI
   user.html              # User-related UI
   backend/               # Optionally, if planning to include backend logic
      api.js              # Example API implementation (if needed)

---

## **Installation**

### **Requirements**
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Local development environment (like VSCode) or a web server (optional)

### **Steps to Run Locally**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/EkaAkbarPermatasari/memolist.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd memolist
   ```
3. **Open the `index.html` file** in your web browser by double-clicking or using the "Open with" feature.
4. If you want to serve the project locally using a web server, you can install a simple HTTP server:
   ```bash
   # Install http-server if you don’t have it
   npm install -g http-server

   # Run the server
   http-server
   ```

5. Open `http://localhost:8080` (or whichever port is shown) in your browser to view the project.

---

## **Usage**

### **Project & Task Management**
- Go to the **Features** page to view and create tasks.
- Create and manage projects, assign users, and track progress.
- Assign tasks to users or teams, update task status, and set deadlines.

### **Login**
- Users can log in using the **Login** page, and role-based access will be provided accordingly (admin, user, team member, etc.).

### **Notifications**
- Notifications will be triggered when tasks are due or newly assigned.

### **Analytics**
- Visit the **Analytics** section to generate reports and view task completion statistics.

### **File Attachments**
- Upload and manage files related to tasks. Comment on attached files to provide feedback or additional context.

---

## **Contributing**

### **1. Fork this repository**:
Click the **Fork** button on the top-right corner of this page to create a copy of this repository to your GitHub account.

### **2. Clone your fork**:
```bash
git clone https://github.com/yourusername/memo.list.git
```

### **3. Create a branch**:
```bash
git checkout -b feature/new-feature
```

### **4. Commit your changes**:
```bash
git commit -m "Add a new feature"
```

### **5. Push to your fork**:
```bash
git push origin feature/new-feature
```

### **6. Submit a pull request**:
Go to the original repository on GitHub and open a pull request.

---

## **License**

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
