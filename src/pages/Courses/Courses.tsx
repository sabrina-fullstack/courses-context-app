import { useState, useEffect } from "react";
import { courses as coursesData, type Course } from "../../data/course";
import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./Courses.module.css";
export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        <h1>Courses</h1>

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}
