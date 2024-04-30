import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Signin from "@/component/Signin";
import { redirect } from "next/navigation";

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  console.log("page callbackUrl:", callbackUrl);
  const providers = (await getProviders()) ?? {};
  console.log("page providers:: ", providers);

  return (
    <session className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </session>
  );
}
