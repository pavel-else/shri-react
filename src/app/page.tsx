import { FilmDetails } from "./components/FilmDetails/FilmDetails";
const filmDetails: { title: string;  genre: 'comedy' | 'horror', seasonsCount: number } = {
  title: 'The Simpsons',
  genre: 'comedy',
  seasonsCount: 299
};

export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails title={filmDetails.title} genre={filmDetails.genre} seasonsCount={filmDetails.seasonsCount} />
      <footer />
    </div>
  );
};
