"use client";
import { Button, TextInput, Select } from "@mantine/core";
// import { SubmitHandler, useForm } from "react-hook-form";
import { createFormContext } from "@mantine/form";
import { SubmitHandler } from "react-hook-form";
import { Toaster } from "sonner";
// import { useForm } from "@mantine/form";
export interface EventSchema {
  eventname: string;
  startdate: string;
  player: number;
  prizepool: string;
  organisationName: string;
  participationfee: string;
  location: string;
  gamedata: string;
}
const [FormProvider, useFormContext, useForm] =
  createFormContext<EventSchema>();

function ContextField() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        label="Event Name"
        placeholder="Event Name"
        withAsterisk
        {...form.getInputProps("eventname")}
      />
      <TextInput
        label="Enter the Start Date of Event"
        placeholder="Event Start Date"
        withAsterisk
        mt="md"
        {...form.getInputProps("startdate")}
      />
      <TextInput
        label="Enter the Number of Player"
        placeholder="Number of Player"
        withAsterisk
        mt="md"
        {...form.getInputProps("player")}
      />
      <TextInput
        label="Enter your Pize Poll"
        placeholder="Prize Poll"
        withAsterisk
        mt="md"
        {...form.getInputProps("prizepool")}
      />
      <TextInput
        label="Enter your Organisation Name"
        placeholder="Organisation Name"
        withAsterisk
        mt="md"
        {...form.getInputProps("organisationName")}
      />
      <TextInput
        label="Enter your Participation Fee"
        placeholder="Participation Fee"
        withAsterisk
        mt="md"
        {...form.getInputProps("participationfee")}
      />
      <TextInput
        label="Enter your Location"
        placeholder="Location"
        withAsterisk
        mt="md"
        {...form.getInputProps("location")}
      />
      <Select
        label="Enter your Game Domain"
        placeholder="Game Domain"
        limit={5}
        data={[
          "ea-fc-24",
          "fortnite",
          "tekken-7",
          "counter-strike-go",
          "clash-royal",
          "pubg-mobile",
          "valorant",
          "rocket-league",
          "street-fighter-6",
          "overwatch-2",
          "brawl-stars",
          "mobile-legends",
          "dota-2",
          "minecraft",
          "fifa-23",
        ]}
        searchable
        {...form.getInputProps("gamedata")}
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
    // console.log(Responseconsole.log(Sendmessage)
  };

  // const form = useFormContext();

  const form = useForm({
    initialValues: {
      eventname: "",
      startdate: "",
      player: 0,
      prizepool: "",
      organisationName: "",
      participationfee: "",
      location: "",
      gamedata: "",
    },
    validate: {
      eventname: (value) => {
        if (!value) {
          return "Event Name is required";
        }
        return true;
      },
      startdate: (value) => {
        if (!value) {
          return "Start Date is required";
        }
        return true;
      },
      player: (value) => {
        if (!value) {
          return "Number of Players is required";
        }
        if (isNaN(value)) {
          return "Number of Players must be a valid number";
        }
        return true;
      },
      prizepool: (value) => {
        if (!value) {
          return "Prize Pool is required";
        }
        return true;
      },
      organisationName: (value) => {
        if (!value) {
          return "Organisation Name is required";
        }
        return true;
      },
      participationfee: (value) => {
        if (!value) {
          return "Participation Fee is required";
        }
        return true;
      },
      location: (value) => {
        if (!value) {
          return "Location is required";
        }
        return true;
      },
      gamedata: (value) => {
        if (!value) {
          return "Game Domain is required";
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
