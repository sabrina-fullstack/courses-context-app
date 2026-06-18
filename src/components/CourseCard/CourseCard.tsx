import type { Course } from "../../data/course";
import { NavLink } from "react-router-dom";
import styles from "./CourseCard.module.css";
interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className={styles.card}>
      <img src={course.image} alt={course.title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.level}>{course.level}</span>
        <h3>{course.title}</h3>
        <p className={styles.duration}>⏱ {course.duration}</p>
        <NavLink className={styles.link} to={`/courses/${course.id}`}>
          Voir le cours →
        </NavLink>
      </div>
    </div>
  );
}
