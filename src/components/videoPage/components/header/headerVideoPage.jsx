import React from "react";
import ChangeTheme from "../../../menu/components/changeTheme/ChangeTheme";
import Logo from "../../../menu/components/logo/logo";
import { StyledMenu } from "../../../menu/styledMenu";

export default function HeaderVideoPage() {
  return (
    <StyledMenu>
      <Logo />
      <ChangeTheme />
    </StyledMenu>
  );
}
