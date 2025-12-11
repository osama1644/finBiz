import { useTranslation } from "react-i18next";
import { AnalysisBoxes, Skeltons } from "../../data";
import Button from "../Button";
import styles from "./DataAnalysis.module.css";
import SingleChart from "./Chart";
function DataAnalysis() {
  const {t} =useTranslation()
  return (
    <div className={styles.DataAnalysis}>
      <div className={styles.analysis}>
        {/* upper Component */}
        <div className={styles.dataCards}>
          {AnalysisBoxes.map((box) => (
            <div className={styles.Card} key={box.id}>
              <div className={styles.cardContent}>
                <p>{t(box.title)}</p>
                <h2>{box.price}</h2>
              </div>
              <div className={styles.cardAnalysis}>
                <p style={{ color: box.secondSpanColor }}>
                  {box.increasedValue}
                </p>
                <div className={styles.skelton}>
                  <span
                    className={styles.span1}
                    style={{ backgroundColor: box.sapnColor }}
                  ></span>
                  <span
                    className={styles.span2}
                    style={{ backgroundColor: box.secondSpanColor }}
                  ></span>
                  <span
                    className={styles.span3}
                    style={{ backgroundColor: box.sapnColor }}
                  ></span>
                  <span
                    className={styles.span4}
                    style={{ backgroundColor: box.sapnColor }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* down component */}
        <div className={styles.charts}>
          {/* first box */}
          <div className={styles.balanceInfo}>
            <div className={styles.balance}>
              <p>{t("dashboard.total_balance")}</p>
              <h2>$350.0</h2>
              <Button
                px={72}
                py={10}
                textColor="var(--balanceBtn-color)"
                bgColor="var(--balanceBtnBg-color)"
                rad={8}
                fontSize={16}
                fontWeight={500}
              >
                {t("dashboard.transfer")}
              </Button>
            </div>
            <div className={styles.income}>
              <p>{t("dashboard.total_income")}</p>
              <h2>$320.0</h2>
            </div>
            <div className={styles.expense}>
              <p>{t("dashboard.total_expense")}</p>
              <h2>$220.0</h2>
            </div>
          </div>
          {/* second box */}
          <div className={styles.mainChart}>
            <SingleChart />
          </div>
          {/* third box */}
          <div>
            <div className={styles.emploee}>
              {
                Skeltons.map(skelton=>(

              <div className={styles.box} key={skelton.id}>
                <p>{t(skelton.title)}</p>
                <div className={styles.skelton1} style={{backgroundColor:skelton.skelton1BG}}></div>
                <div className={styles.skelton2} style={{backgroundColor:skelton.skelton2BG}}></div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalysis;
