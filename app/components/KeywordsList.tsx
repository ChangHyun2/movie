import { keywords as keywordsJson } from "@/data/ui";

import Link from "next/link";
import { Keyword } from "../types/crawler";
import MobileListScroll from "./MobileListScroll";
import Image from "next/image";

export const themeColors = [
  {
    id: "5e1388e7-ad54-43a3-b320-da83dd3ad484",
    kor: "봄의 설렘",
    eng: "spring",
    color: "#E29970",
  },
  {
    id: "5a2c8d16-ecf6-4eee-ac0c-c5b43698f90a",
    kor: "여름의 향기",
    eng: "summer",
    color: "#E29970",
  },
  {
    id: "bf41c002-b150-4a55-96ad-1332f3592fae",
    kor: "가을의 정취",
    eng: "autumn",
    color: "#E29970",
  },
  {
    id: "57070fd6-9390-4950-8e91-c4ea087ea377",
    kor: "겨울의 쓸쓸함",
    eng: "winter",
    color: "#E29970",
  },
  {
    id: "1c643824-127d-41e6-9adf-1bdac2925d2b",
    kor: "사계절을 담은",
    eng: "four seasons",
    color: "#E29970",
  },
  {
    id: "18683d5e-2097-476b-b66b-19a679e13c13",
    kor: "눈내리는 풍경",
    eng: "snowy",
    color: "#E29970",
  },
  {
    id: "3470593f-0b02-4645-8591-01422f55511c",
    kor: "비오는 날",
    eng: "rainy",
    color: "#E29970",
  },
  {
    id: "b78f501b-fd93-4a5b-9f6d-3b848bdc8199",
    kor: "포근한 분위기",
    eng: "cozy",
    color: "#69FF81",
  },
  {
    id: "85ab649a-ca6f-4032-a51f-9e154af49cd5",
    kor: "서늘한 분위기",
    eng: "chilly",
    color: "#69FF81",
  },
  {
    id: "af2479d2-9e6b-4820-bbff-028cd22458da",
    kor: "여유로운 분위기",
    eng: "leisurely",
    color: "#69FF81",
  },
  {
    id: "e520682b-7ef9-461a-8ce2-c7bb9e104f1d",
    kor: "설레는 분위기",
    eng: "fluttering",
    color: "#69FF81",
  },
  {
    id: "18c3af9a-0b95-4307-b19b-4674e887a13b",
    kor: "감동적인",
    eng: "touching",
    color: "#FF6984",
  },
  {
    id: "d2e31b03-b342-4910-a312-a144bd946351",
    kor: "가슴 먹먹한",
    eng: "heavy-hearted",
    color: "#FF6984",
  },
  {
    id: "533f237b-2414-48c4-bd92-1da06653767a",
    kor: "통쾌한",
    eng: "Satisfying",
    color: "#FF6984",
  },
  {
    id: "be1beb64-6d88-4d28-9965-7898e4811683",
    kor: "몰입되는",
    eng: "immersive",
    color: "#FF6984",
  },
  {
    id: "712f48db-3607-4e2c-9725-def2015eef1b",
    kor: "긴장감있는",
    eng: "Tense",
    color: "#69FF81",
  },
  {
    id: "bd9495ca-8abc-401e-817d-97c577ddf245",
    kor: "시대물",
    eng: "period piece",
    color: "#FF6984",
  },
  {
    id: "9bd53881-d59c-4f20-a5c8-c3ce740b8b5f",
    kor: "하이틴",
    eng: "teen movie",
    color: "#69FF81",
  },
  {
    id: "c902f8a6-e9fa-48d7-ad1d-b18872f577fd",
    kor: "성장서사",
    eng: "growth",
    color: "#69DBFF",
  },
  {
    id: "1120b643-3d65-4998-bf2c-7817f9c0dac0",
    kor: "반전이 있는",
    eng: "twist",
    color: "#FF6984",
  },
  {
    id: "28ef6d91-d441-4410-8004-142d7ab8739c",
    kor: "미술",
    eng: "Art",
    color: "#CF69FF",
  },
  {
    id: "a5de5d05-6f07-4e7b-8fbe-07845df31db0",
    kor: "음악",
    eng: "music",
    color: "#CF69FF",
  },
  {
    id: "4dcac1b6-e16b-4ca9-8c14-b3bc524f537c",
    kor: "경이로운 자연",
    eng: "nature",
    color: "#CF69FF",
  },
  {
    id: "4744753a-95c4-484e-adac-d36dacf8ada4",
    kor: "고즈넉한",
    eng: "tranquil",
    color: "#FF6984",
  },
  {
    id: "29d7707e-43a7-4778-aeec-ced19b938de3",
    kor: "도시적인",
    eng: "urban",
    color: "#FF6984",
  },
  {
    id: "c78d5b70-8bda-48ca-b303-64090aee28d3",
    kor: "한국인이 사랑한",
    eng: "korean loved",
    color: "#CF69FF",
  },
  {
    id: "69b6e898-d0c0-4dfa-97b0-70746cda80d9",
    kor: "영화제 수상",
    eng: "film festival award",
    color: "#CF69FF",
  },
  {
    id: "d05c0297-8739-4081-aa31-813ac3a931d3",
    kor: "고전적인 명작",
    eng: "classic masterpiece",
    color: "#FF6984",
  },
  {
    id: "342969a8-dc32-47a4-80ff-9d5d0aab2310",
    kor: "독립영화",
    eng: "independent film",
    color: "#CF69FF",
  },
];

