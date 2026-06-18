import { useFavorites } from "../../contexts/FavoritesContext";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <main className={styles.page}>
      <h1>Mes Favoris ❤️</h1>

      {favorites.length === 0 ? (
        <p className={styles.empty}>Aucun favori pour l'instant !</p>
      ) : (
        <div className={styles.grid}>
          {favorites.map((course) => (
            <div key={course.id} className={styles.card}>
              <h3>{course.title}</h3>
              <p>{course.level}</p>
              <p>{course.duration}</p>
              <button onClick={() => removeFavorite(course.id)}>
                ❤️ Retirer
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
