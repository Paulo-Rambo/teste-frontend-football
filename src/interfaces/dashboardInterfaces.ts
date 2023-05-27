interface ICountry {
  code: string | null;
  flag: string | null;
  name: string | null;
}

interface ILeague {
  id: number | null;
  name: string | null;
  type: string | null;
  logo: string | null;
}

interface ITeam {
  id: number | null;
  name: string | null;
  code: string | null;
  country: string | null;
  founded: number | null;
  national: false | null;
  logo: string | null;
}

interface Iteams {
  team: ITeam;
}

interface IPlayer {
  id: number | null;
  name: string | null;
  age: number | null;
  nationality: string | null;
}
interface IPlayed {
  total: number | null;
}
interface IWins {
  total: number | null;
}
interface IDraws {
  total: number | null;
}
interface ILoses {
  total: number | null;
}
interface IFixtures {
  played: IPlayed;
  wins: IWins;
  draws: IDraws;
  loses: ILoses;
}
interface ITimes {
  total: number | null;
  percentage: number | null;
}
interface IGoals {
  "0-15": ITimes;
  "16-30": ITimes;
  "31-45": ITimes;
  "46-60": ITimes;
  "61-75": ITimes;
  "76-90": ITimes;
  "91-105": ITimes;
  "106-120": ITimes;
}
interface ILineups {
  formation: string | null;
  played: number | null;
}

interface IDashboard {
  loading: boolean;
  error: string | null;
  countryList: ICountry[];
  filtredCountryList: ICountry[];
  seasonList: number[];
  selectedCountry: string;
  leagueBySeasonAndCountryList: ILeague[];
  selectedYear: string;
  selectedTeamsList: Iteams[];
  filteredTeamsList: Iteams[];
  selectedPlayersList: IPlayer[];
  filteredPlayersList: IPlayer[];
  selectedLeagueId: string;
  lineups: ILineups[];
  goals: IGoals;
  fixtures: IFixtures;
  notFound: boolean;
}
// const initialState: IDashboard = {
//   loading: true,
//   error: null,
//   countryList: [],
//   filtredCountryList: [],
//   seasonList: [],
//   selectedCountry: "",
//   leagueBySeasonAndCountryList: [],
//   selectedYear: "",
//   selectedTeamsList: [],
//   filteredTeamsList: [],
//   selectedPlayersList: [],
//   filteredPlayersList: [],
//   selectedLeagueId: "",
//   lineups: [],
//   goals: {},
//   fixtures: {},
//   notFound: false,
// };
