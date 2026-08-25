
export default function CourseCard({ title, teacher, duration }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Lærer: {teacher}</p>
      <p>Varighed: {duration} timer</p>
    </article>
  );
}
