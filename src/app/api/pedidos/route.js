import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente se hará:

      1. Obtener todos los pedidos.
      2. Filtrar por usuario.
      3. Filtrar por estado.
      4. Ordenar por fecha.
    */

    return NextResponse.json({
      success: true,
      data: [],
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al obtener los pedidos.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function POST(request) {
  try {

    const body = await request.json();

    /*
      body:

      usuarioId
      total
      metodoPago
      estado
      productos[]

    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Pedido creado correctamente.",
        data: body,
      },
      {
        status: 201,
      }
    );

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al crear el pedido.",
      },
      {
        status: 500,
      }
    );

  }
}