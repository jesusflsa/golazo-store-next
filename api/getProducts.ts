import { db } from "@vercel/postgres";

async function main() {
    const client = db.connect()
}