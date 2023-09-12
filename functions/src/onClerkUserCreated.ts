import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";

// import { IResponse } from "./types";
// import { SuccessResponse, ErrorResponse } from "./Response";
// import { checkAuthorization } from "./checkAuthorization";

initializeApp();
const db = getFirestore();

// export async function checkAuthorization(context: any) {
//   const uid = context.auth?.uid;
//   const email = context.auth?.email;
//   const ADMIN_EMAIL = "admin@player6cricket.com";

//   if (!uid || email !== ADMIN_EMAIL)
//     return ErrorResponse({ message: "Try re-login as Administrator!" });
//   return true;
// }

export async function onClerkUserCreated(req: any, res: any) {
  // checkAuthorization(context)

  logger.info("-----clerkUserCreated: ---", req.body.data);
  // const eventTypes = ["user.created", "email.created", "sm"]

  try {
    if (req.body?.object !== "event" || req.body?.type !== "user.created") {
      logger.info(
        "--- onClerkUserCreated ---",
        req.body?.object,
        req.body?.type
      );
      res.status(200).jsonp({ error: true, message: "Invalid event type" });
      return;
      // return ErrorResponse({ message: "Invalid event type" });
    }

    const data = req.body?.data || {};
    const userId = data?.id;
    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();

    if (doc.exists) {
      // return ErrorResponse({ message: "User exists!" });
      res.status(200).jsonp({ error: true, message: "User exists!" });
      return;
    }

    // prettier-ignore
    const sampleActions = {
      "a1" : {
        aid: "a",
        status: "assigned",
        title: "Sample Action",
        gid: 'g14',
        cid: 'c1',
        pid: 'p1'
      },
      "a2": {
        aid: "a2",
        status: "assigned",
        title: "Plant 10 Tress",
        gid: 'g14',
        pid: 'p1'
      }
    }

    const userData = {
      id: userId,
      uid: userId,
      source: "clerk",
      profile: data,
      actions: sampleActions,
    };
    const userRes = await userRef.set(userData, { merge: true });

    logger.info("--- onClerkUserCreated ---", userRes);

    // return SuccessResponse({ message: "User created!" });
    res.status(200).jsonp({ error: false, message: "User created!" });
    return;
  } catch (e) {
    // ErrorResponse({ res: String(e) });
    res.status(500).jsonp({ error: true, message: "Error" });
    return;
  }
}
