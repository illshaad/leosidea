import Axios from "axios";

const sendDateFromBack = async (data) => {
  const { data: dataUser } = await Axios.post(
    process.env.NEXT_PUBLIC_API_BACKEND,
    data
  );
  return { dataUser };
};

const getUser = async () => {
  const { data: dataAllUser } = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/users`
  );
  return { dataAllUser };
};

export { sendDateFromBack, getUser };
