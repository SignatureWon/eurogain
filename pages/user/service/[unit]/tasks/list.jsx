import { Header } from "@/components/user/service/Header";
import { useRouter } from "next/router";
import { Button, Input, Pagination, ScrollArea, Table } from "@mantine/core";
import { IconSearch, IconPlus } from "@tabler/icons";
import Link from "next/link";
export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  let body = [];
  for (let index = 0; index < 10; index++) {
    body.push({
      id: index,
      task: `Task ${index}`,
      remark: `Remark ${index}`,
      date: "10 Sep 2022",
    });
  }
  const columns = [
    {
      label: "Task",
      value: "task",
    },
    {
      label: "Deadline",
      value: "date",
    },
    {
      label: "Remark",
      value: "remark",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex justify-between items-center py-3">
        <div>
          <Input icon={<IconSearch size={16} />} placeholder="Search" />
        </div>
        {/* <div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button className="bg-brand-500">
                <IconPlus size={20} />
                <span className="hidden md:inline ml-2">Sales</span>
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Invoice</Menu.Item>
              <Menu.Item>Quotation</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div> */}
      </div>
      <ScrollArea>
        <Table
          verticalSpacing="sm"
          withBorder
          highlightOnHover
          className="bg-white whitespace-nowrap"
        >
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row) => (
              // <Link
              //   href={`/manage/contacts/${type}/1`}
              //   key={row.id}
              // >
              <tr className="cursor-pointer" key={row.id}>
                <td>{row.task}</td>
                <td>{row.date}</td>
                <td>{row.remark}</td>
              </tr>
              // </Link>
            ))}
          </tbody>
        </Table>
        <div className="py-4">
          <Pagination total={10} />
        </div>
      </ScrollArea>
    </>
  );
}
