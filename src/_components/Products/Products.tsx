import { useProducts } from "../../hooks";
import type { Product } from "../../types";
import styles from "./Products.module.css";

function Products() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading products</div>;

  return (
    <div className={styles.container}>
      {data?.map((prod: Product) => (
        <div key={prod.id} className={styles.card}>
          <img src={prod.image} alt={prod.title} className={styles.image} />
          <h3 className={styles.title}>{prod.title}</h3>
          <p className={styles.price}>${prod.price}</p>
          <p className={styles.category}>{prod.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
