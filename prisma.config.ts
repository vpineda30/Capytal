import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "server/database/prisma/schema.prisma",
  migrations: {
    path: "server/database/prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
