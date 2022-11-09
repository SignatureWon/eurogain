import { Header } from "@/components/admin/users/Header";
import { useRouter } from "next/router";
import { Button, Input, Pagination, ScrollArea, Table } from "@mantine/core";
import { IconSearch, IconPlus } from "@tabler/icons";
import Link from "next/link";
export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  let body = [];
  for (let index = 1; index < 9; index++) {
    body.push({
      id: index,
      name: `User Name ${index}`,
      type: `Type ${index}`,
      date: "10 Sep 2022",
    });
  }
  const columns = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Type",
      value: "type",
    },
    {
      label: "Date Modified",
      value: "date",
    },
  ];
  return (
    <>
      <Header />
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
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.date}</td>
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
