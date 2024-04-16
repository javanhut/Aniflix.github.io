"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import AniflixNav from "@/components/navbar";
import { kaiju_n8, mashle, one_piece_banner, sl_banner, tsukimichi, One_Piece_Anime_Logo} from "@/images/images";
import CarouselBanner from "@/components/carouselBanner";
import Image from "next/image";

function Home() {
    const home_nav_items = [
        { name: "Tv Shows", link: "shows", styling: "", lstyle: "" },
        { name: "Movies", link: "movies", styling: "", lstyle: "" },
        { name: "New Releases", link: "new-releases", styling: "", lstyle: "text-black" },
        { name: "Recently Watched", link: "recently-watched", styling: "", lstyle: "" },
    ];
    const images_carousel_items = [
        { src: kaiju_n8, caption: "Kaiju no.8", description: "" },
        { src: mashle, caption: "Mashle Magic and Muscles", description: "" },
        { src: one_piece_banner, caption: "One Piece", description: "" },
        { src: sl_banner, caption: "Solo Leveling", description: "" },
        { src: tsukimichi, caption: "Tsukimichi Moonlight Fantasy", description: "" },
    ];
    return (<>
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={home_nav_items} />
            </div>
            <CarouselBanner banner_items={images_carousel_items} />
            <div>
                <Card>
                    <CardHeader className=" relative bg-eletric-blue  w-full h-full text-center bg-cover">
                        <div className="text-4xl flex text-center font-bold">Most Popular</div>
                    </CardHeader>
                    <CardBody>
                        <Image src={One_Piece_Anime_Logo} />
                    </CardBody>
                </Card>
            </div>
        </div>
    </>);
}

export default Home;