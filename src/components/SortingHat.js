import React from 'react'
import {Hat, Banner, SortingHatContainer, SortingHatInfo, ChangableBanner} from '../styled_components/SortingHatComponents';
import Content from "../styled_components/Content";


export default function SortingHat(props) {

    const getHouse = function() {
        let targetField = document.querySelector("#houseField");
        let ChangableBanners = document.querySelectorAll(".changableBanner");
        let house = getRandomHouse();

        targetField.innerText = house;
        targetField.style.opacity = "100%";
        // red should be changed to house
        changeBanners(ChangableBanners, "red");
    }

    const changeBanners = function(banners, newBanner) {
        for (let banner of banners) {
            // this line should be uncommented and next one should be removed
            //banner.style.backgroundImage = `url(${newBanner})`
            banner.style.backgroundColor = newBanner;
            banner.style.opacity = "100%"
        }
    }

    const getRandomHouse = function() {
        let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

        return houses[Math.floor(Math.random()*houses.length)];
    }

    return (
        <Content>
        <SortingHatContainer>
            <Banner>
                <ChangableBanner className="changableBanner"></ChangableBanner>
            </Banner>
            <Hat onClick={getHouse}>
                <SortingHatInfo id="houseField"></SortingHatInfo>
            </Hat>
            <Banner>
                <ChangableBanner className="changableBanner"></ChangableBanner>
            </Banner>
        </SortingHatContainer>
        </Content>
    )
}
