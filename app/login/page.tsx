import FormInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";

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

  const handleForm = async (formData: FormData) => {
    //Data 를 catch 하고 싶으면 변수에 타입을 추가한다.
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log("i run in the server action");
    //post request 를 보내고 있음
  };

  //const { action, data, method, pending } = useFormStatus();
  //규칙 action property 가 할당된 하위 component 에만 사용가능

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[""]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[""]}
        />
        <span>
          <FormButton text="Log in" />
        </span>
        <SocialLogin />
      </form>
    </div>
  );
}
