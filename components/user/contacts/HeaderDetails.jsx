import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useRouter } from "next/router";

export function HeaderDetails(props) {
  const router = useRouter();
  const {type, id} = router.query

  const tabs = ["details", "activities"];
  const breadcrumbs = [
    { title: "Contacts", href: "/manage/contacts" },
    { title: type, href: `/manage/contacts/${type}` },
  ];
  return (
    <>
      <Breadcrumbs>
        {breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index} className="capitalize">
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
      <h1 className="mt-2 mb-4">IAM Sdn Bhd</h1>
      <Tabs
        defaultValue={router.asPath.split('/')[5] || "details"}
        onTabChange={(value) =>
          router.push(`/manage/contacts/${type}/${id}/${value}`)
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
