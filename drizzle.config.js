import { defineConfig } from "drizzle-kit";
/** @type {import("drizzle-kit").config} */
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials:{
    url: 'postgresql://genie_owner:3IVBdNsEX0Sm@ep-crimson-sunset-a8yp1fhj.eastus2.azure.neon.tech/genie?sslmode=require'
  }
});