import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any;
  };
}>();

//MIDDLEWARE
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  //   const token = header.split(" ")[1];

  try {
    const response = await verify(header, c.env.JWT_SECRET);

    if (response) {
      c.set("userId", response.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "unauthorized" });
    }
  } catch (e) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

//create a new blog

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });

  return c.json({
    id: post.id,
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: post.id,
  });
});

blogRouter.get("/get/:id", async (c) => {
  const body = await c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: body,
      },
    });

    if (post) {
      return c.json({
        id: post,
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "Error ocurred while fetching",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany();
  return c.json({
    posts,
  });
});
