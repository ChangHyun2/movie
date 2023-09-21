import Link from "next/link";
import keywords from "@/data/tags.json";

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

export default function KeywordMovieListSection() {
  return (
    <section>
      <div className="mb-3 mx-4">
        <Link href={`/movies/keywords`} className="semi18">
          이런 테마는 어떠세요?
        </Link>
      </div>
      <div>
        {threeTagsList.map((threeTags, idx) => {
          return (
            <div
              key={idx}
              className="flex mb-2 flex-nowrap overflow-auto snap-x  no-scrollbar"
            >
              {threeTags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/movies/keywords/${tag.id}`}
                  className="shrink-0 relative first:pl-4"
                >
                  <button className="button mr-1">{tag.kor}</button>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
