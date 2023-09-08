export interface IResponse {
  error: boolean;
  message: string;
  errorField: string | null;
  res: string | null | unknown;
}

export interface ISuccessResponse {
  message?: string;
  errorField?: string | null;
  res?: string | unknown;
}
export interface IErrorResponse {
  message?: string;
  errorField?: string | null;
  res?: string | null;
}
