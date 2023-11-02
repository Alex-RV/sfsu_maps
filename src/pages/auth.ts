import {  NextAuthOptions} from "next-auth";
import { useSession } from "next-auth/react";
import { Redirect } from "next";


import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/github" 
import GithubProvider from "next-auth/providers/github"



export const authConfig: NextAuthOptions = {
    providers:
[

]
};