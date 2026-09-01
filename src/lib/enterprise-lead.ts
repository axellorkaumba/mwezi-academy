export interface EnterpriseLeadState {
  status: "idle" | "error" | "success";
  errors: Record<string, string>;
}

export const initialEnterpriseLeadState: EnterpriseLeadState = {
  status: "idle",
  errors: {},
};
