import { $host } from ".";

export const getOneUser = async (id: string | undefined) => {
  const { data } = await $host.get(`/users/${id}`);
  return data;
};
