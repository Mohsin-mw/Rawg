import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" size="sm">
      <Image src={game.background_image} objectFit="cover" />
      <CardBody>
        <Heading size="md">Living room Sofa</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
