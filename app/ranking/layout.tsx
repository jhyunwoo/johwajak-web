import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";

export const metadata = {
  title: "조화작 | Ranking",
  description: "2023 화법과 작문 퀴즈 랭킹",
};

export default function RankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <HeadBar />
      <BottomBar />
      {children}
    </Layout>
  );
}
