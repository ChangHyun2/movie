import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import 중꺾마 from "../../data/keyword/중꺾마.json";
import 돈쭐내다 from "../../data/keyword/돈쭐내다.json";
import Image from "next/image";
import { InfoOutlined } from "@mui/icons-material";
import { Keyword } from "../movies/page";
import KeywordCard from "../components/KeywordCard";
import KeywordsCarousel from "../components/KeywordsCarousel";

const keywords = [중꺾마, 돈쭐내다];

export default function KeywordsPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div style={{ width: "345px" }}>
        <KeywordsCarousel keywords={keywords} />
      </div>
    </main>
  );
}
