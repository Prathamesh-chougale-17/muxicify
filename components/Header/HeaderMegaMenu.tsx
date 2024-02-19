"use client";
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Menu,
  Avatar,
} from "@mantine/core";
//   import { Esport } from '@mantinex/mantine-logo';
import Esport from "@/public/android-chrome-192x192.png";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import HoverButton from "../HoverButton/HoverButton";
import { useSession } from "next-auth/react";
export function HeaderMegaMenu() {
  const [drawerOpened, isDrawerOpened] = React.useState(false);
  const toggleDrawer = () => isDrawerOpened(!drawerOpened);
  const closeDrawer = () => isDrawerOpened(false);
  const [] = useDisclosure(false);
  const { status, data: session } = useSession();
  const image = session?.user?.image;
  return (
    <Box pb={10}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <Esport size={30} /> */}
          <Image src={Esport} height={80} width={80} alt="Esport" />
          <Group visibleFrom="sm">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/music" className={classes.link}>
                Musics
              </Link>

              <Link href="/feedback" className={classes.link}>
                Feedback
              </Link>
              {/* write code for stylish background in classname */}
            </Group>
            {status === "authenticated" ? (
              <Menu>
                <Menu.Target>
                  <Avatar src={image} className={classes.Avatar} />
                </Menu.Target>
                <Menu.Dropdown>
                  <Link href="/api/auth/signout">
                    <Button>Sign out</Button>
                  </Link>
                </Menu.Dropdown>
              </Menu>
            ) : (
              // <HoverButton />
              <Link href="/api/auth/signin">
                <Button className="bg-blue-500">Sign in</Button>
              </Link>
            )}
            {/* <HoverButton/> */}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
        className="bg-black"
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/music" className={classes.link}>
            Music
          </Link>
          <Link href="/feedback" className={classes.link}>
            Feedback
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Link href="/api/auth/signup">
              <Button className="bg-blue-500">Sign up</Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
