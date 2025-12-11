import OptimizeExpense from "./OptimizeExpense/OptimizeExpense";
import styles from "./Team/Team.module.css"
import Team from "./Team/Team";

function TeamManagement() {
  return (
    <div className={styles.management}>
      <Team />
      <OptimizeExpense />
    </div>
  );
}

export default TeamManagement;
