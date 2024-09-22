import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react';

/**
 * A component that displays information about a single NBA game.
 *
 * @param {{ homeTeam: string, visitorTeam: string }} game - the game object
 * @returns {React.ReactElement} a React component that displays the game
 * information.
 */
const Game = ({ game }) => (
  <Card >
    <CardHeader title={`${game.homeTeam} vs ${game.visitorTeam}`} />
    <CardContent>
      
    </CardContent>
  </Card>
);

export default Game;