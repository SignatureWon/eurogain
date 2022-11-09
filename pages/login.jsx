import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Select,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [user, setUser] = useState("admin");
  return (
    <div className="flex h-screen items-center">
      <div className="p-4 flex-1">
        <div className="max-w-sm mx-auto">
          <div className="text-center">
            <Image
              src="/eurogain.svg"
              alt="Eurogain"
              width={200}
              height={100}
            />
            <h1 className="font-bold text-2xl mt-4 mb-16">
              Welcome to Eurogain
            </h1>
          </div>
          <Select
            defaultValue={user}
            data={[
              { value: "user", label: "User" },
              { value: "manage", label: "Staff" },
              { value: "admin", label: "Admin" },
            ]}
            onChange={(val) => {
              setUser(val);
            }}
          />
          {/* <TextInput
            label="Email address"
            placeholder="Your email address"
            size="md"
            defaultValue={user}
          /> */}
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Link href={`/${user}`}>
            <Button fullWidth mt="xl" size="md" className="bg-brand-500">
              Login
            </Button>
          </Link>

          {/* <Text align="center" mt="md">
            Don&apos;t have an account?{" "}
            <Anchor<"a">
              href="#"
              weight={700}
              onClick={(event) => event.preventDefault()}
            >
              Register
            </Anchor>
          </Text> */}
        </div>
      </div>
      <div
        className="flex-1 bg-cover bg-center h-full"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")`,
        }}
      ></div>
    </div>
  );
}
