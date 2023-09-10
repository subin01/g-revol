import styles from "./index.module.scss";
import Link from "next/link";

import {
  db,
  query,
  where,
  collection,
  doc,
  setDoc,
  useCollectionData,
  useDocumentData,
} from "@/firebase/init";

export default function Projects({ gid }) {
  let q;
  if (gid) {
    q = query(collection(db, "projects"), where("gid", "==", gid));
  } else {
    q = query(collection(db, "projects"));
  }

  const [data, loading, error] = useCollectionData(q);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error... {JSON.stringify(error)}</h1>;

  return (
    <section className={styles.goalDetails}>
      <h2>Projects</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
