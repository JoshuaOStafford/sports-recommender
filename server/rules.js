const playoffTeams2023 = ['BOS', 'CLE', 'DAL', 'DEN', 'IND', 'LAC', 'LAL', 'MIA', 'MIL', 'MIN', 'NOP', 'NYK', 'OKC', 'ORL', 'PHI', 'PHX'];

const bothPlayoffContendersOnly = (games) => {
  return games.filter(
    (game) =>
      playoffTeams2023.includes(game.home_team.abbreviation) &&
      playoffTeams2023.includes(game.visitor_team.abbreviation)
  );
}

module.exports = { bothPlayoffContendersOnly };
