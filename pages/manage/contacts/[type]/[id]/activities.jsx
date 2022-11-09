import { HeaderDetails } from "@/components/manage/contacts/HeaderDetails";
import { Button, Input, Pagination, ScrollArea, Table } from "@mantine/core";

export default function Page() {
  let body = [];
  for (let index = 0; index < 10; index++) {
    body.push({
      id: index,
      activity: `Activity ${index}`,
      staff: `Staff ${index}`,
      date: "10 Sep 2022",
    });
  }
  const columns = [
    {
      label: "Date",
      value: "date",
    },
    {
      label: "Activity",
      value: "activity",
    },
    {
      label: "Person in-charge",
      value: "staff",
    },
  ];
  return (
    <>
      <HeaderDetails />
      <div className="py-3">
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
                  <td>{row.activity}</td>
                  <td>{row.staff}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="py-4">
            <Pagination total={10} />
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
