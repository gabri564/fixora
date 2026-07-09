import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente:

      1. Obtener historial de pagos.
      2. Filtrar por usuario.
      3. Filtrar por pedido.
      4. Filtrar por estado.
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
          "Error al obtener los pagos.",
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

      pedidoId
      usuarioId
      monto
      metodoPago
      referencia
      estado

      Más adelante aquí irá la
      integración con Culqi,
      Mercado Pago o Stripe.
    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Pago registrado correctamente.",
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
          "Error al registrar el pago.",
      },
      {
        status: 500,
      }
    );

  }
}