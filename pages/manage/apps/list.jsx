import { Image } from "@mantine/core";

export default function Page() {
  const groups = [
    {
      name: "Productivity",
      apps: [
        {
          name: "Microsoft Word",
          icon: "word.svg",
          link: "#"
        },
        {
          name: "Microsoft Excel",
          icon: "excel.svg",
          link: "#"
        },
        {
          name: "Microsoft PowerPoint",
          icon: "powerpoint.svg",
          link: "#"
        },
      ]
    },
    {
      name: "Communication",
      apps: [
        {
          name: "Microsoft Outlook",
          icon: "outlook.svg",
          link: "#"
        },
        {
          name: "Microsoft Teams",
          icon: "teams.svg",
          link: "#"
        },
      ]
    },
    {
      name: "Workspaces",
      apps: [
        {
          name: "Microsoft Planner",
          icon: "planner.svg",
          link: "#"
        },
        {
          name: "Microsoft Lists",
          icon: "lists.svg",
          link: "#"
        },
        {
          name: "Microsoft To Do",
          icon: "todo.svg",
          link: "#"
        },
      ]
    },
  ]
  return (
    <>
      <h1>Apps</h1>
      {
        groups.map((group, groupIndex) => (
          <section className="eg-form" key={groupIndex}>
            <h2>{group.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-4">
              {
                group.apps.map((app, appIndex) => (
                  <div key={appIndex} className="text-center">
                    <div>
                      <Image src={`/apps/${app.icon}`} alt={app.name} width={48} height={48} className="mx-auto mb-4" />
                    </div>
                    <div>{app.name}</div>
                  </div>
                ))
              }
              
            </div>
          </section>

        ))
      }
    </>
  );
}
