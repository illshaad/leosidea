import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import { H1, Form, Button, CenterElement, Input } from "../../styles/style";
import { sendDateFromBack } from "../../service/api";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.string().required(),
});

export default function Homepage({ nextStep }) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    sendDateFromBack({
      firstName: data.firstName,
      lastName: data.lastName,
      birthday: data.birthday,
    }).then((res) => {
      if (res) {
        nextStep(1);
      }
    });
  };

  return (
    <>
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
    </>
  );
}
