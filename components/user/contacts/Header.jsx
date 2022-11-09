import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useRouter } from "next/router";

export function Header(props) {
  const router = useRouter();
  const { type } = router.query
  const breadcrumbs = [
    { title: 'Contacts', href: '/manage/contacts' },
  ];
  return (
    <>
      <Breadcrumbs>{
      breadcrumbs.map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))
      }</Breadcrumbs>
      <h1 className="capitalize mb-4">{type}</h1>
      <Tabs
        defaultValue="customers"
        onTabChange={(value) => router.push(`/manage/contacts/${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value="customers">Customers</Tabs.Tab>
          <Tabs.Tab value="vendors">Vendors</Tabs.Tab>
          <Tabs.Tab value="people">People</Tabs.Tab>
          <Tabs.Tab value="leads">Leads</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
}
