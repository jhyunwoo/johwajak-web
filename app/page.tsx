import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const chapters = await prisma.chapters.findMany({
    orderBy: { chapter: "asc" },
  });

  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const userInfo = await prisma.user.findUnique({
      // @ts-ignore
      where: { email: session.session.user.email },
    });
    if (!userInfo?.nickname) {
      redirect("/profile/nickname");
    }
  }
  //@ts-ignore
  if (!session?.session?.user.email) {
    await redirect("/profile/email");
  }
  //@ts-ignore
  if (!session?.session?.user?.nickname) {
    await redirect("/profile/nickname");
  }

  return (
    <Layout>
      <HeadBar />
      <BottomBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className=" bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 flex flex-col justify-center items-start">
          <div className="text-slate-600 text-xs">공지</div>
          <div className="text-sm font-medium break-keep mt-1">
            조화작에서 제공하는 모든 OX 퀴즈는{" "}
            <span className="underline decoration-red-600 decoration-2 font-bold underline-offset-0">
              조성민
            </span>{" "}
            학생이 출제한 것으로 답이 정확하지 않을 수 있습니다. 문제와 답안에
            대해 <span className="text-sky-600 font-bold">비판적인 시각</span>
            으로 봐주세요.{" "}
            <span className="text-red-600">
              답안 오류로 인한 모든 손해는 조화작에서 책임지지 않습니다.
            </span>
          </div>
        </div>
        {chapters.map((data, key) => (
          <Link
            href={`/chapter/${data.id}`}
            key={key}
            className=" bg-white p-4 rounded-lg h-40 shadow-lg hover:shadow-xl transition duration-200 flex flex-col justify-center items-start"
          >
            <div className="text-2xl font-semibold break-keep">
              Chapter {data.chapter}
            </div>
            <div className="text-lg font-medium mt-2 break-keep">
              {data.title}
            </div>
          </Link>
        ))}
        <Link
          href={"https://inco.moveto.kr"}
          className=" bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 flex flex-col justify-center items-start"
        >
          <div className="text-slate-600 text-xs">광고</div>
          <div className="text-base sm:text-lg font-medium break-keep mt-1">
            시작부터 끝까지,{" "}
            <span className="text-sky-600 font-bold">정보통신</span>은 누구나
            INCO
          </div>
          <div className="text-xl sm:text-2xl font-semibold mt-1 break-keep pb-4">
            2회고사도 <span className="text-sky-600 font-bold">INCO</span>로
            대비하세요.
          </div>
        </Link>
      </div>
    </Layout>
  );
}
