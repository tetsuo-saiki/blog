let domain = "https://blog-xi-ebon-61.vercel.app/";

switch (process.env.NEXT_PUBLIC_ENV) {
  case "development":
    domain = "localhost:3000";
    break;
  case "preview":
    domain = process.env.NEXT_PUBLIC_VERCEL_URL ?? domain;
    break;
  default:
}

const protocol =
  process.env.NEXT_PUBLIC_ENV === "development" ? "http://" : "https://";

export const publicUrl = `${protocol}${domain}`;
