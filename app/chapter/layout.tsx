import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";

export const metadata = {
  title: "조화작 | Quiz",
  description: "화법과 작문 퀴즈",
};

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeadBar />
      <BottomBar />
      {children}
    </div>
  );
}
