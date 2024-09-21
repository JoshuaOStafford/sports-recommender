# Sports Recommender

## Overview

In this YouTube Series, we will be building a Sports Recommendation web application with the help of Codeium Command using React, Next.js, Express, and the BallDontLie API.

## Description

The Application takes in a date input and viewing preferences (e.g. I like to watch NBA games when both teams are playoff contenders), and displays all matching events.

## Series Outline

We will be starting with NBA games, and hard coded filters. Throughout the series we will extend the project until it can handle multiple sports and allow users to create their own filters with the help of AI.

## Setup

### Step 1: Start Next.js Server

Run `npm run dev` in `sports-recommender` to start the Next.js server.

### Step 2: Install Dependencies

Run `npm install express nodemon` in `sports-recommender/server` to install the required dependencies.

## Tutorial Episode

This tutorial episode starts with a bootstrapped Next.js project and ends with an application that pulls all NBA games for an inputted date and optionally displays only matchups between two playoff teams from last year.

## Steps

1. Log all NBA games for the season opener, October 22nd, 2024, in the console.
2. Create GameList & Game Components to display season opener games.
3. Create DateSelector component and display games from other days.
4. Create playoffTeams2023 filter and log filtered games to the console.
5. Create Rules component for toggling Previous Year Playoff Teams Only filter.
6. Refactor server to utilize rules query.