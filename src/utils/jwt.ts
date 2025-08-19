import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function validateToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    return null;
  }
}
