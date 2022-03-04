import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const printMatchResult = (match: string[]): MatchResult => {
  if (match[5] === MatchResult.HomeWin) {
    return MatchResult.HomeWin;
  }

  if (match[5] === MatchResult.AwayWin) {
    return MatchResult.AwayWin;
  }

  return MatchResult.Draw;
};

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Wins: ${manUnitedWins}`);
