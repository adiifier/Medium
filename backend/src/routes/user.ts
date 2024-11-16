import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { SigninInput } from "@adiifier/medium-common";
import { SignupInput } from "@adiifier/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  //SIGN UP ROUTE\

  const usersPresent = await await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (usersPresent) {
    c.status(403);
    return c.json({ error: "Email already used" });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  const sec = c.env.JWT_SECRET;

  const token = await sign({ id: user.id }, sec);

  return c.json({
    jwt: token,
  });
});

// SIGN IN ROUTE

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      error: "User not found",
    });
  }
  if (!user || user.password !== body.password) {
    c.status(403);
    return c.json({
      error: "Invalid credentials",
    });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});
