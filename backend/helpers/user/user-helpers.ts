import { User } from "../../db/tables/user-table";
import { isNil } from "lodash";

export async function createUser(user: User): Promise<User> {
  return User.create(user);
}

export async function getUser(id: string): Promise<User | null> {
  const user = await User.findByPk(id);
  return user;
}

export async function updateUser(id: string, user: User): Promise<User | null> {
  await User.update(user, { where: { id } });
  return User.findByPk(id);
}

export async function deleteUser(id: string): Promise<User | null> {
  const user = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return user;
}
