export interface UniversityLeadState {
  status: "idle" | "error" | "success";
  errors: Record<string, string>;
}

export const initialUniversityLeadState: UniversityLeadState = {
  status: "idle",
  errors: {},
};
