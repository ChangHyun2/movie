import Header from "../components/Header";

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header navigation />
      {children}
    </>
  );
}
