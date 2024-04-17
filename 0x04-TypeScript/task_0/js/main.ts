interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
}

const student1: Student = {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        location: 'New York'
};

const student2: Student = {
        firstName: 'Jane',
        lastName: 'Mbuvi',
        age: 21,
        location: 'Kenya'
};

const studentsList: Array<Student> = [student1, student2];

function creatTable() {
    const tableBody = document.getElementById('studentTable');
    
    // Clear previous content
    tableBody.innerHTML = '';

    // Iterate over studentsList and append rows to the table
    studentsList.forEach(Student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = Student.firstName;
        locationCell.textContent = Student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });
}

// Call the function to create the table
creatTable();
