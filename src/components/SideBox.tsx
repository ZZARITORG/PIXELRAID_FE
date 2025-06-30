import styled from "@emotion/styled";
import theme from "../styles/theme";
import { Icons } from "../assets/icons";
import Timer from "./Timer";
import ColorCircleAvatar from "./ColorCircleAvatar";
import { useState } from "react";
import PaletteBox from "./PaletteBox";

const COLORS = {
  black: "#000000",
  white: "#FFFFFF",
  red: "#DC2626",
  orange: "#EA580C",
  yellow: "#FACC15",
  green: "#16A34A",
  blue: "#3B82F6",
  purple: "#8B5CF6",
};

const SideBox = () => {
  const {
    timer_icon: TimerIcon,
    spoide_icon: SpoideIcon,
    lock_icon: LockIcon,
    user_icon: UserIcon,
  } = Icons;
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [showPalette, setShowPallete] = useState<boolean>(false);

  return (
    <SideBoxWrapper>
      <ContentWrapper>
        <ChargeIndicator>1 / 5</ChargeIndicator>
        <TimerWrapper>
          <TimerIcon />
          <Timer />
        </TimerWrapper>
        <PalleteWrapper>
          <ColorCircleAvatar
            isGradient
            color={""}
            onClick={() => setShowPallete(!showPalette)}
          />
          {showPalette && <PaletteBox />}
          {Object.entries(COLORS).map(([name, color]) => (
            <ColorCircleAvatar
              key={name}
              color={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </PalleteWrapper>
        <IconWrapper style={{ marginBottom: "1.125rem" }}>
          <SpoideIcon />
        </IconWrapper>
        <IconWrapper>
          <LockIcon />
        </IconWrapper>
      </ContentWrapper>
      <UserWrapper>
        <UserIcon />
        <UserCount>100명</UserCount>
      </UserWrapper>
    </SideBoxWrapper>
  );
};

export default SideBox;

const SideBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 88px;
  height: 38.75rem;
  padding: 20px 0;
  border-radius: 8px;
  background-color: ${theme.color.neutral.white};
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChargeIndicator = styled.div`
  font: ${theme.typography["body1-1"]};
  color: ${theme.color.neutral.B20};
  margin-bottom: 0.5rem;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 1.875rem;
`;

const PalleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
  margin-bottom: 1.125rem;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.125rem;
  align-items: center;
  justify-content: center;
`;

const UserCount = styled.div`
  font: ${theme.typography["body3-1"]};
  color: ${theme.color.neutral.B20};
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;
