"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Switch
} from "@nextui-org/react";
import { FaDiscord, FaXTwitter, FaGithub } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"
import { MdAdminPanelSettings } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (isSelected: boolean) => {
    setTheme(isSelected ? 'dark' : 'light');
  };

  const divStyle = (isActive: boolean) => ({
    color: isActive ? '#5166EE' : 'inherit',
    fontWeight: isActive ? 'bold' : '600',
    fontSize: isActive ? '1.1rem' : '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  });

  const getFrameworkLabel = () => {
    if (pathname.startsWith('/docs/react-sdk')) return 'React';
    if (pathname.startsWith('/docs/react-native-sdk')) return 'React Native';
    if (pathname.startsWith('/docs/flutter-sdk')) return 'Flutter';
    if (pathname.startsWith('/docs/api-reference')) return 'API Reference';
    return 'Frameworks';
  };

  const menuItems = ["Introduction", "Dashboard"];

  return (
    <Navbar className="test" isBordered onMenuOpenChange={setIsMenuOpen}>
      {/* Left-aligned brand and items */}
      <div className="flex items-center justify-start gap-8">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-12 cursor-pointer">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image
                src="/logo/okto-icon.png"
                alt="Okto Logo"
                width={35}
                height={35}
              />
              <p className="hidden sm:block font-bold text-inherit text-2xl">Okto Docs</p>
            </div>
          </Link>
          <div className="flex gap-8 items-center">
            <div
              style={divStyle(pathname.startsWith("/docs/introduction-to-okto"))}
            >
              <Link href="/docs/introduction-to-okto/okto-universe">
                Introduction
              </Link>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<ChevronDown />}
                  radius="sm"
                  variant="light"
                  style={divStyle(
                    pathname.startsWith("/docs/react-sdk") ||
                    pathname.startsWith("/docs/react-native-sdk") ||
                    pathname.startsWith("/docs/flutter-sdk") ||
                    pathname.startsWith("/docs/api-reference")
                  )}
                >
                  {getFrameworkLabel()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Framework options">
                <DropdownItem
                  key="react"
                  startContent={<FaReact />}
                  href="/docs/react-sdk/getting-started/overview-okto-react"
                >
                  React
                </DropdownItem>
                <DropdownItem
                  key="react-native"
                  startContent={<TbBrandReactNative />}
                  href="https://sdk-docs.okto.tech/sdk-reference/react-native/setTheme"
                >
                  React Native
                </DropdownItem>
                <DropdownItem
                  key="flutter"
                  startContent={<SiFlutter />}
                  href="https://sdk-docs.okto.tech/sdk-reference/flutter/setup"
                >
                  Flutter
                </DropdownItem>
                <DropdownItem
                  key="api"
                  startContent={<TbApi />}
                  href="https://sdk-docs.okto.tech/api-reference/client/authenticate"
                >
                  API Reference
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div
              style={divStyle(pathname.startsWith("/showcase"))}
            >
              <Link href="/docs/react-sdk/example-apps/example-repos">
                Showcase
              </Link>
            </div>
          </div>
        </NavbarBrand>
      </div>

      {/* Right-aligned search bar and icons */}
      <div className="flex gap-8">
        <Button color="secondary" variant="flat" startContent={<MdAdminPanelSettings size={"1.5rem"} href="https://docs.google.com/forms/d/e/1FAIpQLSerKX9kZty74OKOUeF1Zpq1NdegY0Bxm8uRq-3VjwgsBPuPrQ/alreadyresponded" />}>
          Developer Dashboard
        </Button>
        <Tooltip content="Coming soon" color="primary">
          <Button color="warning" variant="flat">
            View Demo
          </Button>
        </Tooltip>
        <Button isIconOnly aria-label="Discord Icon" variant="light">
          <Link href="https://discord.com/invite/okto-916349620383252511">
            <FaDiscord size={"2em"} />
          </Link>
        </Button>
        <Button isIconOnly aria-label="Twitter Icon" variant="light">
          <Link href="https://x.com/okto_web3">
            <FaXTwitter size={"2em"} />
          </Link>
        </Button>
        <Button isIconOnly aria-label="Github Icon" variant="light">
          <Link href="https://github.com/okto-hq">
            <FaGithub size={"2em"} />
          </Link>
        </Button>
        <Switch
          onChange={(e) => handleThemeChange(e.target.checked)}
          size="sm"
          color="secondary"
          className="justify-end"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        />
      </div>

      {/* Mobile menu */}
      <NavbarMenu className="px-4 sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const MoonIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" />
  </svg>
);

const SunIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
  </svg>
);