import { Button, Link } from "@nextui-org/react"
import { FaPlus } from "react-icons/fa6";
import Image, { type StaticImageData } from 'next/image';
import DisbursalApp from "@/public/images/DisbursalApp.png"
import Lifafa from "@/public/images/Lifafa.png"
import TelegramBot from "@/public/images/TelegramBot.png"
import Stan from "@/public/images/Stan.webp"
import Oktogram from "@/public/images/Oktogram.png";
import { Metadata } from "next";

interface ShowcaseObject {
    image?: StaticImageData;
    name: string;
    url: string;
}

export const metadata: Metadata = {
    title: 'Showcase',
    description: 'Cool apps made by Okto',
}

export default function Showcase() {
    const showcases: ShowcaseObject[] = [
        {
            image: DisbursalApp,
            name: 'Disbursal App',
            url: 'https://okto-batch-token-disbursal-app.vercel.app/',
        },
        {
            image: Lifafa,
            name: 'Lifafa',
            url: 'https://www.lifafa.fun/',
        },
        {
            image: TelegramBot,
            name: 'Telegram Trading Bot',
            url: 'https://t.me/oktron_bot',
        },
        {
            image: Stan,
            name: 'Stan',
            url: 'https://play.google.com/store/apps/details?id=com.getstan',
        },
        {
            image: Oktogram,
            name: 'Oktogram',
            url: 'https://oktogram.ujwl.in/',
        }
    ];

    return (
        <>
            <div className="flex justify-between mx-16 mt-20">
                <div className="text-6xl font-bold">
                    Cool Apps <br />
                    Made with Okto
                </div>
                <Button as={Link} radius="full" startContent={<FaPlus />} variant="bordered" href="mailto:devrel@coindcx.com">
                    Submit your app
                </Button>


            </div>
            <div className="container mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {showcases.map((showcase) => (
                    <ShowcaseItem key={showcase.url} {...showcase} />
                ))}
            </div>
        </>
    )
}

function ShowcaseItem({
    name,
    url,
    image,
}: ShowcaseObject): React.ReactElement {
    if (image) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="relative flex aspect-[1.91/1] flex-col overflow-hidden rounded-2xl border transition-all hover:border-fd-primary/30"
            >
                <Image
                    alt="Preview"
                    src={image}
                    placeholder="blur"
                    fill
                    sizes="100vw, (min-width: 750px) 500px"
                />
                <p className="z-[2] mt-auto bg-black/50 p-4 text-sm font-medium text-white backdrop-blur-sm">
                    {name}
                </p>
            </a>
        );
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex aspect-[1.91/1] flex-col rounded-2xl border border-transparent p-8 text-center shadow-fd-primary/20 transition-all hover:shadow-fd-primary/30"
            style={{
                backgroundImage:
                    'radial-gradient(closest-side at center, hsl(var(--background)) 89%, transparent 90%),' +
                    'conic-gradient(from 0deg, hsl(var(--background)) 120deg, hsl(var(--primary)), hsl(var(--background)) 240deg),' +
                    'linear-gradient(to right bottom, black, rgb(200,200,200), black)',
                backgroundOrigin: 'border-box',
                boxShadow: 'inset 0px 12px 28px 4px var(--tw-shadow-color)',
                backgroundClip: 'padding-box, padding-box, border-box',
            }}
        >
            <p className="mb-6 text-fd-muted-foreground">{new URL(url).hostname}</p>
            <p className="text-3xl font-semibold">{name}</p>
        </a>
    );
}

function createMetadata(arg0: { title: string; description: string; openGraph: { url: string; }; }) {
    throw new Error("Function not implemented.");
}
