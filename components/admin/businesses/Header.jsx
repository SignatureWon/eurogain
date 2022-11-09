import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export function Header(props) {
  return (
    <div className="flex justify-between items-center py-3">
      <h1 className="capitalize">Businesses</h1>
      <div>
        <Button className="bg-brand-500">
          <IconPlus size={20} />
          <span className="hidden md:inline ml-2 capitalize">Business</span>
        </Button>
      </div>
    </div>
  );
}
