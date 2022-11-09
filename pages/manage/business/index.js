import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/manage/business/secretarial");
  }, [router]);
  return (<></>);
}
