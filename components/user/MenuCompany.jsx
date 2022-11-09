import { Navbar, Button, Select } from "@mantine/core";
import { IconWallet } from "@tabler/icons";

export function MenuCompany() {
  return (
    <>
      <Navbar.Section className="p-2">
        <Select
          placeholder="Pick a company"
          value="2"
          data={[
            { value: "2", label: "Acme Corp" },
            { value: "3", label: "Wayne Industry" },
            { value: "4", label: "Stark Corp" },
          ]}
        />
      </Navbar.Section>
      <Navbar.Section className="border-b border-gray-300 px-2 pb-2">
        <Button
          leftIcon={<IconWallet size={16} />}
          fullWidth
          className="bg-brand-500"
        >
          RM3,000
        </Button>
      </Navbar.Section>
    </>
  );
}
