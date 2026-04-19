import { describe, it, expect } from "vitest";
import {
  sampleUsers,
  sampleRecommendations,
  sampleMatches,
  sampleProjects,
} from "./sample";

describe("sample data integrity", () => {
  it("all users have required fields", () => {
    for (const user of sampleUsers) {
      expect(user.id).toBeTruthy();
      expect(user.name).toBeTruthy();
      expect(user.email).toContain("@");
      expect(user.roles.length).toBeGreaterThan(0);
      expect(user.skills.length).toBeGreaterThan(0);
    }
  });

  it("user roles are valid", () => {
    const validRoles = ["freelancer", "consultant", "business_owner"];
    for (const user of sampleUsers) {
      for (const role of user.roles) {
        expect(validRoles).toContain(role);
      }
    }
  });

  it("recommendations reference existing users", () => {
    const userIds = new Set(sampleUsers.map((u) => u.id));
    for (const rec of sampleRecommendations) {
      expect(userIds.has(rec.userId)).toBe(true);
      expect(rec.score).toBeGreaterThanOrEqual(0);
      expect(rec.score).toBeLessThanOrEqual(100);
      expect(rec.reasons.length).toBeGreaterThan(0);
    }
  });

  it("matches reference existing users", () => {
    const userIds = new Set(sampleUsers.map((u) => u.id));
    for (const match of sampleMatches) {
      expect(userIds.has(match.fromUserId)).toBe(true);
      expect(userIds.has(match.toUserId)).toBe(true);
      expect(["pending", "accepted", "declined"]).toContain(match.status);
    }
  });

  it("projects reference existing users as owners", () => {
    const userIds = new Set(sampleUsers.map((u) => u.id));
    for (const project of sampleProjects) {
      expect(userIds.has(project.ownerId)).toBe(true);
      expect(project.requiredSkills.length).toBeGreaterThan(0);
      expect(["open", "closed", "in_progress"]).toContain(project.status);
    }
  });

  it("no duplicate user IDs", () => {
    const ids = sampleUsers.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("no duplicate user emails", () => {
    const emails = sampleUsers.map((u) => u.email);
    expect(new Set(emails).size).toBe(emails.length);
  });
});
