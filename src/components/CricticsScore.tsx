import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CricticsScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="10px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CricticsScore;
