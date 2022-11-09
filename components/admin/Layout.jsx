import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { MenuModule } from "./MenuModule";
import { MenuUser } from "./MenuUser";
import { MenuCompany } from "./MenuCompany";
import Link from "next/link";

export default function LayoutManage({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      className="bg-gray-50"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
          <MenuCompany />
          <MenuModule />
        </Navbar>
      }
      header={
        <Header height={70}>
          <div className="flex items-center h-full px-3">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="flex-1">
              <Link href="/">
                <Image
                  src="/eurogain.svg"
                  alt="Eurogain"
                  width={120}
                  height={70}
                />
              </Link>
            </div>
            <MenuUser />
          </div>
        </Header>
      }
    >
      <div>{children}</div>
    </AppShell>
  );
}
