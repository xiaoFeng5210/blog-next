import { NextApiRequest, NextApiResponse } from 'next';
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
  try {
    const users = await prisma.user.findMany();
    if (!users) {
      res.status(404).json({ error: 'No users found.' });
    } else {
      console.log(users);
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users' });
  }
}
