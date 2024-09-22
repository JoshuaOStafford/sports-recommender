import React from 'react';
import { Button } from '@mui/material';

const RulesToggle = ({ rules, setRules }) => (
  
    <Button
      variant="contained"
      color={rules === 'none' ? 'grey' : 'success'}
      onClick={() => setRules(rules === 'none' ? 'playoff_contenders' : 'none')}
    >
      'Playoff Contenders Only'
    </Button>
 
);

export default RulesToggle;