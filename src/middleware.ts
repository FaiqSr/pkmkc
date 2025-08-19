import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateToken } from "./utils/jwt";

const publicRoutes = [
  "/api/user/login",
  "/api/user/register",
  "/login",
  "/register",
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    if (path.startsWith("/api/")) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Authentication failed: No token provided",
        }),
        { status: 401, headers: { "content-type": "application/json" } }
      );
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    validateToken(token);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect("/login");
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
