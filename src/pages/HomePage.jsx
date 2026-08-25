import reactRouterLogo from "../assets/example.svg";
import Teacher from "../sandbox/Teacher";
import Welcome from "../sandbox/Welcome";
import Greeting from "../sandbox/Greeting";
import Button from "../sandbox/Button";
import { course } from "../sandbox/Course";
import StudentCard from "../sandbox/StudentCard";
import CourseCard from "../sandbox/CourseCard";
import StudentList from "../sandbox/StudentList";
import NameChanger from "../sandbox/NameChanger";
import ProductList from "../sandbox/ProductList";
import FilteredProducts from "../sandbox/FilteredProducts";
import ProductDetails from "../sandbox/ProductDetails";

const publicLogoUrl = `${import.meta.env.BASE_URL}logo.webp`;

// *** Access *** //
// const student = {
//  name: "Anna",
//  email: "anna@example.com",
//  education: "Multimedia Design",
//};


// *** Shorthand Proporties *** //
const name = "Anna";
const age = 24;
const email = "anna@example.com";

const student = { name, age, email };



console.log(student);

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <p>Welcome to Laura</p>

        <article>
          <h2>Displaying images in React</h2>

          <h3>1. Import from src/assets</h3>
          <p>
            Import the image file at the top of your component. The image is
            bundled with your app and gets a unique filename for better caching.
          </p>
          <img src={reactRouterLogo} alt="Example SVG" className="img-small" />

          <h3>2. Public folder</h3>
          <p>
            Place the image in the /public folder and reference it by path. The
            file is served directly without any processing.
          </p>
          <img
            src={publicLogoUrl}
            alt="Favicon from public folder"
            className="img-small"
          />

          <h3>3. External URL</h3>
          <p>
            Use a full URL to load an image from the internet, just like in
            regular HTML.
          </p>
          <img
            src="https://picsum.photos/200"
            alt="Random external image"
            className="img-medium"
          />
        </article>
        <Teacher />
        <Welcome />
        <Greeting name="Anna" />
        <Greeting name="Peter" />
        <Greeting name="Sara" />
        <Button />
        <p>{course.title}</p>
        <p>{course.teacher}</p>
        <p>{course.duration} hours</p>
        <StudentCard student={student} />
        <CourseCard title="JavaScript" teacher="Anna" duration={5} />
        <StudentList />
        <NameChanger />
        <ProductList />
        <FilteredProducts />
        <ProductDetails productId={3} />
      </main>
    </>
  );
}
