"use client";

import { collection, doc, setDoc } from "firebase/firestore";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";

import { db } from "@/firebase/init";
import styles from "./index.module.scss";

export default function Actions({ uid, displayName }) {
  // const [value, loading, error] = useCollection(collection(db, "goals"), {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });

  const userDocRef = doc(db, "users", uid);
  const [user, loading, error] = useDocumentData(userDocRef);

  async function handleStatusUpdateClick(aid, status) {
    // const actionRef = doc(db, "users", uid, "actions", aid);
    const actionObj = { [aid]: { status: status } };
    const res = await setDoc(
      userDocRef,
      { actions: actionObj },
      { merge: true }
    );
    console.log(res);
  }

  return (
    <section className={styles.actions}>
      <pre>
        UID: {JSON.stringify(uid)}, {displayName}
      </pre>
      {error && (
        <div>
          <pre>Error: {JSON.stringify(error)}</pre>
          <a href=".">Try again</a>
        </div>
      )}
      {loading && <span>Loading...</span>}
      <hr />
      <h2 className="h3">Actions</h2>

      <ol>
        {user &&
          user.actions &&
          Object.values(user.actions).map((a) => (
            <li key={a.aid}>
              <div>
                {/* <span>{a.aid}</span> */}
                <span>{a.title}</span> -{" "}
                <span className={styles.status}>{a.status}</span>
                {a.status === "completed" ? (
                  <button
                    className="button"
                    data-size="small"
                    onClick={() =>
                      handleStatusUpdateClick(a.aid, "in progress")
                    }
                  >
                    Mark as In Progress
                  </button>
                ) : (
                  <button
                    className="button"
                    data-size="small"
                    onClick={() => handleStatusUpdateClick(a.aid, "completed")}
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </li>
          ))}
      </ol>
    </section>
  );
}
