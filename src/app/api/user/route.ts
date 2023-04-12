import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma'

// 查询users接口
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany().catch(err => (err))
  return NextResponse.json(users)
}

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

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while creating user.' });
  }
}


