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
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticsScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="small" margin="10px 0">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
