import {  NextAuthOptions} from "next-auth";
import { useSession } from "next-auth/react";
import { Redirect } from "next";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider  from "next-auth/providers/credentials";

import GithubProvider from "next-auth/providers/github"



export const authConfig: NextAuthOptions = {
    providers:
[
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
],
};