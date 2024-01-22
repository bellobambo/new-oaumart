import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectMongodb } from '../../../../../lib/mongodb';
import User from '../../../../../models/users';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      // httpOptions: {
      //   timeout: 40000,
      // },
    }),
  ],
  secret: process.env.SECRET,

  callbacks: {
    async session({ session }) {

      const sessionUser = await User.findOne({email : session.user.email});

      session.user.id = sessionUser._id;
      return session
    },
    async signIn({ profile }) {
      // console.log(profile)

      try {
        await connectMongodb()

        const userExist = await User.findOne({ email: profile.email })

        if (!userExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          })
        }

        return true

      } catch (error) {
        console.log(error)
        return false
      }

    }
  },
});

export { handler as GET, handler as POST };
