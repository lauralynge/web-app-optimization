const student = {
  name: "Anna",
  email: "anna@example.com",
  education: "Multimedia Design",
};

export default function StudentCard({ student }) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Education: {student.education}</p>
    </div>
  );
}

console.log(student.name);
console.log(student.email);
console.log(student.education);
