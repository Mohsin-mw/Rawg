import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CricticsScore from "./CricticsScore";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit="cover"
      />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticsScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
