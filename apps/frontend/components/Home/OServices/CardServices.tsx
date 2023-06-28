import { Card, Text, Badge, Button, Group, Avatar } from "@mantine/core";
import Image from "next/image";
interface CardServicesProps {
  image: string;
  description: string;
}

function CardServices(props: CardServicesProps) {
  return (
    <>
      <div className="rounded-full w-full h-52 md:h-80 flex flex-col">
        {/*       <div className=""> */}
        <div className="relative w-full h-36 md:h-64">
          <Image
            className="rounded-2xl object-cover cursor-pointer"
            src={props.image}
            alt={props.description}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className=" text-black px-5 font-bold text-center text-sm">
          {props.description}
        </p>
        {/*  </div> */}
      </div>
    </>
  );
}

export default CardServices;
