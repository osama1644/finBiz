import { useTranslation } from "react-i18next";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.png";
import styles from "./Hero.module.css";
const heroTest = [img1, img2, img3, img4];
function HeroTestemonials() {
  const {t} =useTranslation()
  return (
    <div className={styles.review}>
      <div className={styles.img}>
        {heroTest.map((img, i) => (
          <img key={i} src={img} alt="testemonials" />
        ))}
      </div>
      <p>{t("hero.reviews")}</p>
    </div>
  );
}

export default HeroTestemonials;
