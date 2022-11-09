import { Header } from "@/components/manage/contacts/Header";
import { useRouter } from "next/router";
import { Button, Input, Pagination, ScrollArea, Table } from "@mantine/core";
import { IconSearch, IconPlus } from "@tabler/icons";
import Link from "next/link";
// import { List } from "@/components/manage/contacts/List";
export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  let body = [];
  for (let index = 0; index < 10; index++) {
    body.push({
      id: index,
      person: `Person ${index}`,
      designation: "Director",
      company: `Company ${index}`,
      franchise: `Franchise ${index}`,
      supply: `Supply ${index}`,
      source: `Source ${index}`,
      date: "10 Sep 2022",
    });
  }
  const columns = {
    customers: [
      {
        label: "Company",
        value: "company",
      },
      {
        label: "Franchise",
        value: "franchise",
      },
      {
        label: "Date Modified",
        value: "date",
      },
    ],
    vendors: [
      {
        label: "Company",
        value: "company",
      },
      {
        label: "Supply",
        value: "supply",
      },
      {
        label: "Franchise",
        value: "franchise",
      },
      {
        label: "Date Modified",
        value: "date",
      },
    ],
    people: [
      {
        label: "Name",
        value: "person",
      },
      {
        label: "Designation",
        value: "designation",
      },
      {
        label: "Company",
        value: "company",
      },
      {
        label: "Franchise",
        value: "franchise",
      },
      {
        label: "Date Modified",
        value: "date",
      },
    ],
    leads: [
      {
        label: "Name",
        value: "person",
      },
      {
        label: "Company",
        value: "company",
      },
      {
        label: "Franchise",
        value: "franchise",
      },
      {
        label: "Source",
        value: "source",
      },
      {
        label: "Date Modified",
        value: "date",
      },
    ],
  };
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
            <span className="hidden md:inline ml-2 capitalize">{type}</span>
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
              {columns[type || "customers"].map((col, index) => (
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
                {columns[type || "customers"].map((col, index) => (
                  <td key={index}>
                    <Link href={`/manage/contacts/${type}/1`} className="block">
                      {row[col.value]}
                    </Link>
                  </td>
                ))}
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
