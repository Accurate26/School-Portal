const students = [
{
  studentId: "STD001",
  password: "Ahmed@123",
  matricNo: "CSC/2024/001",
  surname: "Bello",
  firstName: "Ahmed",
  middleName: "Ibrahim",
  gender: "Male",
  age: 21,
  dateOfBirth: "2004-03-15",
  email: "ahmed.bello@student.edu.ng",
  phone: "08031234567",
  stateOfOrigin: "Kano",
  lga: "Nassarawa",
  address: "12 Emir Road, Kano",
  faculty: "Science",
  department: "Computer Science",
  level: "300",
  session: "2025/2026",
  yearOfAdmission: 2024,
  passport: "https://randomuser.me/api/portraits/men/1.jpg",
  cgpa: 4.35,

  courses: [
    {code:"CSC301", title:"Database Systems", unit:3, score:78, grade:"A"},
    {code:"CSC303", title:"Computer Networks", unit:3, score:72, grade:"A"},
    {code:"CSC305", title:"Software Engineering", unit:2, score:68, grade:"B"},
    {code:"CSC307", title:"Artificial Intelligence", unit:3, score:81, grade:"A"},
    {code:"GST301", title:"Entrepreneurship", unit:2, score:64, grade:"B"}
  ]
},

{
  studentId: "STD002",
  password: "Aisha@123",
  matricNo: "CSC/2024/002",
  surname: "Ibrahim",
  firstName: "Aisha",
  middleName: "Usman",
  gender: "Female",
  age: 20,
  dateOfBirth: "2005-01-12",
  email: "aisha.ibrahim@student.edu.ng",
  phone: "08042345678",
  stateOfOrigin: "Kaduna",
  lga: "Zaria",
  address: "5 Ahmadu Bello Way, Zaria",
  faculty: "Science",
  department: "Computer Science",
  level: "300",
  session: "2025/2026",
  yearOfAdmission: 2024,
  passport: "https://randomuser.me/api/portraits/women/2.jpg",
  cgpa: 4.61,

  courses: [
    {code:"CSC301", title:"Database Systems", unit:3, score:85, grade:"A"},
    {code:"CSC303", title:"Computer Networks", unit:3, score:77, grade:"A"},
    {code:"CSC305", title:"Software Engineering", unit:2, score:70, grade:"A"},
    {code:"CSC307", title:"Artificial Intelligence", unit:3, score:66, grade:"B"},
    {code:"GST301", title:"Entrepreneurship", unit:2, score:74, grade:"A"}
  ]
},

{
  studentId: "STD003",
  password: "David@123",
  matricNo: "MCB/2024/003",
  surname: "Okafor",
  firstName: "David",
  middleName: "Chukwuemeka",
  gender: "Male",
  age: 22,
  dateOfBirth: "2003-06-20",
  email: "david.okafor@student.edu.ng",
  phone: "08053456789",
  stateOfOrigin: "Anambra",
  lga: "Awka South",
  address: "18 Zik Avenue, Awka",
  faculty: "Science",
  department: "Microbiology",
  level: "400",
  session: "2025/2026",
  yearOfAdmission: 2023,
  passport: "https://randomuser.me/api/portraits/men/3.jpg",
  cgpa: 4.12,

  courses: [
    {code:"MCB401", title:"Medical Microbiology", unit:3, score:82, grade:"A"},
    {code:"MCB403", title:"Immunology", unit:2, score:79, grade:"A"},
    {code:"MCB405", title:"Virology", unit:3, score:65, grade:"B"},
    {code:"MCB407", title:"Parasitology", unit:2, score:73, grade:"A"},
    {code:"MCB409", title:"Mycology", unit:2, score:69, grade:"B"}
  ]
},

{
  studentId: "STD004",
  password: "Fatimah@123",
  matricNo: "MCB/2024/004",
  surname: "Yusuf",
  firstName: "Fatimah",
  middleName: "Abdullahi",
  gender: "Female",
  age: 21,
  dateOfBirth: "2004-09-11",
  email: "fatimah.yusuf@student.edu.ng",
  phone: "08064567890",
  stateOfOrigin: "Kwara",
  lga: "Ilorin West",
  address: "22 Unity Road, Ilorin",
  faculty: "Science",
  department: "Microbiology",
  level: "400",
  session: "2025/2026",
  yearOfAdmission: 2023,
  passport: "https://randomuser.me/api/portraits/women/4.jpg",
  cgpa: 4.74,

  courses: [
    {code:"MCB401", title:"Medical Microbiology", unit:3, score:76, grade:"A"},
    {code:"MCB403", title:"Immunology", unit:2, score:81, grade:"A"},
    {code:"MCB405", title:"Virology", unit:3, score:75, grade:"A"},
    {code:"MCB407", title:"Parasitology", unit:2, score:62, grade:"B"},
    {code:"MCB409", title:"Mycology", unit:2, score:70, grade:"A"}
  ]
},

{
  studentId: "STD005",
  password: "Samuel@123",
  matricNo: "BIO/2024/005",
  surname: "Johnson",
  firstName: "Samuel",
  middleName: "Oluwaseun",
  gender: "Male",
  age: 23,
  dateOfBirth: "2002-04-05",
  email: "samuel.johnson@student.edu.ng",
  phone: "08075678901",
  stateOfOrigin: "Ogun",
  lga: "Abeokuta South",
  address: "10 Oke-Ilewo, Abeokuta",
  faculty: "Science",
  department: "Biology",
  level: "400",
  session: "2025/2026",
  yearOfAdmission: 2022,
  passport: "https://randomuser.me/api/portraits/men/5.jpg",
  cgpa: 3.98,

  courses: [
    {code:"BIO401", title:"Genetics", unit:3, score:84, grade:"A"},
    {code:"BIO403", title:"Ecology", unit:2, score:71, grade:"A"},
    {code:"BIO405", title:"Cell Biology", unit:3, score:63, grade:"B"},
    {code:"BIO407", title:"Evolution", unit:2, score:68, grade:"B"},
    {code:"BIO409", title:"Biotechnology", unit:3, score:77, grade:"A"}
  ]
}
];

localStorage.setItem("students", JSON.stringify(students));