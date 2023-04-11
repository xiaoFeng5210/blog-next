import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while creating user.' });
  }
}

// 查询users接口
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany().catch(err => (err))
  if (users) {
    const data = await users.json()
    return NextResponse.json({ data })
  }
}
