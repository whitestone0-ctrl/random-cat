// ビルド時には環境変数が存在しない可能性があるため、
// ランタイムでのみチェックを行う
export const CAT_API_KEY = process.env.CAT_API_KEY || "";