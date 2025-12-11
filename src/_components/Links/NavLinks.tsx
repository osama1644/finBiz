import styles from "./Links.module.css";
import { useTranslation } from "react-i18next";

function NavLinks() {
  const { t } = useTranslation(); 

  return (
    <div className={styles.links}>
      <div className={styles.link}>
        <ul>
          <li>{t("links.product")}</li>
          <li>{t("links.integration")}</li>
          <li>{t("links.demo")}</li>
          <li>{t("links.pricing")}</li>
          <li className={styles.last}>{t("links.login")}</li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
