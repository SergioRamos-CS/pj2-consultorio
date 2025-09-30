import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();
  await client, connect();
  const result = await client.query(queryObject);
  await client.end();
  returm result;
}

export default {
  query: query,
};
