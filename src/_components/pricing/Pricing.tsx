import Button from "../Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Price.module.css";
import { FaCheck } from "react-icons/fa6";
import { CardsData } from "../../data";
import { useTranslation } from "react-i18next";
const svg = (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M11.6667 3.33331C12.219 3.33331 12.6667 3.78103 12.6667 4.33331C12.6667 4.8856 12.219 5.33331 11.6667 5.33331C11.1144 5.33331 10.6667 4.8856 10.6667 4.33331C10.6667 3.78103 11.1144 3.33331 11.6667 3.33331Z"
      stroke="var(--headingBtntext-color)"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.84949 7.42925C1.18072 8.17618 1.16633 9.30305 1.78011 10.0958C2.99807 11.6688 4.33116 13.0019 5.90422 14.2198C6.69693 14.8336 7.8238 14.8192 8.57073 14.1505C10.5986 12.3348 12.4557 10.4372 14.2479 8.35191C14.4251 8.14578 14.5359 7.89311 14.5608 7.62238C14.6708 6.4253 14.8968 2.97643 13.9602 2.03981C13.0235 1.10319 9.57467 1.32916 8.3776 1.43915C8.10687 1.46403 7.8542 1.57487 7.648 1.75205C5.56275 3.54429 3.66521 5.40139 1.84949 7.42925Z"
      stroke="var(--headingBtntext-color)"
    />
    <path
      d="M4.66667 9.33331L6.66667 11.3333"
      stroke="var(--headingBtntext-color)"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function Pricing() {
const {t} =useTranslation()
  return (
    <div className={styles.pricing}>
      <SectionHeading
        svg={svg}
        h1={t("pricing.find_plan")}
        btnTitle={t("pricing.heading_btn")}
        p={t("pricing.description")}
      />
      <div className={styles.cards}>
        {CardsData.map((card, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.plan}>
              <h2 style={{ color: card.planColor }}>{t(card.planContent)}</h2>
              <p style={{ color: card.DescriptionColor }}>
                {t(card.DescriptionContent)}
              </p>
            </div>

            <div className={styles.planPrice}>
              <h2 style={{ color: card.priceColor }}>{t(card.price)}</h2>
              <span style={{ color: card.spanColor }}>{t("pricing.month")}</span>
            </div>

            <ul className={styles.adventages}>
              {card.adventages.map((adv, i) => (
                <li key={i}>
                  <FaCheck
                    style={{ color: card.iconColor }}
                    className={styles.icon}
                  />
                  <p style={{ color: card.iconColor }}>{t(adv)}</p>
                </li>
              ))}
            </ul>

            <div className={styles.btn}>
              <Button
                px={15}
                py={20}
                textColor={card.buttonColor}
                bgColor={card.buttonBgColor}
                borderColor="#3B3B3B"
                fontWeight={500}
                fontSize={16}
                rad={64}
              >
                {t(card.buttonContent)}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
