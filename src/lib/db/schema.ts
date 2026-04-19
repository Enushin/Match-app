import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  integer,
  boolean,
  jsonb,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";

// Enums
export const userRoleEnum = pgEnum("user_role", [
  "freelancer",
  "consultant",
  "business_owner",
]);

export const matchStatusEnum = pgEnum("match_status", [
  "pending",
  "accepted",
  "declined",
]);

export const projectStatusEnum = pgEnum("project_status", [
  "open",
  "closed",
  "in_progress",
]);

// Users
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  emailVerified: boolean("email_verified").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Profiles
export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" })
      .unique(),
    roles: jsonb("roles").$type<string[]>().notNull().default([]),
    title: varchar("title", { length: 200 }).default("").notNull(),
    bio: text("bio").default("").notNull(),
    skills: jsonb("skills").$type<string[]>().notNull().default([]),
    location: varchar("location", { length: 100 }),
    industry: varchar("industry", { length: 100 }),
    experienceYears: integer("experience_years"),
    portfolioUrl: text("portfolio_url"),
    hourlyRate: integer("hourly_rate"),
    availability: varchar("availability", { length: 50 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("profiles_user_id_idx").on(table.userId),
    index("profiles_skills_idx").using("gin", table.skills),
  ]
);

// Match Requests
export const matchRequests = pgTable(
  "match_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    fromUserId: uuid("from_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    toUserId: uuid("to_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    status: matchStatusEnum("status").default("pending").notNull(),
    message: text("message"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("match_from_user_idx").on(table.fromUserId),
    index("match_to_user_idx").on(table.toUserId),
    index("match_status_idx").on(table.status),
  ]
);

// Projects (案件掲示板)
export const projects = pgTable(
  "projects",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: uuid("owner_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 200 }).notNull(),
    description: text("description").notNull(),
    budgetMin: integer("budget_min"),
    budgetMax: integer("budget_max"),
    duration: varchar("duration", { length: 100 }),
    requiredSkills: jsonb("required_skills").$type<string[]>().notNull().default([]),
    status: projectStatusEnum("status").default("open").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("projects_owner_idx").on(table.ownerId),
    index("projects_status_idx").on(table.status),
    index("projects_skills_idx").using("gin", table.requiredSkills),
  ]
);

// Messages
export const messages = pgTable(
  "messages",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    matchId: uuid("match_id")
      .notNull()
      .references(() => matchRequests.id, { onDelete: "cascade" }),
    senderId: uuid("sender_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    content: text("content").notNull(),
    readAt: timestamp("read_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("messages_match_idx").on(table.matchId),
    index("messages_sender_idx").on(table.senderId),
    index("messages_created_idx").on(table.createdAt),
  ]
);

// Reviews
export const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    reviewerId: uuid("reviewer_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    revieweeId: uuid("reviewee_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    matchId: uuid("match_id").references(() => matchRequests.id),
    rating: integer("rating").notNull(),
    comment: text("comment"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("reviews_reviewee_idx").on(table.revieweeId),
  ]
);
