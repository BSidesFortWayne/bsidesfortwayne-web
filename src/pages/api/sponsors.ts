export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
//import type { APIContext } from 'astro';
import { env } from "cloudflare:workers"

//const SponsorDB = env.DB; // Access the D1 database from environment variables
// Row definition
/*
type OrderRow = {
  id: id;
  name: string;
  url: string;
  logo_path: string;
  sponsorship_tier: string;
  draft_status: Boolean;
};
*/


export const GET: APIRoute = async (context) => {
  // Access the D1 binding named "DB" as defined in wrangler.jsonc

  try {
    // Execute a SQL query using prepared statements
    const { results } = await env.DB.prepare("SELECT * FROM sponsorship").all();

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
        error: (error as Error).message,
      }),
      { status: 500 }
    );
  }
};