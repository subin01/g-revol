/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

setGlobalOptions({ maxInstances: 2 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const clerkUserCreated = onRequest(
  // { cors: true, minInstances: 0, maxInstances: 2 },
  async (request, response) => {
    logger.info("-----clerkUserCreated: ---", request);
    logger.info("-----clerkUserCreated: ---", request.body);
    logger.info("-----clerkUserCreated: ---", request.body.data);
    response.send("Hello from Firebase!");
  }
);
