import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma'

// 查询users接口
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const users = await prisma.user.findMany().catch(err => (err))
//   return NextResponse.json(users)
// }