type keyword = {
  id: string;
  kor: string;
};

const keywords: keyword[] = keywordsJson.map(({ id, kor }: any) => ({
  id,
  kor,
}));

const keywordsLists: {
  label: string;
  keywordsList: keyword[][];
  color: string;
  icon: string;
}[] = [
  {
    label: "영화 분위기",
    keywordsList: [[]],
    color: "#69FF81",
    icon: "영화분위기",
  },
  {
    label: "시간 & 시대적 배경",
    keywordsList: [[]],
    color: "#E29970",
    icon: "시간시대적배경",
  },
  {
    label: "영화에서 느껴지는 감정",
    keywordsList: [[]],
    color: "#FF6984",
    icon: "영화감정",
  },
  {
    label: "주요 서사 관련",
    keywordsList: [[]],
    color: "#69DBFF",
    icon: "서사",
  },
  {
    label: "영화 특이사항",
    keywordsList: [[]],
    color: "#CF69FF",
    icon: "영화특이사항",
  },
];

keywords.forEach((keyword) => {
  const themeColor = themeColors.find((k) => k.id === keyword.id)?.color;
  const target = keywordsLists.find((k) => k.color === themeColor);

  const threeKeywordsList = target?.keywordsList;
  if (!threeKeywordsList) return;

  const stack = threeKeywordsList.pop();
  if (!stack) return;

  if (stack.length === 3) {
    threeKeywordsList.push(stack);
    threeKeywordsList.push([keyword]);
  } else {
    stack.push(keyword);
    threeKeywordsList.push(stack);
  }
});

export default function KeywordList({
  filter,
  toggleFilter,
}: {
  filter?: string[];
  toggleFilter?: (keywordId: Keyword["id"]) => void;
}) {
  const filterSet = new Set(filter);

  return (
    <div>
      {keywordsLists.map((keywordList) => (
        <section className="mb-10" key={keywordList.label}>
          <h3 className="flex items-center mx-4 semi18 mb-3">
            <span className="mr-1">
              <Image
                src={`/tevi/icon-${keywordList.icon}.svg`}
                alt="icon"
                width={20}
                height={20}
              />
            </span>
            <span>{keywordList.label}</span>
          </h3>
          {keywordList.keywordsList.map((threeKeywords, idx) => {
            return (
              <MobileListScroll key={idx} className="mb-3">
                {threeKeywords.map((keyword) => {
                  const color = themeColors.find(
                    (k) => k.id === keyword.id
                  )?.color;

                  return filter ? (
                    <button
                      key={keyword.id}
                      style={{
                        background: filterSet.has(keyword.id) ? color : "white",
                        border: `1px solid ${color}`,
                        borderRadius: "32px",
                      }}
                      className="py-2 px-6 mr-1 "
                      onClick={
                        toggleFilter
                          ? () => {
                              toggleFilter(keyword.id);
                            }
                          : undefined
                      }
                    >
                      {keyword.kor}
                    </button>
                  ) : (
                    <Link
                      key={keyword.id}
                      href={`/movies/theme/keywords?keywordId=${keyword.id}`}
                    >
                      <div
                        style={{
                          borderColor: themeColors.find(
                            (k) => k.id === keyword.id
                          )?.color,
                        }}
                        className={`${
                          filterSet.has(keyword.id) ? "button-fill" : "button"
                        } mr-1`}
                      >
                        {keyword.kor}
                      </div>
                    </Link>
                  );
                })}
              </MobileListScroll>
            );
          })}
        </section>
      ))}
    </div>
  );
}
