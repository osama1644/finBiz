import img1 from "../../images/finance.png";
import Button from "../Button";
import styles from "./FinanceExperience.module.css";
function FinanceExperience() {
  return (
    <div className={styles.finances} style={{direction:"ltr"}}>
      <div className={styles.experience}>
        <div className={styles.content}>
          <h2>Let’s Upgrade your finances experience by using FinBiz</h2>
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
              Request Demo
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
              Watch Video
            </Button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={img1} alt="finance experiences" />
        </div>
      </div>
    </div>
  );
}

export default FinanceExperience;
