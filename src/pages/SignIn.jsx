import React from "react";
import { Label ,TextInput , Checkbox , Button } from "flowbite-react";

const SignIn = () => {
  return (
    <div>
      <form className="flex flex-col gap-3 bg-500 aziz">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="mot de passe" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{" "}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit" className="amine">Se Connecter</Button>
      </form>
    </div>
  );
};

export default SignIn;
