COMP 3005: Assignment(3) - Q(1)
Keaton Lee (101229189)

DEMONSTRATION VIDEO: <ADD LINK>

STEPS TO COMPILE AND RUN APPLICATION

1. POPULATE DATABASE
    a. Open pgAdmin 4
        - Begin by opening pgAdmin 4.
        - This application will likely be opened from your applications menu or desktop shortcut.
        - Once opened, the pgAdmin 4 dashboard will be visible.
    b. Connect to a PostgreSQL Server
        - In the Browser pane on the left side, click on the "Servers" dropdown menu.
        - Select the "PostgreSQL" server from this dropdown.
        - Enter your password as prompted then click "OK" to continue.
    c. Create a New Database
        - Right click on "Databases" under the "PostgreSQL" server.
        - Select "Create" > "Database...".
        - Enter a name for the database. For the name, use "COMP3005A3".
            - Note that another name can be used, but the following steps will assume the database is named "COMP3005A3".
        - Click "Save" to create the database.
    d. Open Query Tool
        - After creating the database, navigate to it by expanding the "Databases" tree.
        - Navigate to the "COMP3005A3" database and click on it to select it. 
        - Right-click on the "COMP3005A3" database and select "Query Tool" to open the SQL editor.
    e. Copy SQL Commands
        - Copy the SQL commands location in "DatabaseScripts/students.sql".
            - Under the "DatabaseScripts" directory, open the file "students.sql".
            - Select and copy all contents of the file.
        - In the Query Tool, paste the copied SQL commands to create the student table and insert the provided data.
    f. Execute the Query
        - After pasting the SQL code, the query can be run by clicking the "Execute/Refresh" button.
        - This will run the entered SQL commands and populate the database accordingly.
2. START APPLICATION
    a. Ensure Prerequistes are Installed
        - Install Node.js (if not already installed).
            - Node.js can be downloaded from nodejs.org.
        - Install the "pg" module in the "ApplicationCode" directory (if not already installed).
            - Navigate to the "ApplicationCode" directory: `cd ApplicationCode`.
            - Install the "pg" module: `npm install pg`.
    b. Update the `Client` Configuration Object.
        - Under the "ApplicationCode" directory, open the file "application.js".
        - Update the database connection parameters. This includes `user`, `password`, `host`, `port`, and `database` name.
            - Replace the values on lines 7 to 11 with your actual database connection parameters.
        - Save the file after making these updates.
    c. Run the application.
        - Navigate to the "ApplicationCode" directory: `cd ApplicationCode`.
        - Use Node.js to start the application: `node application.js`
3. USE APPLICATION
    a. View All Students
        - To view all students in the database, enter `1` when prompted.
        - This executes the `getAllStudents()` function, which retrieves and displays all records from the `students` table.
    b. Add a Student
        - To add a new student to the database, enter `2` when prompted.
        - You will then be prompted to enter the first name, last name, email, and enrollment date of the new student, separated by commas.
        - This executes the `addStudent()` function, which inserts the new student record into the students table.
    c. Update a Student's Email:
        - To update a student's email in the database, enter `3` when prompted.
        - You will then be prompted to enter the student's ID and the new email, separated by a comma.
        - This executes the `updateStudentEmail()` function, which updates the email address for a student with the specified student ID.
    d. Delete a Student
        - To delete a student from the database, enter `4` when prompted.
        - You will then be prompted to enter the student ID of the student you wish to delete.
        - This executes the `deleteStudent()` function, which deletes the record of the student with the specified student ID.
    e. Exit the Application
        - To exit the application, enter `5` when prompted.
        - This closes the database connection and terminates the application.
