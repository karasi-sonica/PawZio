import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    provider: "postgresql",
    url: "postgresql://PawZio_User:pawzio123@localhost:5432/PawZio?schema=public",
  },
});
