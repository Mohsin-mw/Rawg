import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
const GamesGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={{ sm: 5, md: 10, lg: 10, xl: 10 }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GamesGrid;
