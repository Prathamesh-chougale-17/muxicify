"use client";
import { Button, Group, TextInput, Radio } from "@mantine/core";
// import { SubmitHandler, useForm } from "react-hook-form";
import { createFormContext } from "@mantine/form";
import { SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "sonner";
// import { useForm } from "@mantine/form";
export interface FormSubmittion {
  fullName: string;
  email: string;
  age: number;
  gender: string;
  phoneNumber: string;
  twitchChannelId: string;
}
const [FormProvider, useFormContext, useForm] =
  createFormContext<FormSubmittion>();

function ContextField() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps("fullName")}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Phone Number"
        placeholder="Phone Number"
        withAsterisk
        mt="md"
        {...form.getInputProps("phoneNumber")}
      />

      <TextInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps("age")}
      />
      <Radio.Group
        label="Select your gender"
        // description="This is anonymous"
        withAsterisk
        mt="md"
        {...form.getInputProps("gender")}
      >
        <Group mt="xs">
          <Radio value="Male" label="Male" />
          <Radio value="Female" label="Female" />
          <Radio value="Other" label="Other" />
        </Group>
      </Radio.Group>
      <TextInput
        label="Twitch Channel Id"
        placeholder="Twitch Channel Id"
        withAsterisk
        mt="md"
        {...form.getInputProps("twitchChannelId")}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </>
  );
}

// export type FormSubmittion = z.infer<typeof FormSubmissionSchema>;
const FeedbackForm = () => {
  const processForm: SubmitHandler<FormSubmittion> = async (data) => {
    console.log(data);
    const Sendmessage = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await Sendmessage.json();
    if (response.success) {
      toast("Registration Successfull");
      form.reset();
    } else {
      toast("Registration Unsuccessfull");
    }
    // console.log(Responseconsole.log(Sendmessage)
  };

  // const form = useFormContext();

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      age: 0,
      twitchChannelId: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
      phoneNumber: (value) =>
        value.length === 10 ? null : "Phone number must have 10 digits",
      gender: (value) =>
        value.length < 4 ? "Please select your Gender" : null,
      // address: (value) => (value.length < 10 ? 'Address must have at least 10 letters' : null),
      twitchChannelId: (value) =>
        value.length < 3
          ? "Twitch Channel Id must have at least 3 letters"
          : null,
    },
  });

  return (
    <div className="bg-black">
      <FormProvider form={form}>
        <Toaster />
        <form
          onSubmit={form.onSubmit(processForm)}
          className="lg:mx-auto mx-4 w-full max-w-xl pt-16"
        >
          <ContextField />
        </form>
      </FormProvider>
    </div>
  );
};

export default FeedbackForm;
