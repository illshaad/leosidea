import React from "react";
import { useForm } from "react-hook-form";
import { Card, H1, Form, Button, CenterElement, Input } from "./index.style";
import { sendDateFromBack } from "../service/api";
export default function Homepage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    sendDateFromBack({
      firstName: data.firstName,
      lastName: data.lastName,
      birthday: data.birthday,
    }).then((res) => console.log(res));
  };

  return (
    <Card>
      <H1>Welcome</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CenterElement>
          <label>First Name</label>
        </CenterElement>
        <Input {...register("firstName")} placeholder="FirstName" />
        <CenterElement>
          <label>Last Name</label>
        </CenterElement>
        <Input {...register("lastName")} placeholder="LastName" />
        <CenterElement>
          <label>Date of birthday</label>
        </CenterElement>
        <Input {...register("birthday")} placeholder="birthday" type="date" />
        <Button cursor="pointer " type="submit">
          Send
        </Button>
      </Form>
    </Card>
  );
}
