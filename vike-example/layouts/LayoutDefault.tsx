import { PropsWithChildren } from "react";

import logoUrl from "../assets/logo.svg";
import { AppShell, Burger, Group, Image, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "../components/Link";
import theme from "./theme";
import "@/app/styles/index.css";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";

export default function LayoutDefault({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications />
      <NavigationProgress aria-label="Navigation" color="violet" />
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <a href="/">
              {" "}
              <Image h={50} fit="contain" src={logoUrl} />{" "}
            </a>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Link href="/" label="Welcome" />
          <Link href="/todo" label="Todo" />
          <Link href="/star-wars" label="Data Fetching" />
        </AppShell.Navbar>
        <AppShell.Main> {children} </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
