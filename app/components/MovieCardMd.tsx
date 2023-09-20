import Image from "next/image";
import Link from "next/link";

export type MovieCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  genre: string[];
  bookmark?: boolean;
};

export default function MovieCardMd(props: MovieCardProps) {
  return (
    <div>
      <div
        style={{
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          overflow: "hidden",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div
          className="relative"
          style={{ height: "calc((100vw - 50px) / 2 * 4 / 3)" }}
        >
          <Link href={`/movie/${props.id}`}>
            <Image src={props.thumbnail} alt={`${props.title} poster`} fill />
          </Link>
        </div>
      </div>
      <div className="mb-3 mx-2 mt-2">
        <div className="mb-1 semi15">{props.title}</div>
        <div>
          <div>
            <div className="medium11 mb-1">{props.genre}</div>
            <div className="flex items-center">
              <span className="mr-1">⭐️</span>
              <span className="medium11">{props.rating}</span>
            </div>
          </div>
          {props.bookmark && <div>bookmark</div>}
        </div>
      </div>
    </div>
  );
}
