import { useTranslation } from "react-i18next"
import Button from "../Button"
import styles from "./Hero.module.css"
function BookingInput() {
     const {t,i18n} =useTranslation()
  return (
    <div className={styles.inp} style={{direction: i18n.language === "ar" ? "ltr" : "ltr",}}>
      <input type="emil" name="" id="" placeholder={t("hero.emailPlaceholder")} />
      <div>
        <Button py={15} px={30} fontSize={18} fontWeight={700} textColor="var(--bookBtn-color)" bgColor="var(--bookBtnBg-color)" rad={100}>
          {t("hero.bookDemo")}
        </Button>
      </div>
    </div>
  )
}

export default BookingInput