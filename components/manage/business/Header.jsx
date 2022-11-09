import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useRouter } from "next/router";

export function Header(props) {
  const router = useRouter();
  const { unit } = router.query
  const breadcrumbs = [
    { title: 'Businesses', href: '/manage/business' },
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
      <h1 className="capitalize mb-4">{unit}</h1>
      <Tabs
        defaultValue={router.asPath.split('/')[4] || "customers"}
        onTabChange={(value) => router.push(`/manage/business/${unit}/${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value="customers">Customers</Tabs.Tab>
          <Tabs.Tab value="enquiries">Enquiries</Tabs.Tab>
          <Tabs.Tab value="sales">Sales</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
}
