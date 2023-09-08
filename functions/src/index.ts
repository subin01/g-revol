import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";

setGlobalOptions({ maxInstances: 2 });

import { onClerkUserCreated } from "./onClerkUserCreated";

export const clerkUserCreated = onRequest(
  { cors: true, minInstances: 0, maxInstances: 2 },
  onClerkUserCreated
);
