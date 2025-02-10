"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  //Data 를 catch 하고 싶으면 변수에 타입을 추가한다.
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  console.log("i run in the server action");
  //post request 를 보내고 있음
  // redirect("/");
  // redirect 가능

  // 만약 해당 serveraction에 error 가 발생하는 것을 어떻게 catch 할 수 있는 것인가 -> useFormState()

  //prev 가 처음에 consolelog 되고 다음 제출 부터는 action 함수의 반환값이 console.log 로 보여진다.
  return {
    errors: ["wrong password", "password too short"],
  };
};
