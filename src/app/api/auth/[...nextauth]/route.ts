import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers:[
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {label:"Email", type:"email", placeholder:"nombre@corre.com"},
				password: {label: "Password", type: "password", placeholder:"******"}
			},
			//req, info adicional de peticion,headers,cookies
			async authorize(credentials,req){
				const user = {id: "1", fullname:"J. Smith",email:'johndoe@gmail.com'}
				
				return user;
			}
		})
	],
	callbacks: {
		jwt({account, token, user, profile, session}){
			if(user) token.user=user
			return token
		}
	}
})

export {handler as GET, handler as POST}