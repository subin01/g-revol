import styles from "./index.module.scss";
import Link from "next/link";

export default function NftItem({
  nft,
  showThumb = true,
}: {
  nft: any;
  showThumb?: boolean;
}) {
  const size = showThumb ? "300/300" : "760/760";
  return (
    <article className={styles.nft}>
      <div className={styles.imageWrap}>
        <img
          className={styles.img}
          width="400"
          height="400"
          src={`${nft.image}${size}`}
        />
      </div>
      <h3 className="h5">{nft.title}</h3>
    </article>
  );
}
