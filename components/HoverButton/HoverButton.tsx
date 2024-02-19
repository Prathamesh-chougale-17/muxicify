import { Menu, rem } from "@mantine/core";
import { IconBuilding, IconShirtSport } from "@tabler/icons-react";
import Link from "next/link";

const HoverButton = () => {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-2">
          Login / Signup
        </button>
        {/* <Button>Login / Signup</Button> */}
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Link href="/api/auth/signin">
          <Menu.Item
            leftSection={
              <IconShirtSport style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Player
          </Menu.Item>
        </Link>
        <Menu.Item
          leftSection={
            <IconBuilding style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Author
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HoverButton;
