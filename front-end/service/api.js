import Axios from "axios";
const sendDateFromBack = async (data) => {
  const { data: dataUser } = await Axios.post(
    "http://localhost:5000/user",
    data
  );
  return { dataUser };
};

export { sendDateFromBack };
