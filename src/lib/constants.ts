export const APP_NAME = "Match-app";
export const APP_DESCRIPTION =
  "フリーランス・コンサルタント・経営者をつなぐ事業マッチングプラットフォーム";

export const USER_ROLE_LABELS: Record<string, string> = {
  freelancer: "フリーランス",
  consultant: "コンサルタント",
  business_owner: "経営者",
} as const;

export const MATCH_STATUS_LABELS: Record<string, string> = {
  pending: "承認待ち",
  accepted: "マッチ成立",
  declined: "辞退",
} as const;
