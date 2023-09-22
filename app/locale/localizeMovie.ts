import { MovieDetail } from "../types/crawler";

type MovieKor = {
  Title: string; // 1:1
  plot: string; // 1:1
  Writer: string; // 1:N
  Director: string; // 1:N
  Actors: string; // 1:N
};

const localizeMovieDetail = (movieDetail: MovieDetail) => {
  const { Title, Plot, Writer, Director, Actors, Genre, Rated } = movieDetail;

  const genres = Genre.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const writers = Writer.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const actors = Actors.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const directors = Director.split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  console.log({ Title, Plot, genres, actors, writers, directors });

  /*

  const file = {
    read  : (name, dir = '.') => fs.readFileSync(dir + '/' + name + '.json')
  }

  const localized = reacFileSync(')
  if(localized[movieId]) return;
  localized[movieId] = true
  writeFileSync('./localized.json', JSON.stringify(localized))
  
  1. 관계 매핑

  영문이 키값
  map moviIds
  - writer
  - director
  - actor

  const writerMovieIds = {}
  const directorMovieIds = {}
  const actorMovieIds = {}
  
  if(writerMovieIds[writer]){
    writerMovieIds[writer].push(movieId)
  }else{
    writerMovieIds[writer] = [movieId]
  }

  if(directorMovieIds[director]){
    directorMovieIds[director].push(movieId)
  }else{
    directorMovieids[director] = [movieId]
  }
  

  if(actorMovieIds[actor]){
    actorMovieIds[actor].push(movieId)
  }else{
    actorMovieIds[actor] = [movieId]
  }
  

  test
  console.log({ actorMovieIds, directorMovieIds, writerMovieIds })

  save
  writeFileSync('./actorMovieIds.json', JSON.stringify(actorMovieIds))
  writeFileSync('./directorMovieIds.json', JSON.stringify(directorMovieIds))
  writeFileSync('./writerMovieIds.json', JSON.stringify(writerMovieIds))

  2. 번역

  design

  - movie
    - title
    - plot
  - writer
  - director
  - actor


  api

  const translate = (kor:string):string => {
    const eng = await api(kor)
    return eng
  }

  data
  
  const movieKor = {
    title: titleKor
    plot: plotKor
  }
  const titleKor = translate(Title)
  const plotKor = translate(Plot)

  1:1
  const moviesKor = readFile('./moviesKor.json')
  moviesKor[movieId] = movieKor
  


  1:N
  const actorsKor = readFile('./actorsKor.json')
  const directorsKor = readFile('./directorsKor.json')
  const writersKor = readFile('./writersKor.json')

  if(!actorsKor[actor]){
    actorsKor[actor] = actorKor
  }
  if(!directorsKor[director]){
    directorsKor[director] = directorKor
  }
  if(!writersKor[writer]){
    writersKor[writer] = writerKor
  }
  
  */
};
