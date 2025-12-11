import type { HeadeingSectionProps } from "../../types";
import Button from "../Button";
import styles from "./SectionHeading.module.css";
function SectionHeading({ btnTitle, svg, h1, p }: HeadeingSectionProps) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.btn}>
        <Button
          rad={32}
          py={8}
          px={12}
          textColor="var(--headingBtntext-color)"
          bgColor="var(--headingBtnBg-color)"
          fontSize={14}
          fontWeight={500}
          borderColor="#364C09"
        >
        {svg}
          <span>{btnTitle}</span>
        </Button>
      </div>
      <h2>{h1}</h2>
      <p>{p}</p>
    </div>
  );
}

export default SectionHeading;
