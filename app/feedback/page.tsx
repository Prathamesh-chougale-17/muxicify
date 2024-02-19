"use client";
import { Button, TextInput, Select, Rating, Group, Box } from "@mantine/core";
// import { SubmitHandler, useForm } from "react-hook-form";
import { createFormContext } from "@mantine/form";
import { SubmitHandler } from "react-hook-form";
import { Toaster } from "sonner";
// import { useForm } from "@mantine/form";
export interface EventSchema {
  name: string;
  email: string;
  experience: string;
  anyOtherFeedback: string;
  rating: number;
  message: string;
}
const [FormProvider, useFormContext, useForm] =
  createFormContext<EventSchema>();

function ContextField() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        label="Please Enter your Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Enter the Email Address"
        placeholder="Email"
        withAsterisk
        mt="md"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Enter your any other feedback"
        placeholder="Prize Poll"
        mt="md"
        {...form.getInputProps("anyOtherFeedback")}
      />
      <Group mt="md">
        <Box className="font-bold">
          Please give rating for the service provided
        </Box>
        <Rating {...form.getInputProps("rating")} />
        {/* <Rating  onClick={(e) => setValue()}/> */}
      </Group>
      <TextInput
        label="Enter your Message"
        placeholder="Message"
        withAsterisk
        mt="md"
        {...form.getInputProps("message")}
      />

      {/* <Group justify="flex-start" mt="md"> */}
      <Button type="submit" mt={16}>
        Submit
      </Button>
      {/* </Group> */}
    </>
  );
}

// export type EventSchema = z.infer<typeof FormSubmissionSchema>;
const FeedbackForm = () => {
  const processForm: SubmitHandler<EventSchema> = async (data) => {
    console.log(data);
  };

  // const form = useFormContext();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      experience: "",
      anyOtherFeedback: "",
      rating: 0,
      message: "",
    },
    validate: {
      name: (value) => {
        if (value.length < 3) {
          return "Name should be at least 3 characters long";
        }
        return true;
      },
      email: (value) => {
        if (!value.includes("@")) {
          return "Please enter a valid email";
        }
        return true;
      },
      experience: (value) => {
        if (value.length < 3) {
          return "Experience should be at least 3 characters long";
        }
        return true;
      },
      message: (value) => {
        if (value.length < 3) {
          return "Message should be at least 3 characters long";
        }
        return true;
      },
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
