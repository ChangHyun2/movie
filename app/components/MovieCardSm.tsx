import Image from "next/image";
import { MovieCardProps } from "./MovieCardMd";
import Link from "next/link";

export default function MovieCardSm(props: MovieCardProps) {
  return (
    <div>
      <div
        className="mb-1"
        style={{
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          overflow: "hidden",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="relative " style={{ width: "90px", height: "120px" }}>
          <Link href={`/movie/${props.id}`}>
            <Image src={props.thumbnail} alt={`${props.title} poster`} fill />
          </Link>
        </div>
      </div>
      <div>
        <div className="mb-1 semi13">{props.title}</div>
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
