"use client";
import {Card, CardHeader, CardBody} from "@nextui-org/react"
import Image from "next/image";


export default CardList({card_items}){
    return(
        <Card>
        {card_items.map((card, index) =>(
            <div key={index}>
                <CardHeader>{card.card_name}</CardHeader>
                <CardBody>
                    <Image src={card.src} />
                </CardBody>
            </div>
        ))}
        </Card>
    )
}