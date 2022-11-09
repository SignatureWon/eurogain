import { HeaderDetails } from "@/components/manage/business/HeaderDetails";
import {
  Button,
  Checkbox,
  Input,
  Select,
  TextInput,
  Pagination,
  ScrollArea,
  Table,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconSearch, IconPlus } from "@tabler/icons";

export default function Page() {
  const router = useRouter();
  const { unit } = router.query;
  let body = [];
  for (let index = 0; index < 10; index++) {
    body.push({
      id: index,
      task: `Task ${index}`,
      date: "10 Sep 2022",
      status: "Completed",
    });
  }
  const columns = [
    {
      label: "Date",
      value: "date",
    },
    {
      label: "Task",
      value: "task",
    },
    {
      label: "Status",
      value: "status",
    },
  ];
  return (
    <>
      <HeaderDetails />
      <div className="py-4 flex items-center justify-between">
        <div>
          <Select
            value="yearly"
            data={[
              {
                label: "All",
                value: "all",
              },
              {
                label: "Yearly",
                value: "yearly",
              },
              {
                label: "Half-yearly",
                value: "half-yearly",
              },
              {
                label: "Quarterly",
                value: "quarterly",
              },
              {
                label: "Monthly",
                value: "monthly",
              },
              {
                label: "Weekly",
                value: "weekly",
              },
              {
                label: "Daily",
                value: "daily",
              },
            ]}
          />
        </div>
        <div>
          <Button className="bg-brand-500">
            <IconPlus size={20} />
            <span className="hidden md:inline ml-2">Customer</span>
          </Button>
        </div>
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
              <tr className="cursor-pointer" key={row.id}>
                <td>{row.date}</td>
                <td>{row.task}</td>
                <td>{row.status}</td>
              </tr>
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
