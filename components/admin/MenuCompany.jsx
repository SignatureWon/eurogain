import { Navbar, Button, Select } from "@mantine/core";
import { IconWallet } from "@tabler/icons";

export function MenuCompany() {
  return (
    <>
      <Navbar.Section className="p-2">
        <Select
          placeholder="Pick a franchisee"
          value="1"
          data={[
            { value: "1", label: "Settings", group: 'Franchisor' },
            { value: "2", label: "Acme Corp", group: 'Franchisees' },
            { value: "3", label: "Wayne Industry", group: 'Franchisees' },
            { value: "4", label: "Stark Corp", group: 'Franchisees' },
          ]}
        />
      </Navbar.Section>
      {/* <Navbar.Section className="border-b border-gray-300 px-2 pb-2">
        <Button
          leftIcon={<IconWallet size={16} />}
          fullWidth
          className="bg-brand-500"
        >
          RM3,000
        </Button>
      </Navbar.Section> */}
    </>
  );
}
