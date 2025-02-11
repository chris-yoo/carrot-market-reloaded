"use server";
import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Way too short!!!")
      .max(10, "That is to long!!!!!")
      .toLowerCase()
      .trim()
      .transform((username) => `🏆${username}🏆`),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(10)
      .regex(
        passwordRegex,
        "a password nust have upper case ... something else"
      ),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
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
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
