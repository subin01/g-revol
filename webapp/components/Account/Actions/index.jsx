"use client";
import Link from "next/link";

import {
  db,
  collection,
  doc,
  setDoc,
  deleteField,
  useCollection,
  useDocumentData,
} from "@/firebase/init";

import styles from "./index.module.scss";

export default function Actions({ uid }) {
  // const [value, loading, error] = useCollection(collection(db, "goals"), {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });

  const userDocRef = doc(db, "users", uid);

  // TODO: Use Store!!
  const [user, loading, error] = useDocumentData(userDocRef);

  const actions = Object.keys(user?.actions || {});

  async function handleStatusUpdateClick(aid, status) {
    // const actionRef = doc(db, "users", uid, "actions", aid);
    let updatedActionObj = { [aid]: { status: status } };

    if (status === "delete") {
      updatedActionObj = { [aid]: deleteField() };
      // TODO: Update Store!!
    }

    const res = await setDoc(
      userDocRef,
      { actions: updatedActionObj },
      { merge: true }
    );
    console.log(res);
  }

  return (
    <section className={styles.actions}>
      <pre>UID: {JSON.stringify(uid)}</pre>
      {error && (
        <div>
          <pre>Error: {JSON.stringify(error)}</pre>
          <a href="/account">Try again</a>
        </div>
      )}
      {loading && <span>Loading...</span>}

      <h2 className="h3">Your G Actions</h2>

      <ol>
        {actions &&
          actions.sort().map((k) => {
            let a = user.actions[k];
            return (
              <li
                key={k}
                className={
                  a.status === "completed" ? `${styles.completed}` : ""
                }
              >
                <div>
                  <span>{a.title}</span>
                  <span className={styles.status}>{a.status}</span>
                  <span>
                    {a.status === "completed" ? (
                      <button
                        className="button"
                        data-size="small"
                        title="Mark as in Progress"
                        onClick={() =>
                          handleStatusUpdateClick(a.aid, "in progress")
                        }
                      >
                        ►
                      </button>
                    ) : (
                      <button
                        className="button"
                        data-size="small"
                        title="Mark as Completed"
                        onClick={() =>
                          handleStatusUpdateClick(a.aid, "completed")
                        }
                      >
                        ✔
                      </button>
                    )}{" "}
                    <button
                      className="button"
                      data-size="small"
                      title="Remove Action"
                      onClick={() => handleStatusUpdateClick(a.aid, "delete")}
                    >
                      ✖
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
      </ol>

      {!actions.length ? (
        <p>
          No pledged G Actions! <br />
          You may find some <Link href="/challenges/c1">
            interesting ones
          </Link>{" "}
          under each challenges
        </p>
      ) : (
        <p className="my-4">
          You may find more <Link href="/challenges/c1">interesting ones</Link>{" "}
          under each challenges
        </p>
      )}
    </section>
  );
}
