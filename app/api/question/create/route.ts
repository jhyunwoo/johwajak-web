import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const createResult = await prisma?.questions.createMany({
    data: [
      {
        question: "색채 이미지를 이용하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "거리감을 과장되게 표현하여 화자가 임과 멀리 있음을 강조하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "변신 모티프를 활용하여 소원을 발원하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 본인의 안타까운 처지를 강조하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 인재가 인정받지 못하는 세태를 비판하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "고사를 인용하여 스스로가 시적 상황에서 보이려는 태도를 나타내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 지조와 절개를 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "부정적인 시어와 긍정적인 시어의 대비를 이용하여 주제의식을 강조하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "임(임금)이 계신 곳을 천상 세계에, 자신이 있는 곳을 지상 세계에 대응시켰다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "상황을 가정하여 화자의 소망하는 바를 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "자연 친화적인 삶을 추구하려는 의지를 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "구체적인 사물을 통해 임에 대한 화자의 마음을 간접적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "직유법을 이용하여 임의 은혜를 효과적으로 표현하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "직유법을 이용하여 스스로의 충성심을 효과적으로 표현하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "여성 화자를 이용하여 임금에 대한 충성을 강조하여 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "임과의 만남을 가로막는 소재들을 상징적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "객관적 상관물을 사용하여 화자의 충성심을 강조하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "구체적인 소재를 이용하여 화자의 정서를 표현하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "화자가 느낀 현실의 문제점을 상징적인 표현들을 이용하여 우의적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "화자가 지향하는 이상세계를 그를 대표하는 시어들로 표현하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "이원적 세계를 배경으로 시상을 전개하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "공간의 이동을 통하여 정서를 심화시켰다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "4음보의 음률을 이용하여 음악적 효과를 주었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "청각적 이미지를 이용하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "객관적인 표현으로 주제를 강조하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "변신 모티프를 활용하여 주장하는 바를 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 임의 위대함을 부각하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 현실 세계에 대한 희망적 인식을 보였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 독자들을 설득하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "고사를 인용하여 당대 사회의 가치에 반대되는 주장을 내비쳤다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "긍정적인 시어와 부정적인 시어를 대비시켜 임이/독자가 행동을 바꿀 것을 촉구하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "상황을 가정하여 상황의 비극성을 부각하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "자연의 풍경을 예찬하는 태도를 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "구체적인 사물을 상징적으로 이용하여 부정적인 상황을 부각시키는 데 활용하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "여성 화자를 이용하여 당대의 부정적인 사회상을 강조하여 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "임과의 만남을 가로막는 원인을 직접적인 표현으로 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question:
          "객관적 상관물을 이용하여 임의 지혜로운 모습을 강조하여 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "상징적인 표현을 이용하여 독자들에게 변화를 촉구하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "연쇄법을 이용하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },
      {
        question: "3음보의 음률로 고대 가요의 특성을 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0000znxfv6l63pcd",
      },

      {
        question: "구체적인 소재를 이용하여 자신의 삶을 집약하여 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "구체적인 수치를 언급하여 스스로의 방랑 생활을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "자신의 삶의 태도를 구체적 사물을 통하여 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "구체적인 다른 예시들에 빗대어 자신의 삶의 태도를 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "구체적인 다른 예시들에 빗대어 자신의 삶을 비유적으로 나타내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "자연 친화적인 가치관을 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "문장의 객체를 생략하는 표현이 이용되었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "두 행을 대조시켜 말하고자 하는 바를 강조하여 나타내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "상징적인 시어를 통하여 화자가 마주칠 수 있는 상황을 가정하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "상황을 가정하여 그 안에서 화자가 취할 태도를 드러내면서 화자의 삶의 태도를 집약적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "안분지족의 삶의 태도를 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "마지막 행에서 주제의식을 직접적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "구체적인 소재를 통하여 비판하고자 하는 대상의 문제점을 부각하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "구체적인 사물을 통하여 자신의 삶을 한탄하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "구체적인 다른 예시들에 빗대어 속세 사람들을 비판하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "고사를 인용하여 자신의 삶을 함축적으로 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "세속적인 가치를 추구하는 것에 있어서 긍정적으로 바라보고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "스스로의 삶을 한탄하며 세속적인 삶으로의 지향성을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question: "문장의 주체를 생략함으로써 효율성을 추구하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "상황을 가정하는 표현을 이용하여 화자가 비판하려는 대상의 속성을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },
      {
        question:
          "관직에서 벗어나 자연 속에서 살고자 하는 화자의 의지를 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3b0001znxfnnslm18g",
      },

      {
        question: "표면적 의미와 이면적 의미가 달라 독자들의 재미를 추구하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question: "언어 유희를 이용하여 대상을 희롱하고 풍자하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question: "점층적인 전개를 이용하여 심화되는 정서를 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question: "중의적인 표현을 통해 다양한 해석의 여지를 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },

      {
        question: "표면적 의미와 이면적 의미가 대립을 이룬다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question:
          "언어 유희를 이용하여 당대 사회에 대한 비판 의식을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question: "연쇄법을 이용하여 심화되는 정서를 효과적으로 나타내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question:
          "해학적인 표현을 이용하여 비판하고자 하는 대상을 우의적으로 풍자하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },
      {
        question: "중의적인 표현을 통하여 말하고자 하는 바를 부각하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0002znxflp2rcrow",
      },

      {
        question:
          "표면적 의미와 이면적 의미에 차이를 두어 중의적인 해석을 가능토록 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question: "자연물에 빗대어 표현하면서 정서를 섬세히 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question:
          "의인법을 이용하여 '인생의 덧없음'이라는 주제를 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question: "자연의 영원함과 인생의 무상함을 대비시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },

      {
        question:
          "표면적 의미와 이면적 의미가 대조를 이루게 함으로써 대상의 행동 변화를 촉구하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question:
          "자연물에 빗대어 표현함으로서 이루고자 하는 바를 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question: "의인법을 이용하여 시적 대상을 풍자하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },
      {
        question: "대조되는 시어들을 반복 배치하여 주제 의식을 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0003znxf7mvqqmov",
      },

      {
        question: "상징적인 시어를 적극 활용하여 주제 의식을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "매개체를 활용하여 자기 자신의 모습을 돌아보고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "시대적 배경을 이해하여야 해석할 수 있는 시어가 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "매개체를 활용하여 돌아본 자기 자신을 부끄러워하는 모습을 보이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "의문형 어미를 활용하여 스스로에 대한 인식을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "자기 자신에게 청유형 어미를 사용함으로써 의무감을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "구체적인 수치를 언급하면서 자전적인 특성을 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "의문형 어미를 활용하여 정서를 효과적으로 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "상황을 가정함으로써 시제를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "이전의 시행 또는 시연의 내용을 뒷부분에서 다시 끌어와 언급하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "자신의 과거 행동을 후회하는 내용을 통해 무기력한 태도를 보이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "자신의 과거 행동을 후회하고 이를 한탄하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "상징적인 시간적 배경을 이용하여 시의 정서를 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "부정적 현실을 자아 성찰을 통해 극복하려는 의지적 태도를 보이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "자아와 대립을 이루는 사회에 대해서 자아를 개선함으로써 해결하려 하고 있다 (추가설명: 자아를 개선한다 <ㅡ> 자아를 세상에 타협한다)",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "상징적인 시어를 통하여 주제 의식을 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "시각적 이미지를 형성하여 독자가 주제 의식을 파악할 수 있도록 돕고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "시간의 전환에 따라 시상을 전개하여 정서를 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },

      {
        question:
          "상징적인 시어를 적극 활용하여 문제적인 사회 현실에 대한 비판 의식을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "매개체를 활용하여 자기 자신의 모습을 정당화하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "구체적인 사물에 자신의 정서를 투영하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "매개체를 활용하여 돌아본 시대 현실을 한탄하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "의문형 어미를 활용하여 사회 현실에 대한 비판 의식을 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "자기 자신에게 명령형 어미를 사용함으로써 의무감을 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "구체적인 수치를 언급하면서 사건의 실제감을 높이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "청유형 어미를 활용하여 화자의 부정적 정서를 효과적으로 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "상황을 가정함으로써 시제를 직접적으로 제시하기보다는 독자들이 시제를 짐작하게끔 유도하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "이전의 시행 또는 시연을 반복하여 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "자신의 행적을 정당화함으로써 무책임한 태도를 보이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question: "상징적인 공간적 배경을 이용하여 시의 정서를 강화하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "상징적인 시간적 배경을 활용하여 현실 문제의 극복 의지를 보이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "부정적 현실을 타인들을 설득하여 극복하려는 의지적 태도를 보이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "자아와 대립을 이루는 사회에 대해서 비판하고 이를 개선하여야 한다고 주장하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "청각적 이미지를 형성하여 독자가 주제 의식을 파악할 수 있도록 돕고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },
      {
        question:
          "통시적인 시간의 흐름에 따라 시상을 전개하여 표현 효과를 높이고 정서를 강화하고 있다 (통시적 : 과거 ㅡ> 현재 ㅡ> 미래 방향으로 일정히…)",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0004znxf9ka7i1xf",
      },

      {
        question: "특정 시구를 반복하여 주제 의식을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "첫 연과 끝 연을 비슷하게 구성하여 구조적 안정성을 주고 있다( = 수미상관)",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question: "특정 시행을 반복함으로서 주제 의식을 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "상징적인 시어를 이용하여 사회에 대한 비판적 인식을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question: "의문형 어미를 이용하여 화자가 말하려는 바를 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "비슷하게 구성된 연들을 이웃하게 배치하여 주제를 강조하고 구조적 안정성을 부여하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question: "대립되는 시어들 간의 대조를 이루어 주제 의식을 부각하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question: "도치법을 이용하여 청자의 행동을 촉구하는 바를 강조하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "명령형 어미를 이용하여 독자에게 직접적으로 주장하는 바를 요구하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "화자가 요구하는 바를 실행한 경우 일어날 수 있는 일을 가정하여 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "진정한 현실을 자각한 이의 삶을 드러내며 청자의 각성을 촉구하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },

      {
        question: "특정 시구를 반복하여 화자가 느끼는 정서를 부각하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "첫 연과 끝 연을 비슷하게 구성하여 반복되는 상황을 강조하여 서술하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "상징적인 시어를 이용하여 화자가 시적 상황에서 느낀 정서를 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "비슷하게 구성된 행들, 또는 연을 이웃하게 배치하여 대조되는 두 상황을 명확히 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "대립되는 시어들을 대조적으로 이루어 자기 반성의 의미를 강화하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "의문형 어미를 이용하여 독자에게 직접적으로 주장하는 바를 요구하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },
      {
        question:
          "진정한 현실을 자각한 이의 불행한 삶을 드러내며 청자가 현실을 보지 않도록 독려하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3c0005znxf3aqungcg",
      },

      {
        question:
          "초라한 분위기의 시어를 적극적으로 활용하여 쇠락해 가는 마을의 풍경을 노래하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "두 시행이 분위기상으로 대조를 이루게 함으로서 시적 정서를 강조하여 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "서민적인 소재들을 이용하여 시골 마을의 분위기를 연상케 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "시각적 이미지를 묘사의 기법을 이용하여 드러내면서 시적 상황을 표현하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "고달픈 삶을 나타내는 시어를 사용하여 시적 정서를 부각하고 독자에게 시의 표면상에 드러나지 않은 내용을 짐작하게끔 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "과거와 달라진 현재의 상황을 이야기하면서 안타까움의 정서를 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },

      {
        question:
          "화려한 분위기의 시어를 통해 마을의 한 줄기 희망을 이야기하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "두 시행이 분위기상으로 대조를 이루게 함으로써 화자가 바라는 바를 명확히 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "서민적인 소재들을 이용하여 시골 마을의 따뜻한 분위기를 형성하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "시각적 이미지를 묘사의 기법을 이용하여 드러내면서 주제 의식을 직접적으로 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "고달픈 삶을 나타내는 시어를 사용하여 시적 긴장감을 환기하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },
      {
        question:
          "과거와 달라진 현재의 상황을 이야기하면서 희망적인 분위기를 형성하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0006znxf7pbftkow",
      },

      {
        question:
          "상반되는 분위기의 소재들을 병치하여 시적 상황을 강조하여 나타내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "시각적 이미지의 형성을 통해 시적 분위기를 우의적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "동일한 소재가 시간에 따라 다른 분위기를 연출하도록 하여 시간에 따라 달라지는 시적 상황을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "과장적인 표현을 이용하여 시적 긴장감을 연출하고 표현하려는 상황을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "의인법을 이용하여 시적 대상에게 인격을 부여함으로서 정서를 부각하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "특정 대상으로 마을 전체를 포괄하여 나타냄으로써 대상에 대한 정서를 부각하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "마을의 아픔을 대변하고 대표하는 인물을 제시함으로서 시의 분위기를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question: "접속어를 사용하여 시상의 반전을 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question: "명령형 어미로 시연을 마무리하여 시적 긴장감을 환기하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "색채 이미지를 이용하여 암울한 상황에서 나타나는 한 줄기 희망을 노래하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },

      {
        question:
          "시각적 이미지의 형성을 통해 시적 상황에서 인물들이 형성하는 분위기를 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "동일한 소재를 다른 시연에서 반복하여 이용함으로써 반복되는 시적 상황을 효과적으로 보여주고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "과장적인 표현을 이용하여 시의 주제 의식을 직접적으로 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "의인법을 이용하여 시적 대상에게 인격을 부여함으로서 시적 상황을 객관적인 입장에서 보게 하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "특정 대상으로 마을 전체를 포괄하여 나타냄으로써 마을 전체의 희망적인 분위기를 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "마을 전체를 대비하는 인물로 희망적으로 시상을 마무리하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question: "접속어를 이용하여 시적 긴장감을 완화화고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "명령형 어미로 시연을 마무리하여 시적 상황을 직접적으로 집약하고 정서를 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },
      {
        question:
          "상반되는 색채 이미지를 이용하여 대비되는 두 정서를 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0007znxf8alspttk",
      },

      {
        question:
          "인물에 대한 다양한 일화들을 통해서 독자들이 인물의 성격을 유추하게끔 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "피카레스크식 구성을 소설 내에서 취하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "인물의 행동을 통해서 인물의 심리를 간접적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물의 행동을 통해서 당대 사회에 대한 비판 의식을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "인물의 행동을 통해서 작가가 지향하는 인물상을 나타내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "유사한 사건의 반복으로 주제 의식을 심화하는 효과를 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "교훈적인 내용을 토대로 독자로 하여금 작가가 말하려는 바를 이해하도록 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "하층민 주인공을 이용하여 당대로서는 파격적인 내용을 취하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "비판의 대상이 되는 인물들을 간접적으로 비판하며 풍자적인 성격을 띠고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "고난을 겪는 인물을 제시함으로써 독자의 동정심을 불러 일으키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "특정 소재를 이용하여 인물의 성품을 짐작할 수 있도록 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "이전에 있었던 사건을 다시 언급하여 서술하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "인물의 심리 상태를 직접적으로 언급하여 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물의 내적 갈등을 드러내어 인물의 성격을 어림짐작할 수 있는 단서를 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물이 스스로를 낮추고 상대방을 높이는 표현을 통하여 상대방에 대한 존중을 갖추고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "관직을 나타내는 한자어를 이용한 것으로 보아 당대 양반들을 독자층으로 하고 있다는 사실을 알 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },

      {
        question:
          "인물에 대한 다양한 일화를 제시하면서 편집자적 논평을 통해 직접적으로 인물의 성격을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "옴니버스식 구성을 소설 내에서 취하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "인물의 행동을 통해서 인물의 위선적인 면을 비판하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물의 행동을 보여주고 이 행동에 대한 화자의 평가를 제시하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "인물의 행동을 통해서 작가가 지양하는 인물상을 나타내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "유사한 사건의 반복을 통하여 당대 사회를 비판하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "교훈적인 내용을 토대로 독자가 교훈을 실천할 것을 직접적으로 촉구하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "하층민 주인공을 이용하여 당대 사회의 사회상을 객관적으로 볼 수 있도록 하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "비판의 대상이 되는 인물들의 행동을 통해 해학성을 부여하고 있다.",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "고난을 겪는 인물을 제시함으로써 독자로 하여금 타산지석의 효과를 느끼도록 하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "특정 소재를 이용하여 제시되지 않은 상황을 짐작할 수 있도록 하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question: "이전에 있었던 사건을 요약하여 서술하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물의 심리 상태를 시각적 이미지와 인물의 말을 통해 간접적으로 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물의 내적 갈등을 드러내어 인물이 겪을 미래 상황을 예측할 수 있는 단서를 주고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "인물이 스스로를 낮추고 상대방을 높이는 표현을 통하여 당대 사회상을 비판하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },
      {
        question:
          "서민적인 소재와 서사를 이용하였다는 점을 보아 서민층을 독자로 하고 있다는 점을 알 수 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3d0008znxf0ppa2ew1",
      },

      {
        question:
          "인물이 스스로의 처지를 생각하며 미래에 대한 우려를 나타내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "인물이 목적 달성을 위해 상대방을 기만하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "고사를 이용하여 자신이 주장하는 바를 관철시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "'임금'을 예찬하는 말을 통해서 목표를 이루고자 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 사례를 제시하면서 상대방을 설득하고 상대방의 욕구를 자극하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "꿈 속에서의 일을 제시하며 미래에 대한 두려움을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 자신에게 불리한 상황이 될 수 있는 대화 상황을 기지를 발휘하여 자신에게 유리한 상황으로 돌리고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "상대방을 특정 대상에 빗대어, 또 고사를 인용하여 칭찬하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "대구법을 활용하여 미래의 상황에 대한 긍정적 인식을 효과적으로 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "인물이 존칭을 활용하여 상대방을 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 상대방에 대한 태도와 실제 속내 사이에서 괴리를 보여주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "인물이 안전한 상황이 되자 자신의 원래 의도를 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "서술자의 개입을 통해서 인물의 후일담을 제시하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 자신이 처하였던 상황에 대하여 요약적으로 제시하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "갑작스런 서사적 상황의 전환을 이루어 긴박한 정서를 환기하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "반복적인 상황에서 인물이 유사한 방법을 이용하여 문제를 해결하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 설득당하면서 자신이 폈던 상대방에 대한 의심을 거두고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "편집자적 논평을 이용하여 객관적인 인물에 대한 평가를 직접적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "당대 사회를 우화적인 이야기를 통하여 풍자하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "양반층과 서민층 모두가 향유하는 작품으로서 양쪽의 특성을 가진다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "사용된 한자어를 보아 양반층에 의하여 향유됨을 알 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "사용된 비속어를 보아 서민층에 의하여 향유됨을 알 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "상징적인 인물을 통하여 사회 문제에 대하여 우의적으로 비판하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "공간 이동을 통해 서사를 전개함으로서 변화하는 정서를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "배경 설화에 따른 구전 변형 작품으로서의 특성을 볼 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },

      {
        question:
          "인물이 목적 달성을 위해 상대방을 합리적인 근거에 따라 논리적으로 설득하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "고사를 이용하여 작품 밖에서 상황에 대한 객관적인 평가를 내놓고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "특정 대상을 비판하는 말을 통하여 상대방을 설득하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "인물이 사례를 제시하면서  상대방의 의견에 동의하고 이에 대한 논리적 근거를 제시하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "자신의 꿈 속에서의 일을 제시하며 미래에 대한 희망적인 전망을 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "시적 상황을 특정 대상에 빗대어, 또 고사를 인용하여 해결 방안을 모색하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "서술자의 개입을 통해서 인물의 긍정적인 면모를 칭찬하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "유사한 방법으로 문제를 해결하는 지점에서 항상 일관적인 태도에 대한 작가의 생각이 드러난다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "해학적 표현을 이용하여 사회에 대한 긍정적 인식을 보여준다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question:
          "서민층에서만 향유되는 작품으로서 서민문학적인 요소들만 볼 수 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },
      {
        question: "명문화된 작품으로서의 문학적 가치를 엿볼 수 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e0009znxfmibgu43h",
      },

      {
        question:
          "시대적인 상황 속에서 인물이 역사적 사건으로 인하여 어려움을 겪고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question: "역사적 사건이 인물의 운명을 바꾼 서사적 양상이 드러난다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "공간에 대한 묘사를 통하여 인물이 느끼는 정서를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "의인법을 이용하여 실제 존재하지 않는 상황을 표현함으로써 인물이 현재 느끼고 있는 정서를 심화시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "과거에 대한 회상을 통하여 인물이 느끼는 정서를 대비시키고 부각시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물이 다른 인물의 말을 자신의 정서를 투영시켜 해석하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물이 느끼는 정서가 소재들 간의 대립을 통하여 발생하고 심화되고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "대조적인 상황과 이미지를 제시하여 인물의 상황과 정서를 대비시키고 부각시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물의 두 가지 모습을 병치시켜 이중적인 인물의 표면과 이면을 대조시키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "동일한 인물에 대하여 여러 가지 호칭을 이용하여 언급하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question: "인물이 하는 생각을 통해서 인물의 성격을 엿볼 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "점점 심화되는 인물의 내면 심리와 사고 과정을 통하여 비극성을 부각하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question: "인물이 고심하다 스스로의 비도덕적인 판단을 정당화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물의 판단의 표면적 이유를 언급한 뒤, 이면적 이유를 해석하여 제시함으로써 병치의 효과를 극대화하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question: "상징적 인물을 통하여 당대 사회 현실을 부각하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물의 생각을 자세히 표현하여 섬세하고 미묘한 감정선을 뚜렷이 드러내었다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },

      {
        question:
          "활유법을 이용하여 실제 존재하지 않는 상황을 표현함으로써 인물이 현재 느끼고 있는 정서를 심화시키고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "과거에 대한 회상을 통하여 인물이 느끼는 정서를 객관적 시각에서 바라볼 수 있도록 하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물이 다른 인물의 말에 직접적으로 반발의 의사를 표시하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물이 느끼는 정서가 소재들 간의 유사성을 바탕으로 심화되고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "점점 심화되는 인물의 내면 심리와 사고 과정을 통하여 주제 의식을 독자들에게 설득하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물이 스스로의 비도덕적인 행위를 인정하고 이를 반성하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },
      {
        question:
          "인물의 외양과 행동, 말을 구체적으로 표현하여 섬세하고 미묘한 감정선을 뚜렷이 드러내었다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000aznxf7t6s69d7",
      },

      {
        question:
          "구체적인 인과관계를 언급하지 않아 독자들로 하여금 구체적인 상황을 유추할 여지를 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "주변 인물의 시점에서 주관적 판단에 의한 인물의 특성을 서술하여 서술자의 신뢰성에 흠결을 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question: "인물에 대한 서술의 측면에서 의문을 남겨 두고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "역사적, 사회적 사건의 영향으로 개별 인물의 삶에 발생한 변화를 보여주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "기존의 인물에 대한 이미지와는 괴리감을 발생시키는 사건을 이용하여 독자의 상황 판단에 혼란을 야기하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "상황과 인과 관계는 없으나 상황을 집약할 수 있는 소재를 등장시켜 독자들의 효과적 이미지 형성에 기여하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "다양한 주변 인물의 서술에 의해 점진적으로 미지의 인물을 알아가는 과정을 서술하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "특정 인물이 다른 인물에게 이해받기 위해 자신의 지각 방식을 직접적으로 설명하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "특정 인물이 다른 인물을 이해하였음을 구체적 행동을 이용하여 보여주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "두 인물의 특정 인물에 대한 인식 간에 괴리를 발생시키면서 극적 효과를 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "주관적인 인식 방법을 가진 인물이 자신의 관점에서 다른 사람에게 자신의 경험을 이야기하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },

      {
        question:
          "구체적인 인과관계 언급을 통해서 독자들이 상황을 보다 매끄럽게 이해하도록 돕고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "작품 밖 서술자를 이용하여 안복남에 대한 정보를 객관적으로 전달하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "개인 간의 외적 갈등으로 개별 인물의 삶에 발생한 변화를 보여주고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "기존의 인물에 대한 이미지와 일치하는 상황을 제시하여 독자의 쉬운 이해를 돕고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "상황을 단적으로 보여 주는 사물을 이용하여 상황을 집약적으로 표현하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "작품 전반에서 한 명의 인물의 시선에서만 주관적인 인물 평가를 통해 편향된 시선을 갖추고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question: "특정 인물이 다른 인물에게 이해받기 못해 불쾌해하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },
      {
        question:
          "특정 인물이 다른 인물을 이해하였음을 명시적으로 이야기하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000bznxff186z7hb",
      },

      {
        question:
          "기억 속의 인물을 회상하는 장면을 동물의 시각적 이미지에 빗대어 형상화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "과거를 대표하는 인물을 매개로 과거에 대한 회상을 표현하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "도치법을 통하여 말하고자 하는 바를 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "같은 시어가 여러 인물을 상징하기 위해서 사용된다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "의인법을 사용하여 생동감 있는 표현 효과를 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "앞서 사용된 시행을 변주하여 뒤에서도 사용함으로써 유사한 상황의 반복을 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "실제가 없는 대상을 물리적으로 표현함으로서 시적 긴장감을 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "과거 회상의 매개체가 되는 대상을 시의 표면에 나타내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "시적 화자가 표면에 등장한다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "명사형으로 시상을 종결하여 독자에게 여운을 주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },

      {
        question:
          "기억 속의 인물을 회상하는 장면을 동물의 내면적 속성과 대조시켜 형상화하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "과거를 대표하는 사물을 매개로 과거에 대한 회상을 표현하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "같은 시어가 여러 인물에서 대조되는 의미를 드러내기 위해 사용하면서 낯설게 하기를 실현하고 그 대조감을 부각시키고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "의인법을 사용하여 화자에게 설득하는 바를 더육 효과적으로 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question: "대구법을 사용하여 반복되는 시적 상황을 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "실제가 없는 대상을 물리적으로 표현함으로서 청자들을 설득하는 효과를 높이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },
      {
        question:
          "시적 화자가 작품 밖에서 시적 대상에 관해 객관적으로 서술한다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3e000cznxfapu4v29e",
      },

      {
        question: "구체적인 지명을 제시하여 시적 상황의 실제성을 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "구체적인 배경을 통해서 시적 분위기를 간접적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "과거 회상의 매개체가 되는 시어를 제공함으로써 주제를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "시적 화자를 시의 표면에 등장시켜 청자가 시적 상황에 몰입할 수 있도록 하였다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "특정 사물을 매개체로 하여 과거의 모습을 회상하는 것을 주 내용으로 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question: "음성 상징어를 통하여 풍부한 표현을 꾀하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "특정 대상에 과거의 화자의 정서를 투영시키는 표현을 이용하여 표현 효과를 높이고 청자로 하여금 짐작할 수 있게 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "대조되는 시어들을 활용하여 상반되는 두 시적 상황을 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "청각적 이미지들이 대조를 이루어 시의 주제 의식을 부각하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question: "특정 시구를 반복하여 말하고자 하는 바를 강조하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },

      {
        question:
          "구체적인 지명을 제시하여 독자가 현대 문명의 부정적인 측면을 이해하도록 하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "구체적인 지명을 통해서 시적 화자가 주장하는 이상 세계의 모습을 간접적으로 제시하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "과거 회상의 매개체가 되는 시어를 제공함으로써 청자의 공감각적 이미지를 자극하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "시적 화자를 시의 표면에 등장시켜 청자가 시적 상황을 객관적으로 볼 수 있도록 장치하였다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "과거에 대한 회상을 통해 화자가 생각하는 이상 세계로 나아가려는 의지를 보이고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "특정 대상에 과거의 화자의 정서를 투영시키는 표현을 이용하여 이를 현재 자신이 느끼는 정서와 대조시키고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "청각적 이미지들이 대조를 이루어 청자들이 화자가 설득하는 바로 나아가도록 하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },
      {
        question:
          "특정 시구를 반복하여 반복되는 상황을 강조하여 주제 의식을 드러낸다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000dznxfmvtedsdd",
      },

      {
        question: "두 인물간 외적 갈등을 주요 줄거리로 다루고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "갈등을 발생시키는 두 인물이 특정한 상황에 의해 미필적으로 갈등을 일으키고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 행동을 묘사하여 인물이 위치한 사회적 지위를 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 내면 심리를 구체적으로 묘사하여 독자의 몰입도를 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 대화를 통해 심리를 간접적으로 짐작할 수 있게 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "특정한 사물을 매개로 인물의 마음을 드러내면서 문학성을 높이고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물이 다른 인물을 부르는 호칭을 통해서 그 인물에 대한 감정을 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question: "인물의 행동을 통해서 내면 심리를 효과적으로 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 말을 통해서 시적 상황에서 갈등이 최고조에 이르렀음을 알 수 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물은 상대방 인물을 그의 사회적 지위를 이용하여 평가하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "사건을 요약적으로 제시하여 인물 심리를 짐작할 수 있게 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question: "인물의 말을 통해서 앞서 짐작한 심리를 다시 확실히 하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 말과 행동의 변화를 통해서 인물의 심경 변화를 드러내고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question: "방언을 적극적으로 활용하여 향토적인 정서를 환기하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 행동을 통해서 다른 인물에 대한 사랑을 간접적으로 보여주고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 현재 시점에서의 내적 독백을 통하여 내면 심리를 보다 직접적으로 설명하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물을 상징하는 동물에 관한 서사를 제공하여 문학적 정서를 강화하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "현재 시점에서의 회상을 통하여 서사를 집약하고 정서를 드러내며 마무리하고 있다",
        options: ["X"],
        answer: "O",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },

      {
        question:
          "갈등을 발생시키는 두 인물은 서로에 대하여 부정적인 인식을 바탕으로 갈등을 일으킨다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 어조나 인물이 사용하는 사회적 방언을 통해서 인물이 위치한 사회적 지위를 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 내면 심리를 간접적으로만 드러내면서 독자에게 해석의 여지를 다양하게 주고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "특정한 사물을 매개로 인물의 마음을 드러내면서 독자에게 갈등의 해소 양상을 보여주고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물이 다른 인물을 부르는 호칭을 통해서 인물에 대한 편집자적 논평을 엿볼 수 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 행동을 통해서 작가가 주장하는 문제 의식을 강조하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물은 상대방 인물을 그의 사회적 지위를 바탕으로 한 선망의 심리를 드러내고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "사건을 요약적으로 제시하여 서사 전개의 긴장감을 이완시키고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물의 말을 통해서 앞서 간접적으로 나타났던 인물의 심리를 번복하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "방언을 적극적으로 활용하여 사건 전개의 시간적 배경을 제시하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "인물을 상징하는 동물에 관한 서사를 제공하여 독자의 오해를 해소하고 독자의 자기 반성을 유도하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
      {
        question:
          "현재 시점에서의 회상을 통하여 앞서 제시된 상황을 다시 한 번 해설하고 있다",
        options: ["O"],
        answer: "X",
        type: "select",
        chaptersId: "clj80zo3f000eznxf0t6f21p1",
      },
    ],
  });
  return NextResponse.json(createResult);
}
