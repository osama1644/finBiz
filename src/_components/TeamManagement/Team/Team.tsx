import graph1 from "../../../images/analytics.png";
import graph2 from "../../../images/gg.png";
import { FaArrowUp } from "react-icons/fa6";
import img1 from "../../../images/team1.jpg";
import img2 from "../../../images/team2.jpg";
import img3 from "../../../images/team3.jpg";
import img4 from "../../../images/team4.jpg";
import img5 from "../../../images/team5.jpg";
import styles from "./Team.module.css";
import { useTranslation } from "react-i18next";
function Team() {
  const { t } = useTranslation();
  return (
    <div
      className={styles.data}
      style={{ direction: "ltr"}}
    >
      {/* box1 */}
      <div className={styles.graph1}>
        <h2>{t("team.simple_analytics_title")}</h2>
        <p>{t("team.simple_analytics_desc")}</p>
        <div className={styles.img1}>
          <div className={styles.imgContent}>
            <div className={styles.icon}>
              <FaArrowUp />
            </div>
            <p>14.12%</p>
          </div>
          <div>
            <img src={graph1} alt="" />
          </div>
        </div>
      </div>
      {/* box2 */}
      <div className={styles.graph2}>
        <h2>{t("team.boosting_business_title")}</h2>
        <p>{t("team.boosting_business_desc")}</p>
        <div>
          <img src={graph2} alt="" />
        </div>
      </div>

      <div className={styles.graph1}>
        <h2>{t("team.easy_collaboration_title")}</h2>
        <p>{t("team.easy_collaboration_desc")}</p>
        <div className={styles.img1}>
          <div className={styles.circles}>
            <div className={styles.cirle1}>
              <div className={styles.cirle2}>
                <div>
                  <img src={img1} alt="team member image" />
                  <img src={img2} alt="team member image" />
                  <img src={img3} alt="team member image" />
                  <img src={img4} alt="team member image" />
                  <img src={img5} alt="team member image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
