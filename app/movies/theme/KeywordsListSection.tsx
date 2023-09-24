import Link from "next/link";
import keywords from "@/data/keywords.json";
import KeywordList from "@/app/components/KeywordsList";
import Image from "next/image";

type Tag = {
  id: string;
  kor: string;
};

const tags: Tag[] = keywords.map(({ id, kor }) => ({
  id,
  kor,
}));

const threeTagsList: Tag[][] = [[]];

tags.forEach((tag) => {
  const stack = threeTagsList.pop();
  if (!stack) return;

  if (stack.length === 3) {
    threeTagsList.push(stack);
    threeTagsList.push([tag]);
  } else {
    stack.push(tag);
    threeTagsList.push(stack);
  }
});

export default function KeywordListSection() {
  return (
    <section>
      <div className="mb-3 mx-4 ">
        <Link
          href={`/movies/theme/keywords`}
          className="semi18 flex items-center"
        >
          <span>이런 테마는 어떠세요?</span>
          <Image
            src="/tevi/icon-chevron-right-22-line.svg"
            alt="go to page"
            width={22}
            height={22}
          />
        </Link>
      </div>
      <KeywordList />
    </section>
  );
}
