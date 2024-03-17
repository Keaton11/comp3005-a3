// Imports the client from the dbClient.js file
const { client } = require('./dbClient');


/***** READLINE INTERFACE *****/
// Creates a readline interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// Wraps the readline.question method in a promise
function question(query) {
    return new Promise(resolve => readline.question(query, resolve));
}


/***** MAIN FUNCTION *****/
// Main function to start the application
// Connects to the database and starts the interactive prompt
async function main() {
    try {
        // Connects to the database
        await client.connect();
        // Calls function to start the interactive prompt
        interactivePrompt();
    } catch (err) {
        console.error('Failed to establish a connection', err.stack);
        client.end();
    }
}


/***** INTERACTIVE PROMPT *****/
// Displays a menu of options and prompts the user to select an option
// Calls appropriate function to perform an action based on the user's choice
async function interactivePrompt() {
    while (true) {
        const choice = await question(`Select an option:\n 1. getAllStudents()\n 2. addStudent()\n 3. updateStudentEmail()\n 4. deleteStudent()\n 5. Exit\nEnter your choice: `);
        // Calls the appropriate function based on the user's choice
        switch (choice.trim()) {
            case '1':
                await getAllStudents();
                break;
            case '2':
                await promptAddStudent();
                break;
            case '3':
                await promptUpdateStudentEmail();
                break;
            case '4':
                await promptDeleteStudent();
                break;
            case '5':
                // Ends the database connection and closes the readline interface
                console.log('Exiting application...');
                await client.end();
                readline.close();
                return;
            default:
                console.log('Invalid choice');
        }
    }
}


/***** PROMPT FUNCTIONS *****/
// Prompts the user to enter the details of a new student to add to the database
async function promptAddStudent() {
    const input = await question('Enter first name, last name, email, enrollment date (comma separated): ');
    try {
        const [first_name, last_name, email, enrollment_date] = input.split(',').map(item => item.trim());
        await addStudent(first_name, last_name, email, enrollment_date);
    } catch (err) {
        console.error('Invalid input:', err.stack);
    }
}
// Prompts the user to enter the student_id and new email address to update
async function promptUpdateStudentEmail() {
    const input = await question('Enter student ID and new email (comma separated): ');
    try {
        const [student_id, new_email] = input.split(',').map(item => item.trim());
        await updateStudentEmail(student_id, new_email);
    } catch (err) {
        console.error('Invalid input:', err.stack);
    }
}
// Prompts the user to enter the student_id to delete
async function promptDeleteStudent() {
    const student_id = await question('Enter student ID to delete: ');
    await deleteStudent(student_id);
}


/***** APPLICATION FUNCTIONS *****/
// Retrieves and displays all records from the students table.
async function getAllStudents() {
    try {
        const res = await client.query('SELECT * FROM students');
        console.log(res.rows);
    } catch (err) {
        console.error('Failed to fetch all students:', err.stack);
    }
}
// Inserts a new student record into the students table.
async function addStudent(first_name, last_name, email, enrollment_date) {
    try {
        const res = await client.query('INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, enrollment_date]);
        console.log((res.rowCount === 1) ? 'Student added successfully' : 'Student not added');
    } catch (err) {
        console.error('Failed to add student:', err.stack);
    }
}
// Updates the email address for a student with the specified student_id.
async function updateStudentEmail(student_id, new_email) {
    try {
        const res = await client.query('UPDATE students SET email = $1 WHERE student_id = $2', [new_email, student_id]);
        console.log((res.rowCount === 1) ? 'Student email updated successfully' : 'Student not found');
    } catch (err) {
        console.error('Failed to update student email:', err.stack);
    }
}
// Deletes the record of the student with the specified student_id.
async function deleteStudent(student_id) {
    try {
        const res = await client.query('DELETE FROM students WHERE student_id = $1', [student_id]);
        console.log((res.rowCount === 1) ? 'Student deleted successfully' : 'Student not found');
    } catch (err) {
        console.error('Failed to delete student:', err.stack);
    }
}


// Starts the application
main();