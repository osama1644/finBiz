import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css"
function HeroContent() {
    const {t} =useTranslation()
  
  return (
    <div className={styles.heroContent}>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
    </div>
  );
}

export default HeroContent;
