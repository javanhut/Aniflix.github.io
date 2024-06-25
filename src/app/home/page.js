"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Account from '../components/accountSettings'
import AniflixNav from '../components/navbar'
import { kaiju_n8, mashle, one_piece_banner, sl_banner, tsukimichi, One_Piece_Anime_Logo, solo_leveling, tsukimichi_moonlit, mmm, slimerimuru} from "../images/images";
import CarouselBanner from '../components/carouselBanner'
import Image from "next/image";
import CardList from '../components/cardList'
import { Carousel, Container, Row } from 'react-bootstrap'

function Home() {
    const home_nav_items = [
        { name: "Tv Shows", link: "shows", styling: "", lstyle: "" },
        { name: "Movies", link: "movies", styling: "", lstyle: "" },
        { name: "New Releases", link: "new-releases", styling: "", lstyle: "text-black" },
        { name: "Recently Watched", link: "recently-watched", styling: "", lstyle: "" },
        {component: <Account account_name="User" image=""/>}
    ];
    const images_carousel_items = [
        { src: kaiju_n8, caption: "Kaiju no.8", description: "" },
        { src: mashle, caption: "Mashle Magic and Muscles", description: "" },
        { src: one_piece_banner, caption: "One Piece", description: "" },
        { src: sl_banner, caption: "Solo Leveling", description: "" },
        { src: tsukimichi, caption: "Tsukimichi Moonlight Fantasy", description: "" },
    ];
    const card_main = [
        { card_name: "One Piece", src: One_Piece_Anime_Logo },
        { card_name: "Solo leveling", src: solo_leveling },
        { card_name: "Tsukimichi-Moonlit Fantasy", src: tsukimichi_moonlit},
        { card_name: "Mashle Magic and Muscles", src: mmm },
        {card_name: "Reincarnated as a Slime", src: slimerimuru}
    ]
    return (<>
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={home_nav_items} />
            </div>
            <CarouselBanner banner_items={images_carousel_items} />
            <div>
                <Container fluid>
                    <Carousel className="w-screen">
                        <div><h1 className="container inline-block align-baseline justify-text justify-center indent-5 text-cyber-yellow border-2 border-cyber-yellow w-full bg-soft-grey">Popular Anime</h1></div>
                        <CardList card_items={card_main} />
                    </Carousel>
                </Container>
            </div>
        </div>
    </>);
}

export default Home;