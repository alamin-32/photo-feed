import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <h1>{dictionary.views}</h1>
    </div>
  );
}
