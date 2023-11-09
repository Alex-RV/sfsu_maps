import {  NextAuthOptions} from "next-auth";
import { useSession } from "next-auth/react";
import { Redirect } from "next";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from 'next-auth';
import CredentialsProvider  from "next-auth/providers/credentials";

 const authConfig: NextAuthOptions = {
    providers:
[
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
],

};
export {authConfig as GET, authConfig as POST};