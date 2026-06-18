// src/contexts/FavoritesContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import type { Course } from "../data/course";

// 1. Interface (= contrat TypeScript)
interface FavoritesContextType {
  favorites: Course[];
  addFavorite: (course: Course) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

// 2. Création du Context (= canal de communication)
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

// 3. Provider (= Fournisseur — diffuse les données)
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Course[]>([]);

  const addFavorite = (course: Course): void => {
    setFavorites((prev) => [...prev, course]);
  };

  const removeFavorite = (id: string): void => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some((c) => c.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// 4. Custom Hook (= Crochet Personnalisé)
export function useFavorites(): FavoritesContextType {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites doit être dans un FavoritesProvider");
  return ctx;
}
