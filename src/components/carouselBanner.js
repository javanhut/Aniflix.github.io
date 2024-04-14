"use client";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import Image from "next/image";
export default function CarouselBanner({ banner_items }) {
    const items = banner_items;
    return (
    <>
        <Carousel>
            {items.map((item, index) => (
                <CarouselItem key={index}>
                    <Image src={item.src}/>
                    <CarouselCaption>
                        <h3>{item.caption}</h3>
                        <p>{item.description}</p>
                        </CarouselCaption>
                </CarouselItem>
            ))}
        </Carousel>
    </>)
    ;
}