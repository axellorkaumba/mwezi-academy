export interface EnrollmentState {
  status: "idle" | "error" | "success";
  errors: Record<string, string>;
}

export const initialEnrollmentState: EnrollmentState = {
  status: "idle",
  errors: {},
};
