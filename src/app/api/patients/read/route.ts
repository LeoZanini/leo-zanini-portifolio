import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    // Verifique se há query params na URL (opcional)
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name') || '';
    const email = searchParams.get('email') || '';

    // Consulta ao banco de dados para buscar pacientes com filtros de nome e email (se houver)
    const patients = await prisma.patient.findMany({
      where: {
        name: {
          contains: name, // Busca por parte do nome
          mode: 'insensitive' // Busca case-insensitive
        },
        email: {
          contains: email, // Busca por parte do email
          mode: 'insensitive'
        }
      }
    });

    // Retorna os pacientes encontrados
    return NextResponse.json(patients);
  } catch (error) {
    console.error('Erro ao buscar pacientes:', 'aqui ta o problema' + error);
    return NextResponse.json({ error: 'Erro ao buscar pacientes' }, { status: 500 });
  }
}
