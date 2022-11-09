import { Navbar, ScrollArea, NavLink, ThemeIcon } from "@mantine/core";
import {
  IconUsers,
  IconSignature,
  IconLicense,
  IconFileCertificate,
  IconCloudComputing,
  IconReceiptTax,
  IconArrowLeftRight,
  IconPremiumRights,
  IconChecklist,
  IconBooks,
  IconTemplate,
  IconHeartHandshake,
  IconSchool,
  IconApps,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconBuilding,
  IconFriends,
  IconUser,
  IconHome,
  IconReportAnalytics,
} from "@tabler/icons";
import Link from "next/link";

export function MenuModule() {
  const links = [
    {
      label: "Dashboard",
      link: "/admin/dashboard",
      icon: <IconHome size={16} />,
      children: [],
    },
    {
      label: "Franchisees",
      link: "/admin/franchisees",
      icon: <IconBuilding size={16} />,
      children: [],
    },
    // {
    //   label: "Contacts",
    //   link: "/admin/contacts",
    //   icon: <IconUsers size={16} />,
    //   children: [],
    // },
    {
      label: "Businesses",
      link: "/admin/businesses",
      icon: <IconBuildingBank size={16} />,
      children: [],
    },
    {
      label: "Users",
      link: "/admin/users",
      icon: <IconUsers size={16} />,
      children: [],
    },
    {
      label: "Apps",
      link: "/admin/apps",
      icon: <IconApps size={16} />,
      children: [],
    },
    {
      label: "Supports",
      link: "/admin/supports",
      icon: <IconHeartHandshake size={16} />,
      children: [],
    },
    {
      label: "Reports",
      link: "/admin/reports",
      icon: <IconReportAnalytics size={16} />,
      children: [
        {
          label: "Contacts",
          link: "/admin/reports/contacts",
          icon: <IconBuildingSkyscraper size={16} />,
        },
        {
          label: "Franchisees",
          link: "/admin/reports/franchisees",
          icon: <IconBuilding size={16} />,
        },
        {
          label: "Businesses",
          link: "/admin/reports/business",
          icon: <IconBuildingBank size={16} />,
        },
        {
          label: "Staff",
          link: "/admin/reports/staff",
          icon: <IconUsers size={16} />,
        },
      ],
    },
  ];

  return (
    <Navbar.Section grow component={ScrollArea} className="p-2">
      {links.map((link) => (
        <div key={link.label}>
          {link.children.length ? (
            <NavLink
              label={link.label}
              icon={
                <ThemeIcon variant="light" color="brand">
                  {link.icon}
                </ThemeIcon>
              }
              className="my-1"
            >
              {/* <Link href={link.link}> */}
              {link.children.length &&
                link.children.map((child) => (
                  <Link href={child.link} key={child.label}>
                    <NavLink
                      label={child.label}
                      icon={
                        <ThemeIcon variant="light" color="brand">
                          {child.icon}
                        </ThemeIcon>
                      }
                    ></NavLink>
                  </Link>
                ))}
            </NavLink>
          ) : (
            <Link href={link.link}>
              <NavLink
                label={link.label}
                icon={
                  <ThemeIcon variant="light" color="brand">
                    {link.icon}
                  </ThemeIcon>
                }
                className="my-1"
              />
            </Link>
          )}
        </div>
      ))}
    </Navbar.Section>
  );
}
