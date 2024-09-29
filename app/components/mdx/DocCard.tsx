"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { ReactNode } from "react";

interface DocCardPropType {
  icon: ReactNode;
  title: string;
  body: string;
  link: string;
  linkText: string;
}

export default function DocCard({ icon, title, body, link, linkText }: DocCardPropType) {
  return (
    <Card
      className="p-3 w-full"
      style={{
        color: "var(--doc-card-text) !important",
      }}
      disableRipple
    >
      <CardHeader className="flex-col items-start gap-2">
        <Button isIconOnly variant="ghost" disabled>
          {icon}
        </Button>
        <p className="font-semibold text-lg">
          {title}
        </p>
      </CardHeader>
      <CardBody>
        {body}
        <br />
      </CardBody>
      <CardFooter>
        <Link href={link} className="flex items-center gap-1 text-sm no-underline text-[#5166EE]">
          <span>{linkText}</span> <ArrowRight size={"1rem"} />
        </Link>
      </CardFooter>
    </Card>
  );
}
