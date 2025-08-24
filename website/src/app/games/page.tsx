import { GAMES } from "./consts";

export default async function Games() {
  const games = await GAMES;

  return (
    <div>
      <main>
        <ul className="list-none pl-2">
          {games.map((game) => (
            <li className="text-sm py-1" key={game.name}>
              <a
                href={game.link}
                className="text-white hover:underline focus:outline-1 focus:outline-white focus:outline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
