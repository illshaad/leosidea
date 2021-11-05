import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import {
  H1,
  Form,
  Button,
  CenterElement,
  Input,
  Perror,
  P,
} from "../../styles/style";
import { sendDateFromBack } from "../../service/api";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.string().required(),
});

export default function Homepage({ nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        <Input
          {...register("firstName", {
            required: "This is required FirstName",
          })}
          placeholder="FirstName"
        />

        <ErrorMessage errors={errors} name="firstName" as={Perror} />

        <CenterElement>
          <label>Last Name</label>
        </CenterElement>
        <Input
          {...register("lastName", {
            required: "This is required LastName",
          })}
          placeholder="LastName"
        />
        <ErrorMessage errors={errors} name="lastName" as={Perror} />

        <CenterElement>
          <label>Date of birthday</label>
        </CenterElement>
        <Input
          {...register("birthday", {
            required: "This is birthday required",
          })}
          placeholder="birthday"
          type="date"
        />
        <ErrorMessage errors={errors} name="birthday" as={Perror} />

        <Button cursor="pointer " type="submit">
          Send
        </Button>
      </Form>
    </>
  );
}
