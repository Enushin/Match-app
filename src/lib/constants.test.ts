import { describe, it, expect } from "vitest";
import {
  APP_NAME,
  USER_ROLE_LABELS,
  MATCH_STATUS_LABELS,
} from "./constants";

describe("constants", () => {
  it("APP_NAME is defined", () => {
    expect(APP_NAME).toBe("Match-app");
  });

  it("USER_ROLE_LABELS covers all roles", () => {
    expect(Object.keys(USER_ROLE_LABELS)).toEqual([
      "freelancer",
      "consultant",
      "business_owner",
    ]);
  });

  it("MATCH_STATUS_LABELS covers all statuses", () => {
    expect(Object.keys(MATCH_STATUS_LABELS)).toEqual([
      "pending",
      "accepted",
      "declined",
    ]);
  });

  it("role labels are Japanese", () => {
    expect(USER_ROLE_LABELS.freelancer).toBe("フリーランス");
    expect(USER_ROLE_LABELS.consultant).toBe("コンサルタント");
    expect(USER_ROLE_LABELS.business_owner).toBe("経営者");
  });
});
