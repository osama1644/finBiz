import { useQuery } from "@tanstack/react-query";
import type { PostsData, Product } from "./types";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const usePosts = () => {
  return useQuery<PostsData>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) throw new Error("Error fetching posts");
      return res.json();
    },
  });
};
export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Error fetching posts");
      return res.json();
    },
  });
};

export function useTheme(){
  const context =useContext(ThemeContext)
  if(!context){
    throw new Error("context is not a function")
  }
  return context
}