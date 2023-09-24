import Link from "next/link";
import keywords from "@/data/keywords.json";
import KeywordList from "@/app/components/KeywordsList";

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
      <div className="mb-3 mx-4">
        <Link href={`/movies/keywords`} className="semi18">
          이런 테마는 어떠세요?
        </Link>
      </div>
      <KeywordList />
    </section>
  );
}
