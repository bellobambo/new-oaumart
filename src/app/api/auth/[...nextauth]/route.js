import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectMongodb } from '../../../../../lib/mongodb';
import User from '../../../../../models/users';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  secret: process.env.SECRET,

  callbacks: {
    async signIn({ user, account }) {
      console.log('User', user);
      console.log('Account', account);

      if (account.provider === 'google') {
        const { name, email } = user;
        try {

          await connectMongodb()

          const userExist = await User.findOne({ email });

          if (!userExist) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name, email
              })
            });
            if (res.ok) {
              return user;
            }
          }

        } catch (error) {
          console.log(error);
        }
      }

      return user;
    }
  }

});

export { handler as GET, handler as POST };
