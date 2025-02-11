"use client";

import Input from "../components/input";
import Button from "../components/button";
import SocialLogin from "../components/social-login";
import { login } from "./actions";
import { useActionState } from "react";

export default function Login() {
  //   const onClick = async () => {
  //     const response = await fetch("/www/users", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         username: "chris",
  //         password: "1234",
  //       }),
  //     });
  //     console.log(await response.json());
  //   };

  const [state, action] = useActionState(login, null);

  //const { action, data, method, pending } = useFormStatus();
  //규칙 action property 가 할당된 하위 component 에만 사용가능
  // initail state 는 action 이 반환하는 것과 형태가 같아야 한다.
  // useFormState -> useActionState 로 변경
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <span>
          <Button text="Log in" />
        </span>
        <SocialLogin />
      </form>
    </div>
  );
}
