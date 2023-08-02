import { CardLinkMedium } from "../components/card";
import { CardLinkMediumProps } from "../types/cardTypes";

interface icardCumstomProps extends CardLinkMediumProps {
  onClick: () => void;
}

const CardCustom = ({ imageUrl, description, onClick }: icardCumstomProps) => {
  return (
    <div onClick={onClick}>
      <CardLinkMedium imageUrl={imageUrl} description={description} />
    </div>
  );
};

export default CardCustom;
