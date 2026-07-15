import { NextResponse } from "next/server";

export async function GET(request) {
  try {

    /*
      Aquí posteriormente:

      1. Obtener las descargas
         del usuario autenticado.

      2. Obtener recursos
         gratuitos.

      3. Obtener compras
         realizadas.

      4. Verificar permisos
         antes de permitir
         descargar.
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
          "Error al obtener las descargas.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function POST(request) {
  try {

    const body =
      await request.json();

    /*
      body

      usuarioId
      productoId
      pedidoId

      Aquí posteriormente:

      - Verificar si el recurso
        es gratuito.

      - Verificar si fue comprado.

      - Registrar la descarga.

      - Generar enlace temporal
        para descargar.
    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Descarga autorizada.",
        data: body,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al procesar la descarga.",
      },
      {
        status: 500,
      }
    );

  }
}