import React, { useEffect } from "react";
import "./HomePage.css";

import {
  HarryWand,
  HermioneWand,
  DracoWand,
  VoldemortWand,
} from "../styled_components/index";
import {
  WandContainer,
  WandContainerMid,
  WandContainerLeft,
  WandContainerRight,
} from "../styled_components/WandContainers";

const jumpWand = (e) => {
  console.log(e.target);
};

export default function Wand(props) {
  useEffect(() => {
    props.setTitle("Wands");
  }, [props]);

  return (
    <WandContainer>
      <WandContainerLeft></WandContainerLeft>
      <WandContainerMid>
        <HarryWand onMouseOver={jumpWand} />
        <HermioneWand onMouseOver={jumpWand} />
        <VoldemortWand onMouseOver={jumpWand} />
        <DracoWand onMouseOver={jumpWand} />
      </WandContainerMid>
      <WandContainerRight></WandContainerRight>
    </WandContainer>
  );
}
