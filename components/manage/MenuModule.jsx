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
      link: "/manage/dashboard",
      icon: <IconHome size={16} />,
      children: [],
    },
    {
      label: "Contacts",
      link: "/manage/contacts",
      icon: <IconUsers size={16} />,
      children: [
        {
          label: "Customers",
          link: "/manage/contacts/customers",
          icon: <IconBuildingSkyscraper size={16} />,
        },
        {
          label: "Vendors",
          link: "/manage/contacts/vendors",
          icon: <IconBuilding size={16} />,
        },
        {
          label: "People",
          link: "/manage/contacts/people",
          icon: <IconUser size={16} />,
        },
        {
          label: "Leads",
          link: "/manage/contacts/leads",
          icon: <IconFriends size={16} />,
        },
      ],
    },
    {
      label: "Businesses",
      link: "/manage/business",
      icon: <IconBuildingBank size={16} />,
      children: [
        {
          label: "Secretarial",
          link: "/manage/business/secretarial",
          icon: <IconSignature size={16} />,
        },
        {
          label: "Licensing",
          link: "/manage/business/licensing",
          icon: <IconLicense size={16} />,
        },
        {
          label: "Tax",
          link: "/manage/business/tax",
          icon: <IconReceiptTax size={16} />,
        },
        {
          label: "Outsourcing",
          link: "/manage/business/outsourcing",
          icon: <IconArrowLeftRight size={16} />,
        },
        {
          label: "Wealth",
          link: "/manage/business/wealth",
          icon: <IconPremiumRights size={16} />,
        },
        {
          label: "Digital",
          link: "/manage/business/digital",
          icon: <IconCloudComputing size={16} />,
        },
        {
          label: "Audit",
          link: "/manage/business/audit",
          icon: <IconChecklist size={16} />,
        },
        {
          label: "Legal",
          link: "/manage/business/legal",
          icon: <IconFileCertificate size={16} />,
        },
      ],
    },
    {
      label: "Apps",
      link: "/manage/apps",
      icon: <IconApps size={16} />,
      children: [],
    },
    {
      label: "Reports",
      link: "/manage/reports",
      icon: <IconReportAnalytics size={16} />,
      children: [
        {
          label: "Contacts",
          link: "/manage/reports/contacts",
          icon: <IconBuildingSkyscraper size={16} />,
        },
        {
          label: "Businesses",
          link: "/manage/reports/business",
          icon: <IconBuildingBank size={16} />,
        },
        {
          label: "Staff",
          link: "/manage/reports/staff",
          icon: <IconUsers size={16} />,
        },
      ],
    },
    {
      label: "Supports",
      link: "/manage/supports",
      icon: <IconHeartHandshake size={16} />,
      children: [
        {
          label: "Guidelines",
          link: "/manage/contacts/guidelines",
          icon: <IconBooks size={16} />,
        },
        {
          label: "Tutorials",
          link: "/manage/contacts/tutorials",
          icon: <IconSchool size={16} />,
        },
        {
          label: "Templates",
          link: "/manage/contacts/templates",
          icon: <IconTemplate size={16} />,
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
