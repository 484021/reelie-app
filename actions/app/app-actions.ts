"use server";

import User from "@/lib/modals/user.modals";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.createCollection(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
