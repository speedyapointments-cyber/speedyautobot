export type Role = "customer" | "mechanic" | "shop";

export const ROLE_KEY = "speedy.role.v1";

export const ROLE_LABEL: Record<Role, string> = {
  customer: "Customer",
  mechanic: "Mobile mechanic",
  shop: "Shop owner",
};
