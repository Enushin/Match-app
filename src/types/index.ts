/** User roles in the platform */
export type UserRole = "freelancer" | "consultant" | "business_owner";

/** User profile */
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  title: string;
  bio: string;
  skills: string[];
  location: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/** Match status */
export type MatchStatus = "pending" | "accepted" | "declined";

/** Match request between users */
export interface MatchRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: MatchStatus;
  message: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/** AI match recommendation */
export interface AIMatchRecommendation {
  userId: string;
  score: number;
  reasons: string[];
}

/** Project listing */
export interface ProjectListing {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  budget: { min: number; max: number } | null;
  duration: string | null;
  requiredSkills: string[];
  status: "open" | "closed" | "in_progress";
  createdAt: Date;
  updatedAt: Date;
}
