"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();
  return (
    <header className="">
      <h1>Logo</h1>
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>Sign out</button>

      <div>{JSON.stringify(session)}</div>
    </header>
  );
}
