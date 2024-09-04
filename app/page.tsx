"use client";

import Link from "next/link";
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Play, ChevronRight, StickyNote, Shield } from 'lucide-react';
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <div className="mb-12">
            <p className="text-3xl font-bold mb-3">
              Build With Okto
            </p>
            <p>
              Find all the guides and resources you need to build on Okto.
            </p>
          </div>
          <Image
            src="/images/okto-key-visual.webp"
          />
          <div className="flex justify-center gap-10">
            <Card className="p-3 w-1/2" isPressable disableRipple onPress={() => { router.push("/docs/introduction-to-okto/okto-universe") }}>
              <CardHeader className="flex-col items-start gap-2"> 
                <Button isIconOnly variant="ghost" disabled>
                  <StickyNote />
                </Button>
                <p className="font-bold text-lg">
                  Introduction to Okto
                </p>
              </CardHeader>
              <CardBody>
                Get started with our end to end tutorials and quickstart guides across all Okto functionalities.
              </CardBody>
            </Card>
            <Card className="p-3 w-1/2" isPressable disableRipple onPress={() => { router.push("/docs/developer-admin-dashboard/learn") }}>
              <CardHeader className="flex-col items-start gap-2">
                <Button isIconOnly variant="ghost" disabled>
                  <Shield />
                </Button>
                <p className="font-bold text-lg">
                  Using Developer Dashboard
                </p>
              </CardHeader>
              <CardBody>
                Use the developer dashboard to customize your UI to onboard a billion users on your platform.
              </CardBody>
            </Card>
          </div>

          <div className="mt-20">
            <p className="text-4xl flex items-center font-bold text-[#5166EE]">
              Get Started <ChevronRight size={"2.5rem"}/>
            </p>
            <div className="flex gap-6 justify-start mt-8">
              <Card
                radius="lg"
                className="border-none"
                isPressable
                disableRipple
                onPress={() => { router.push("/docs/react-sdk")}}
              >
                <CardBody className="flex-row items-center gap-4">
                  <FaReact size={"5em"} />
                  <div>
                    Get started with the Okto SDK in React
                  </div>
                </CardBody>
              </Card>
              <Card
                radius="lg"
                className="border-none"
                isPressable
                disableRipple
                onPress={() => { router.push("/docs/react-native-sdk")}}
              >
                <CardBody className="flex-row items-center gap-4">
                  <TbBrandReactNative size={"5em"} />
                  <div>
                    Get started with the Okto SDK in React Native
                  </div>
                </CardBody>
              </Card>
              <Card
                radius="lg"
                className="border-none"
                isPressable
                disableRipple
                onPress={() => { router.push("/docs/flutter-sdk")}}
              >
                <CardBody className="flex-row items-center gap-4">
                  <SiFlutter size={"5em"} />
                  <div>
                    Get started with the Okto SDK in Flutter
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="font-semibold items-center flex justify-center mt-20">
            <div className="text-6xl">
              The Orchestration Layer of Web3
            </div>
            <Image
              src="/images/orchestration-layer.webp"
            />
          </div>
          <div className="font-semibold flex-col justify-center mt-20">
            <div className="w-full text-5xl flex justify-center">
              Join Our Growing Community
            </div>
            <div  className="w-full flex gap-8 justify-center mt-8">
              <Image
                src="/images/telegram.webp"
                onClick={() => { router.push("https://t.me/okto_web3")}}
              />
              <Image
                src="/images/youtube.webp"
                onClick={() => { router.push("https://www.youtube.com/@Okto_Web3")}}
              />
              <Image
                src="/images/discord.webp"
                onClick={() => { router.push("https://discord.com/invite/okto-916349620383252511")}}
              />
              <Image
                src="/images/x.webp"
                onClick={() => { router.push("https://x.com/Okto_web3")}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}