import styles from "./Header.module.css";
import logoImg from "../../images/logo.png";
import Nav from "./Nav";
import Button from "../Button";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../hooks";
import { useTranslation } from "react-i18next";

function Header() {
  const { toggleTheme, theme } = useTheme();
  const { i18n } = useTranslation();
   const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang); 
  };

  return (
    <div className={styles.header}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <img src={logoImg} alt="logo image" className={styles.img} />
          <p>FinBiz</p>
        </div>
        <Nav />
        <div className={styles.headBtns}>
          <div className={styles.darkLang}>
            {theme === "dark" ? (
              <MdDarkMode onClick={toggleTheme} style={{ color: "white" }} />
            ) : (
              <MdOutlineDarkMode onClick={toggleTheme} />
            )}
            <div className={styles.lang} onClick={toggleLanguage}>
              {i18n.language === "en" ? "EN" : "AR"}
            </div>
          </div>
          <Button
            py={16}
            px={24}
            bgColor="var(--primary-color)"
            textColor="var(--mainText-color)"
            fontSize={16}
            fontWeight={600}
            rad={64}
            borderColor="var(--border-color)"
          >
            {t("nav.getStarted")}
          </Button>
        </div>
      </div>
      <div className={styles.break}></div>
    </div>
  );
}
export default Header;
