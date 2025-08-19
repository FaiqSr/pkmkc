import { Staff } from "@/lib/type/staff.type";
import WebResponse from "@/lib/type/web.type";
import { prismaClient } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
): Promise<NextResponse<WebResponse<Staff[]>>> {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? "1";
  const size = searchParams.get("size") ?? "10";

  const pageInt = parseInt(page, 10);
  const pageSizeInt = parseInt(size, 10);

  const skip = (pageInt - 1) * pageSizeInt;

  const staff = await prismaClient.user.findMany({
    skip: skip,
    take: pageSizeInt,
    orderBy: {
      created_at: "desc",
    },
  });

  const totalItems = await prismaClient.user.count();
  const totalPages = Math.ceil(totalItems / pageSizeInt);

  return NextResponse.json({
    status: true,
    message: "Berhasil mengambil data staff",
    data: staff as Staff[],
    pagination: {
      page: pageInt,
      pageSize: pageSizeInt,
      totalPages: totalPages,
      totalItems: totalItems,
    },
  });
}
