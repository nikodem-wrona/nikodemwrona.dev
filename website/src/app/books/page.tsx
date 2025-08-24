import { BOOKS } from "./consts";

export default async function Books() {
  const books = await BOOKS;

  return (
    <div>
      <main>
        <ul className="list-none pl-2">
          {books.map((book) => (
            <li className="text-sm py-1" key={book.name}>
              <a
                href={book.link}
                className="text-white hover:underline focus:outline-1 focus:outline-white focus:outline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.name}
              </a>
              {book.finished && <span className="text-green-500 ml-2">✓</span>}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
