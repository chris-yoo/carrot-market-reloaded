import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({ ok: true });
}
// 그냥 이름을 GET 으로 지어주면 GET 요청만 받을 수 있음

export async function POST(request: NextRequest) {
  const data = await request.json(); //body 를 가지고 옴
  console.log("log the user in!!!");
  return Response.json(data);
}
