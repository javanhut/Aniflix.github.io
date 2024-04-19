"use client";
import { Container, Row } from "react-bootstrap";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image"
// import Image from "next/image";

export default function CardList({ card_items }) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center  items-center overflow-x-auto  scrollbar-hide">
        {card_items && card_items.map((card, index) => (
          <div key={card.id || index} className="flex-none w-56">
            <Card className=" relative w-full h-full justify-center ">
              <div className="relative w-full h-36">
                <Image
                  removeWrapper
                  src={card.src}
                  alt={card.card_name}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <CardFooter className="absolute inline-block align-bottom bg-transparent -bottom-5 z-1  text-cyber-yellow font-bold text-md text-justify text-start">
                <p>{card.card_name}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}