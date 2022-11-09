import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useRouter } from "next/router";

export function HeaderDetails(props) {
  const router = useRouter();
  const {unit, id} = router.query

  const tabs = ["details", "tasks", "sales", "activities"];
  const breadcrumbs = [
    { title: "Businesses", href: "/business" },
    { title: unit, href: `/business/${unit}` },
  ];
  return (
    <>
      <Breadcrumbs>
        {breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
      <h1 className="mt-2 mb-4">IAM Sdn Bhd</h1>
      <Tabs
        defaultValue={router.asPath.split('/')[6] || "details"}
        onTabChange={(value) =>
          router.push(`/manage/business/${unit}/customers/${id}/${value}`)
        }
      >
        <Tabs.List>
          {tabs.map((item, index) => (
            <Tabs.Tab value={item} key={index} className="capitalize">
              {item}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </>
  );
}
