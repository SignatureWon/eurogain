import { Header } from "@/components/user/service/Header";
import {
  Button,
  Input,
  Menu,
  Pagination,
  ScrollArea,
  Table,
} from "@mantine/core";
import Link from "next/link";
import { IconSearch, IconPlus } from "@tabler/icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { unit } = router.query;
  let body = [];
  for (let index = 0; index < 10; index++) {
    body.push({
      id: index,
      amount: 1000,
      balance: 1000,
      type: `Invoice`,
      number: `INV000${index}`,
      date: "10 Sep 2022",
    });
  }
  const columns = [
    {
      label: "Date",
      value: "date",
    },
    {
      label: "Type",
      value: "type",
    },
    {
      label: "No.",
      value: "number",
    },
    {
      label: "Amount",
      value: "amount",
    },
    {
      label: "Balance",
      value: "balance",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex justify-between items-center py-3">
        <div>
          <Input icon={<IconSearch size={16} />} placeholder="Search" />
        </div>
        <div>
          <Button className="bg-brand-500">
            <IconPlus size={20} />
            <span className="hidden md:inline ml-2">Order</span>
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
                {columns.map((col, index) => (
                  <td key={index}>
                    <Link
                      href={`/manage/business/${unit}/customers/1`}
                      className="block"
                    >
                      {row[col.value]}
                    </Link>
                  </td>
                ))}
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
