"use client";

import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

export default function Clicker() {
  const { getToken } = useAuth();
  const [message, setMessage] = useState("message1");

  async function clickHandler2() {
    const token = await getToken();
    console.log("clicked2", token);

    if (!token) {
      console.log("No token, please login");
      return;
    }

    try {
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
      // {
      //   Authorization: `Bearer ${token}`,
      //   "Content-Type": "application/json",
      // });

      const body = JSON.stringify({ msg: message });

      var options = {
        method: "POST",
        headers: headers,
        // redirect: 'follow',
        body: body,
      };

      // @ts-ignore
      const response = await fetch(
        "https://addmessage2-35l4jd5glq-uc.a.run.app",
        { ...options }
      );

      // const data = await response.json();

      console.log("resp", response);
    } catch (e) {
      console.log("err", e);
    }
  }

  return (
    <>
      <hr />

      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={clickHandler2}>Click me2</button>
    </>
  );
}
