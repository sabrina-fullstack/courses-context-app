import { useParams } from "react-router-dom";
import { courses } from "../../data/course";
import { useFavorites } from "../../contexts/FavoritesContext";
import styles from "./CourseDetails.module.css";

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((item) => item.id === courseId);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img src={course.image} alt={course.title} className={styles.image} />
        <div className={styles.content}>
          <span className={styles.level}>{course.level}</span>
          <h1>{course.title}</h1>
          <p className={styles.duration}>⏱ {course.duration}</p>
          <p className={styles.description}>{course.description}</p>
          <button
            className={
              isFavorite(course.id) ? styles.buttonRemove : styles.button
            }
            onClick={() =>
              isFavorite(course.id)
                ? removeFavorite(course.id)
                : addFavorite(course)
            }
          >
            {isFavorite(course.id)
              ? "❤️ Retirer des favoris"
              : "🤍 Ajouter aux favoris"}
          </button>
        </div>
      </div>
    </main>
  );
}
