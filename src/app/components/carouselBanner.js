"use client";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarouselBanner({ banner_items }) {
    return (
        <Carousel>
            {banner_items.map((item, index) => (
                <CarouselItem key={index}>
                    <Image className="w-screen h-[500px] object-cover" src={item.src} alt={item.caption} placeholder="blur" />
                    <CarouselCaption>
                        <h3>{item.caption}</h3>
                        <p>{item.description}</p>
                    </CarouselCaption>
                </CarouselItem>
            ))}
        </Carousel>
    );
}
