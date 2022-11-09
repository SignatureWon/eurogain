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
  IconActivity,
  IconTimeline,
} from "@tabler/icons";
import Link from "next/link";

export function MenuModule() {
  const links = [
    {
      label: "Dashboard",
      link: "/user/dashboard",
      icon: <IconHome size={16} />,
      children: [],
    },
    {
      label: "Secretarial",
      link: "/user/service/secretarial",
      icon: <IconSignature size={16} />,
      children: [],
    },
    {
      label: "Licensing",
      link: "/user/service/licensing",
      icon: <IconLicense size={16} />,
      children: [],
    },
    {
      label: "Tax",
      link: "/user/service/tax",
      icon: <IconReceiptTax size={16} />,
      children: [],
    },
    {
      label: "Outsourcing",
      link: "/user/service/outsourcing",
      icon: <IconArrowLeftRight size={16} />,
      children: [],
    },
    {
      label: "Wealth",
      link: "/user/service/wealth",
      icon: <IconPremiumRights size={16} />,
      children: [],
    },
    {
      label: "Digital",
      link: "/user/service/digital",
      icon: <IconCloudComputing size={16} />,
      children: [],
    },
    {
      label: "Audit",
      link: "/user/service/audit",
      icon: <IconChecklist size={16} />,
      children: [],
    },
    {
      label: "Legal",
      link: "/user/service/legal",
      icon: <IconFileCertificate size={16} />,
      children: [],
    },
    {
      label: "Reports",
      link: "/user/reports",
      icon: <IconReportAnalytics size={16} />,
      children: [
        {
          label: "Health Check",
          link: "/user/reports/healthcheck",
          icon: <IconActivity size={16} />,
        },
        {
          label: "Timeline",
          link: "/user/reports/timeline",
          icon: <IconTimeline size={16} />,
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
