import { Avatar, Menu, ThemeIcon } from "@mantine/core";
import { IconUserCircle, IconSettings, IconLogout } from "@tabler/icons";
import Link from "next/link";

export function MenuUser() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar color="brand">W</Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href="/profile">
          <Menu.Item
            icon={
              <ThemeIcon variant="light" color="brand">
                <IconUserCircle size={16} />
              </ThemeIcon>
            }
          >
            My Profile
          </Menu.Item>
        </Link>
        <Link href="/admin">
          <Menu.Item
            icon={
              <ThemeIcon variant="light" color="brand">
                <IconSettings size={16} />
              </ThemeIcon>
            }
          >
            System Admin
          </Menu.Item>
        </Link>
        <Menu.Divider />
        <Link href="/logout">
          <Menu.Item
            icon={
              <ThemeIcon variant="light" color="brand">
                <IconLogout size={16} />
              </ThemeIcon>
            }
          >
            Log out
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
}
