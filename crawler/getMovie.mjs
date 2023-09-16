import qs from "qs";
import { writeFileSync } from "fs";

const movies = [
  {
    title: "Brewster's Millions",
    year: "1985",
    characterName: "Montgomery Brewster",
    characterDescription:
      "Montgomery Brewster, portrayed by Richard Pryor, inherits a fortune but must spend a large sum in a short time to receive an even larger inheritance.",
  },
  {
    title: "Big Daddy",

    year: "1999",
    characterName: "Sonny Koufax",
    characterDescription:
      "Sonny Koufax, played by Adam Sandler, adopts a child to impress his girlfriend and learns about responsibility, eventually finding success.",
  },
  {
    title: "Ratatouille",

    year: "2007",
    characterName: "Remy",
    characterDescription:
      "Remy, a rat with a passion for cooking, ultimately achieves recognition and success in the culinary world.",
  },
  {
    title: "The Hundred-Foot Journey",

    year: "2014",
    characterName: "Hassan Kadam",
    characterDescription:
      "Hassan Kadam, played by Manish Dayal, runs a successful restaurant and overcomes challenges to achieve acclaim.",
  },
  {
    title: "Chef",

    year: "2014",
    characterName: "Carl Casper",
    characterDescription:
      "Carl Casper, portrayed by Jon Favreau, leaves his restaurant job to start a food truck business, finding both creative freedom and financial success.",
  },
  {
    title: "Julie & Julia",

    year: "2009",
    characterName: "Julie Powell",
    characterDescription:
      "Julie Powell, played by Amy Adams, embarks on a journey to cook her way through Julia Child's recipes and gains recognition for her blog and book.",
  },
  {
    title: "Slumdog Millionaire",

    year: "2008",
    characterName: "Jamal Malik",
    characterDescription:
      "Jamal Malik, played by Dev Patel, participates in a quiz show and wins a large sum of money, changing his life and his community.",
  },
  {
    title: "Mr. Deeds",

    year: "2002",
    characterName: "Longfellow Deeds",
    characterDescription:
      "Longfellow Deeds, portrayed by Adam Sandler, inherits a fortune and uses it to help others in various ways.",
  },
  {
    title: "Uptown Girls",

    year: "2003",
    characterName: "Molly Gunn",
    characterDescription:
      "Molly Gunn, portrayed by Brittany Murphy, inherits a fortune but must learn responsibility while caring for a young girl.",
  },
  {
    title: "The Great Debaters",

    year: "2007",
    characterName: "Melvin B. Tolson",
    characterDescription:
      "Melvin B. Tolson, played by Denzel Washington, coaches a debate team at a historically Black college and inspires his students to success.",
  },
  {
    title: "The Terminal",

    year: "2004",
    characterName: "Viktor Navorski",
    characterDescription:
      "Viktor Navorski, portrayed by Tom Hanks, finds himself stranded at an airport and, through his warm-hearted actions, touches the lives of those around him.",
  },
  {
    title: "The Secret Life of Walter Mitty",

    year: "2013",
    characterName: "Walter Mitty",
    characterDescription:
      "Walter Mitty, played by Ben Stiller, embarks on an adventurous journey and ultimately achieves personal and professional success.",
  },
  {
    title: "The Blind Side",

    year: "2009",
    characterName: "Leigh Anne Tuohy",
    characterDescription:
      "Leigh Anne Tuohy, portrayed by Sandra Bullock, takes in a homeless teenager and helps him succeed in life and sports.",
  },
  {
    title: "Chocolat",

    year: "2000",
    characterName: "Vianne Rocher",
    characterDescription:
      "Vianne Rocher, played by Juliette Binoche, opens a chocolate shop in a conservative French village, bringing change and success to the residents.",
  },
  {
    title: "Joy",

    year: "2015",
    characterName: "Joy Mangano",
    characterDescription:
      "Joy Mangano, portrayed by Jennifer Lawrence, invents a self-wringing mop and builds a successful business with her determination and creativity.",
  },
  {
    title: "Queen of Katwe",

    year: "2016",
    characterName: "Phiona Mutesi",
    characterDescription:
      "Phiona Mutesi, played by Madina Nalwanga, discovers her talent for chess and achieves recognition and financial support from her community.",
  },
  {
    title: "Seabiscuit",

    year: "2003",
    characterName: "Charles Howard",
    characterDescription:
      "Charles Howard, portrayed by Jeff Bridges, owns Seabiscuit, an underdog racehorse, and finds success with the help of his trainer and jockey.",
  },
  {
    title: "A Beautiful Mind",

    year: "2001",
    characterName: "John Nash",
    characterDescription:
      "John Nash, portrayed by Russell Crowe, is a brilliant mathematician who overcomes personal challenges and achieves recognition for his work",
  },
  {
    title: "Joy",
    year: "2015",
    characterName: "Joy Mangano",
    characterDescription:
      "Joy Mangano, portrayed by Jennifer Lawrence, invents a self-wringing mop and builds a successful business with her determination and creativity",
  },
];

const getMovie = async (params) => {
  const _params = {
    apikey: "c87cae29",
    type: "movie",
    plot: "full",
    r: "json",
    ...params,
  };

  const res = await fetch(`http://www.omdbapi.com/?${qs.stringify(_params)}`);

  if (res.ok) {
    const data = await res.json();

    return data;
  }

  return null;
};

Promise.all(movies.map((m = ㅑ > getMovie({ t: m.title, y: m.year })))).then(
  (data) => {
    writeFileSync("돈쭐내다.json", JSON.stringify(data));
  }
);
