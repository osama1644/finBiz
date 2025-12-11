import img1 from "../../images/finance.png";
import Button from "../Button";
import styles from "./FinanceExperience.module.css";
import { useTranslation } from "react-i18next";

function FinanceExperience() {
  const { t } = useTranslation();

  return (
    <div className={styles.finances} style={{ direction: "ltr" }}>
      <div className={styles.experience}>
        <div className={styles.content}>
          <h2>{t("finance.heading")}</h2>
          <div className={styles.buutons}>
            <Button
              fontSize={18}
              fontWeight={500}
              textColor="#1D1C20"
              bgColor="#A3DC2F"
              px={10}
              py={19}
              rad={100}
            >
              {t("finance.requestDemo")}
            </Button>
            <Button
              fontSize={18}
              fontWeight={500}
              textColor="var(--experienceBtn-color)"
              bgColor="var(--experienceBtnBg-color)"
              px={10}
              py={19}
              rad={100}
            >
              {t("finance.watchVideo")}
            </Button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={img1} alt={t("finance.heading")} />
        </div>
      </div>
    </div>
  );
}

export default FinanceExperience;
