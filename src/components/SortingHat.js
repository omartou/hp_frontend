import React from "react";
import {
  Hat,
  Banner,
  SortingHatContainer,
  SortingHatInfo,
  ChangableBanner,
} from "../styled_components/SortingHatComponents";
import Content from "../styled_components/Content";
import GryffindorBanner from "../images/GryffindorBanner.png";
import SlytherinBanner from "../images/SlytherinBanner.png";
import HufflepuffBanner from "../images/HufflepuffBanner.png";
import RavenclawBanner from "../images/RavenclawBanner.png";
import SortingHatTalks from "../images/SortingHatTalks.png";
import { Link } from "react-router-dom";

export default function SortingHat(props) {
  const getHouse = function () {
    let targetField = document.querySelector("#houseField");
    let changableBanners = document.querySelectorAll(".changableBanner");
    let hat = document.querySelector("#hat");
    let house = getRandomHouse();

    targetField.innerText = house;
    targetField.style.opacity = "100%";

    hat.style.backgroundImage = `url(${SortingHatTalks})`;
    hat.style.pointerEvents = "none";
    changeBanners(changableBanners, house);
  };

  const changeBanners = function (banners, newBanner) {
    let bannerImgs = {
      Gryffindor: GryffindorBanner,
      Slytherin: SlytherinBanner,
      Hufflepuff: HufflepuffBanner,
      Ravenclaw: RavenclawBanner,
    };
    for (let banner of banners) {
      // this line should be uncommented and next one should be removed
      banner.style.backgroundImage = `url(${bannerImgs[newBanner]})`;
      //banner.style.backgroundColor = newBanner;
      banner.style.opacity = "100%";
    }
  };

  const getRandomHouse = function () {
    let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

    return houses[Math.floor(Math.random() * houses.length)];
  };

  return (
    <Content>
      <SortingHatContainer>
        <Banner>
          <ChangableBanner className="changableBanner"></ChangableBanner>
        </Banner>
        <Hat id="hat" onClick={getHouse}>
          <SortingHatInfo id="houseField"></SortingHatInfo>
        </Hat>
        <Banner>
          <ChangableBanner className="changableBanner"></ChangableBanner>
        </Banner>
      </SortingHatContainer>
      <Link to="/wands" className="nextButton">
        Next
      </Link>
    </Content>
  );
}
