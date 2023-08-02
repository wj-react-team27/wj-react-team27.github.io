import { styled } from "styled-components";
import { CardLinkMedium } from "../components/card";
import { CardLinkMediumProps } from "../types/cardTypes";
import { color } from "../styles";

interface IcardCumstomProps extends CardLinkMediumProps {
  onClick: () => void;
  isSelected: boolean;
}

const CardCustomSelected = styled.div`
  position: relative;
  &::after {
    content: "✓";
    font-size: 24px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(0, -50%);
    color: ${color.primary500};
  }
`;

const CardCustom = ({
  imageUrl,
  description,
  onClick,
  isSelected,
}: IcardCumstomProps) => {
  return (
    <div onClick={onClick}>
      {isSelected ? (
        <CardCustomSelected>
          <CardLinkMedium imageUrl={imageUrl} description={description} />
        </CardCustomSelected>
      ) : (
        <CardLinkMedium imageUrl={imageUrl} description={description} />
      )}
    </div>
  );
};

export default CardCustom;
