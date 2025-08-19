import WebResponse from "@/lib/type/web.type";
import { prismaClient } from "@/utils/prisma";
import { getUserDataFromToken } from "@/utils/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const userData = getUserDataFromToken(token!);

  const user = await prismaClient.user.findFirst({
    where: {
      username: userData?.username,
    },
  });

  if (user == null) {
    return NextResponse.json({
      status: false,
      message: "User tidak ditemukan",
    });
  }

  return NextResponse.json({
    status: true,
    data: {
      username: user?.username,
      nama: user?.nama,
      jabatan: user?.jabatan,
      role: user?.role,
    },
  });
}
export async function PUT() {}
export async function DELETE(
  req: Request
): Promise<NextResponse<WebResponse<boolean>>> {
  const token = req.headers.get("Authorization");

  prismaClient.user.update({
    where: { token: token! },
    data: {
      token: null,
    },
  });

  return NextResponse.json(
    {
      status: true,
      message: "Logout Berhasil",
    },
    { status: 200 }
  );
}
