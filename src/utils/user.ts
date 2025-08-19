import { cookies } from "next/headers";
import { prismaClient } from "./prisma";
import { User } from "@/generated/prisma";
import { DecodedJwtPayload } from "@/lib/type/user.type";

export async function getUser(): Promise<User | null> {
  const cookie = await cookies();
  const tokenWithBearer = cookie.get("token")?.value;

  if (!tokenWithBearer) {
    return null;
  }

  if (!tokenWithBearer.startsWith("Bearer ")) {
    return null;
  }
  const token = tokenWithBearer.substring(7);

  const user = await prismaClient.user.findFirst({
    where: {
      token: token,
    },
  });

  return user;
}

export function getUserDataFromToken(token: string): DecodedJwtPayload | null {
  try {
    if (!token) {
      return null;
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      console.error("Format token tidak valid.");
      return null;
    }

    const payloadBase64Url = parts[1];

    const payloadJson = Buffer.from(payloadBase64Url, "base64").toString(
      "utf-8"
    );

    const payload = JSON.parse(payloadJson) as DecodedJwtPayload;

    return payload;
  } catch (error) {
    console.error("Gagal mendekode token:");
    return null;
  }
}
