export interface AdminLoginState {
  status: "idle" | "error";
}

export const initialAdminLoginState: AdminLoginState = { status: "idle" };
