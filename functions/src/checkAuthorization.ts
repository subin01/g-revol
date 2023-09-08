import { ErrorResponse } from "./Response";

export async function checkAuthorization(context: any) {
  const uid = context.auth?.uid;
  const email = context.auth?.email;
  const ADMIN_EMAIL = "admin@player6cricket.com";

  if (!uid || email !== ADMIN_EMAIL)
    return ErrorResponse({ message: "Try re-login as Administrator!" });
  return true;
}
