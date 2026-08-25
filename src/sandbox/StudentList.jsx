// Opret et array med tre student objects
const students = [
  { id: 1, name: "Anna", education: "Multimedia Design" },
  { id: 2, name: "Peter", education: "Web Development" },
  { id: 3, name: "Sara", education: "Multimedia Design" },
];

// Vis navn og uddannelse på den første og anden studerende i JSX ved hjælp af deres index
export default function StudentList() {
  return (
    <>
      <h2>Student List</h2>
      <h3>{students[0].name}</h3>
      <p>{students[0].education}</p>
      <h3>{students[1].name}</h3>
      <p>{students[1].education}</p>
    </>
  );
}
