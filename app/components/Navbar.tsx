"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import { MdAdminPanelSettings } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter, SiNativescript } from "react-icons/si";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navbarItemStyle = (isActive: boolean) => ({
    color: isActive ? '#5166EE' : 'inherit',
    fontWeight: isActive ? 'bold' : '600',
    fontSize: isActive ? '1.1rem' : '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  });

  // Function to determine framework label based on path
  const getFrameworkLabel = () => {
    if (pathname.startsWith('/docs/react-sdk')) return 'React';
    if (pathname.startsWith('/docs/react-native-sdk')) return 'React Native';
    if (pathname.startsWith('/docs/flutter-sdk')) return 'Flutter';
    return 'Frameworks'; // Default label
  };

  const menuItems = ["Introduction", "Dashboard"];

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: ["flex", "justify-center", "py-2"],
      }}
    >
      {/* Left-aligned brand */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mr-4 gap-1 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/logo/okto-icon.png" // Path to the image
            alt="Okto Logo"
            width={40} // Image width
            height={40} // Image height
          />
          <p className="hidden sm:block font-bold text-inherit text-2xl">Okto</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center-aligned menu items */}
      <NavbarContent justify="center" className="hidden sm:flex gap-8">
        <NavbarItem
          style={navbarItemStyle(pathname.startsWith("/docs/introduction-to-okto"))}
          onClick={() => router.push("/docs/introduction-to-okto/okto-universe")}
        >
          Introduction
        </NavbarItem>
        <NavbarItem
          style={navbarItemStyle(pathname.startsWith("/docs/developer-admin-dashboard"))}
          onClick={() => router.push("/docs/developer-admin-dashboard/learn")}
        >
          Dashboard
        </NavbarItem>
        <NavbarItem>
          <Dropdown backdrop="blur">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<ChevronDown />}
                  radius="sm"
                  variant="light"
                  style={navbarItemStyle(
                    pathname.startsWith("/docs/react-sdk") ||
                      pathname.startsWith("/docs/react-native-sdk") ||
                      pathname.startsWith("/docs/flutter-sdk")
                  )}
                >
                  {getFrameworkLabel()}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Framework options"
              // className="w-[340px]"
              // itemClasses={{
              //   base: "gap-4",
              // }}
            >
              <DropdownItem
                key="react"
                onPress={() => router.push("/docs/react-sdk/getting-started/overview-okto-react")}
                startContent={<FaReact/>}
              >
                React
              </DropdownItem>
              <DropdownItem
                key="react-native"
                onPress={() => router.push("/docs/react-native-sdk/getting-started/overview-okto-react-native")}
                startContent={<TbBrandReactNative/>}
              >
                React Native
              </DropdownItem>
              <DropdownItem
                key="flutter"
                onPress={() => router.push("/docs/flutter-sdk/getting-started/overview-okto-flutter")}
                startContent={<SiFlutter/>}
              >
                Flutter
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Right-aligned search bar and icons */}
      <NavbarContent justify="end" className="ml-10">
        <Button color="secondary" variant="flat" startContent={<MdAdminPanelSettings size={"1.5rem"}/>}>
          Developer Dashboard
        </Button>
        <Button isIconOnly aria-label="Discord Icon" variant="light" onPress={() => router.push("https://discord.com/invite/okto-916349620383252511")}>
          <FaDiscord size={"2em"} />
        </Button>
        <Button isIconOnly aria-label="Twitter Icon" variant="light" onPress={() => router.push("https://x.com/okto_web3")}>
          <FaXTwitter size={"2em"} />
        </Button>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
