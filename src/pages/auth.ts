import {  NextAuthOptions} from "next-auth";
import { useSession } from "next-auth/react";
import { Redirect } from "next";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider  from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
    providers:
[
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
],
};
