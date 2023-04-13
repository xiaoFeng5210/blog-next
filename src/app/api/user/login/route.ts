import prisma from '../../../../../prisma'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' });
  }
  if (user.name !== name) {
    return NextResponse.json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign({
    id: user.id,
    name: user.name,
    email: user.email,
  }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  })
  return NextResponse.json({ token });
}
