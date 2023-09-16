"use client";
import Slider from "react-slick";
import KeywordCard from "./KeywordCard";
import { Keyword } from "../movies/page";

export default function KeywordsCarousel({
  keywords,
}: {
  keywords: Keyword[];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {keywords.map((keyword) => (
        <KeywordCard key={keyword.name} keyword={keyword} />
      ))}
    </Slider>
  );
}
