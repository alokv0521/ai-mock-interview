import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema'
const sql = neon('postgresql://genie_owner:3IVBdNsEX0Sm@ep-crimson-sunset-a8yp1fhj.eastus2.azure.neon.tech/genie?sslmode=require');
// const sql=neon(process.env.DATABASE_URL);
export const db = drizzle( sql, {schema} );