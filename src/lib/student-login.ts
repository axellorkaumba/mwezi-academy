export interface StudentLoginState {
  status: "idle" | "error";
}

export const initialStudentLoginState: StudentLoginState = { status: "idle" };
