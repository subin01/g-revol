"use client";

import { db } from "@/firebase/init";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Listing() {
  const [value, loading, error] = useCollection(collection(db, "goals"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <div>
          Collection: <br />
          {value.docs.map((doc) => (
            <pre key={doc.id}>{JSON.stringify(doc.data())}, </pre>
          ))}
        </div>
      )}
    </div>
  );
}
