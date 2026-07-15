import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente:

      1. Obtener todos los comentarios.
      2. Filtrar por producto.
      3. Filtrar por usuario.
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
          "Error al obtener los comentarios.",
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
      productoId
      comentario
      calificacion

    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Comentario agregado correctamente.",
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
          "Error al registrar el comentario.",
      },
      {
        status: 500,
      }
    );

  }
}