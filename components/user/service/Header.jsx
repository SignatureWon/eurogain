import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useRouter } from "next/router";

export function Header(props) {
  const router = useRouter();
  const { unit } = router.query
  return (
    <>
      <h1 className="capitalize mb-4">{unit}</h1>
      <Tabs
        defaultValue={router.asPath.split('/')[4] || "tasks"}
        onTabChange={(value) => router.push(`/user/service/${unit}/${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value="tasks">Tasks</Tabs.Tab>
          <Tabs.Tab value="enquiries">Enquiries</Tabs.Tab>
          <Tabs.Tab value="orders">Orders</Tabs.Tab>
          <Tabs.Tab value="activities">Activities</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
}
