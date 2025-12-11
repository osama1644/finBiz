import { useTranslation } from "react-i18next";
import Button from "../../Button";
import styles from "./Optimize.module.css";
const svg =(
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00317 6.97803L11.1963 6.99378M6.97955 13.2677L10.1244 13.2795M6.99136 10.1229L13.281 10.1465" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
<path d="M1.08208 6.90363C1.77596 3.99469 4.05783 1.7299 6.9719 1.05789C9.07641 0.572575 11.2647 0.580795 13.3655 1.08191C16.2744 1.77579 18.5392 4.05766 19.2112 6.97173C19.6965 9.07624 19.6883 11.2645 19.1872 13.3653C18.4933 16.2743 16.2115 18.539 13.2974 19.2111C11.1929 19.6964 9.00461 19.6881 6.90381 19.187C3.99486 18.4932 1.73007 16.2113 1.05806 13.2972C0.572743 11.1927 0.580963 9.00444 1.08208 6.90363Z" stroke="black" stroke-width="1.4"/>
</svg>

)
const svg2 =(
  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.79541 1.39771C2.79541 0.62897 2.16644 -2.74931e-08 1.3977 -6.10959e-08C0.628959 -9.46986e-08 -1.09947e-05 0.62897 -1.10284e-05 1.39771C-1.1062e-05 2.16645 0.628959 2.79542 1.3977 2.79542C2.16644 2.79542 2.79541 2.16645 2.79541 1.39771Z" fill="#A4A4A4"/>
<path d="M2.79541 11.1817C2.79541 10.4129 2.16644 9.78397 1.3977 9.78397C0.628958 9.78397 -1.14224e-05 10.4129 -1.1456e-05 11.1817C-1.14896e-05 11.9504 0.628958 12.5794 1.3977 12.5794C2.16644 12.5794 2.79541 11.9504 2.79541 11.1817Z" fill="#A4A4A4"/>
<path d="M2.79541 6.2897C2.79541 5.52096 2.16644 4.89199 1.3977 4.89199C0.628958 4.89199 -1.12086e-05 5.52096 -1.12422e-05 6.2897C-1.12758e-05 7.05844 0.628958 7.68741 1.3977 7.68741C2.16644 7.68741 2.79541 7.05844 2.79541 6.2897Z" fill="#A4A4A4"/>
</svg>

)
function OptimizeExpense() {
  const { t } = useTranslation();
  return (
    <div className={styles.optimize} style={{ direction: "ltr" }}>
      <div className={styles.box1}>
        <div className={styles.box1Content}>
          <h2>{t("accounting.realtime_title")}</h2>
          <p>{t("accounting.realtime_desc")}</p>
        </div>
        <div className={styles.invoce}>
          <div className={styles.inv1}>
            <h2>$3453.00</h2>
            <div className={styles.spans}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.inv2}>
            <h2>MonthlyInvoice</h2>
            <div className={styles.files}>
              <div className={styles.file}>
                <div className={styles.svg1}>{svg}</div>
                <div className={styles.content}>
                  <p>John Client_download.Pdf</p>
                  <div className={styles.fileSkelton}></div>
                </div>
                  <div className={styles.doted}>{svg2}</div>
              </div>
              <div className={styles.file}>
                <div className={styles.svg2}>{svg}</div>
                <div className={styles.content}>
                  <p>Michele Leos_download.Pdf</p>
                  <div className={styles.fileSkelton}></div>
                </div>
                  <div className={styles.doted}>{svg2}</div>
              </div>
              <div className={styles.file}>
                <div className={styles.svg3}>{svg}</div>
                <div className={styles.content}>
                  <p>John Smith_download.Pdf</p>
                  <div className={styles.fileSkelton}></div>
                </div>
                  <div className={styles.doted}>{svg2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <h2>{t("accounting.optimize_title")}</h2>
        <p>{t("accounting.optimize_desc")}</p>
        <Button
          py={19}
          px={10}
          rad={100}
          fontSize={18}
          textColor="var(--optimizeBtnText-color)"
          bgColor="var(--optimizeBtn-color)"
          fontWeight={600}
        >
          {t("accounting.explore")}
        </Button>
      </div>
    </div>
  );
}

export default OptimizeExpense;
