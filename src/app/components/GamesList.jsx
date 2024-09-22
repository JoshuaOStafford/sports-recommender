import React, { useState, useEffect } from 'react';
import Game from './Game';
import Box from '@mui/material/Box';
import DateSelector from './DateSelector';
import RulesToggle from './RulesToggle';

/**
 * Fetches a list of NBA games for a given date and displays them
 * in a list.
 *
 * @returns {React.ReactElement} A React component that displays
 * a list of NBA games for the given date.
 */
const GamesList = () => {
  const [gamesData, setGamesData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('2024-12-25');
  const [rules, setRules] = useState('none');

  useEffect(() => {
  /**
   * Fetches a list of NBA games for the given date from the server,
   * then parses the response and updates the component state with
   * the list of games.
   *
   * @throws {Error} If the fetch request failed.
   */
    const fetchGamesData = async () => {
      try {
        const response = await fetch(`http://localhost:5005/api?date=${selectedDate}&rules=${rules}`);
        const gamesDataFromAPI = await response.json();
        const gamesList = gamesDataFromAPI.map((gameData) => ({
          id: gameData.id,
          homeTeam: gameData.home_team.abbreviation,
          visitorTeam: gameData.visitor_team.abbreviation,
        }));
        setGamesData(gamesList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGamesData();
  }, [selectedDate, rules]);

  return (
    <Box
      sx={{
        maxWidth: '50%',
        margin: '0 auto',
        '& > *': {
          margin: '16px 0',
        },
      }}
    >
      <h1>NBA Games on {selectedDate}</h1>
      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <RulesToggle rules={rules} setRules={setRules} />

      {gamesData.map((gameData) => <Game key={gameData.id} game={gameData} />)}
    </Box>
  );
};

export default GamesList;

