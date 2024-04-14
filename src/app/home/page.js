"use client";
import { Image } from "@nextui-org/react";
import AniflixNav from "@/components/navbar";
import { Carousel, CarouselItem, Container, Row } from "react-bootstrap";
import { mashle, one_piece_banner, sl_banner, tsukimichi } from "@/images/images";
import CarouselBanner from "@/components/carouselBanner";
import kaiju_n8 from "@/images/kaiju_n8.jpg"

function Home() {
    const home_nav_items = [
        { name: "Tv Shows", link: "shows", styling: "", lstyle: "" },
        { name: "Movies", link: "movies", styling: "", lstyle: "" },
        { name: "New Releases", link: "new-releases", styling: "", lstyle: "text-black" },
        { name: "Recently Watched", link: "recently-watched", styling: "", lstyle: "" },
    ];
    const images_carousel_items = [
        {src: kaiju_n8, caption: "Kaiju no.8", description:""},
        {src: mashle, caption: "Mashle Magic and Muscles", description:""},
        {src: one_piece_banner, caption: "One Piece", description:""},
        {src: sl_banner, caption: "Solo Leveling", description:""},
        {src: tsukimichi, caption: "Tsukimichi Moonlight Fantasy", description:""},
    ];
    return (<>
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={home_nav_items} />
            </div>
            <Container>
                <Row>
                <CarouselBanner banner_items={images_carousel_items}/>
                </Row>
            </Container>
        </div>
    </>);
}

export default Home;