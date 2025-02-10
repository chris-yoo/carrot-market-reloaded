"use server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  confirm_password: z.string().min(10),
});

export async function createAcount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  //   console.log(data);
  //   try {
  //     formSchema.parse(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //parse 는 에러를 던지지만 safeParse 는 에러를 반환하지 않는다.
  const result = formSchema.safeParse(data);

  console.log(result);
  if (!result.success) {
    // console.log(result.error.errors); 이렇게 써야 에러가 안난다. result.error 그 자체로는 에러가 난다.
    return result.error.flatten();
  }
}
