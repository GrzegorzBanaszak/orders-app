import { NextResponse } from 'next/server';
import { prisma } from '@/db';
import { Order } from '@/types/OrderType';
import { Good } from '@/types/GoodType';

export async function GET() {
  const data = [
    new Order("21-02-2023", "Brak", "Przyjęte", [
      new Good("łożysko", "32", 2, "Brak"),
    ]),new Order("21-02-2023", "Brak", "Przyjęte", [
      new Good("łożysko", "32", 2, "Brak"),
    ])
  ]
  return NextResponse.json(data);
}

export async function POST() {
  
}