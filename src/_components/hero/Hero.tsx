import HeroBtn from "./HeroBtn";
import styles from "./Hero.module.css"
import HeroContent from "./HeroContent";
import BookingInput from "./BookingInput";
import HeroTestemonials from "./HeroTestemonials";
function Hero() {
  return (
    <div className={styles.hero}  >
    <HeroBtn />
    <HeroContent />
    <BookingInput />
    <HeroTestemonials />
    </div>
  );
}

export default Hero;
