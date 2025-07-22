import { useScrollAnimation } from "@/shared/lib/hooks/useScrollAnimation";

import styles from "./Concept.module.scss";
import { WebpImage } from "@/shared/ui/WebpImage";
import { images } from "@/shared/lib/images";

export const Concept = () => {
  const { ref, classes } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`${styles.root} container ${classes}`}
      id="concept"
    >
      <div className={styles.info}>
        <h3 className={styles.title}>CONCEPT</h3>
        <p className={styles.description}>
          The project is inspired by a virtual real estate vision in the
          metaverse — where each resident owns a custom apartment with
          interactive layers and financial mechanics.
          <br />
          <br />
          We found the right mix of visual style, interior design, and
          NFT-native spirit — isometric crypto rooms that evolve into a full
          crypto apartment inside your digital home.
        </p>
      </div>
      <AnimatedRoom />
    </section>
  );
};

const AnimatedRoom = () => (
  <div className={styles.room}>
    <WebpImage src={images.main.concept["1"]} alt={"concept-1"} />
    <WebpImage src={images.main.concept["2"]} alt={"concept-2"} />
    <WebpImage src={images.main.concept["3"]} alt={"concept-3"} />
    <WebpImage src={images.main.concept["4"]} alt={"concept-4"} />
    <WebpImage src={images.main.concept["5"]} alt={"concept-5"} />
    <WebpImage src={images.main.concept["6"]} alt={"concept-6"} />
    <WebpImage src={images.main.concept["7"]} alt={"concept-7"} />
    <WebpImage src={images.main.concept["8"]} alt={"concept-8"} />
  </div>
);
