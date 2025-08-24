export const GAMES: Array<{
  name: string;
  link: string;
  finished: boolean;
  haveAllAchievements: boolean;
  finishedAt: Date | null;
}> = [
  {
    name: "Stronghold Crusader: Definitive Edition",
    link: "https://store.steampowered.com/app/3024040/Stronghold_Crusader_Definitive_Edition/",
    finished: false,
    haveAllAchievements: false,
    finishedAt: null,
  },
  {
    name: "Factorio",
    link: "https://factorio.com/",
    finished: false,
    haveAllAchievements: false,
    finishedAt: null,
  },
];
