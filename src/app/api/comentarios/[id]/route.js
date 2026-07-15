import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {

    const { id } = params;

    /*
      Aquí posteriormente:

      1. Buscar comentario por ID.
      2. Obtener usuario.
      3. Obtener producto.
    */

    return NextResponse.json({
      success: true,
      data: {
        id,
      },
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al obtener el comentario.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function PUT(request, { params }) {
  try {

    const { id } = params;

    const body = await request.json();

    /*
      Aquí posteriormente:

      Actualizar:

      comentario
      calificacion
      estado
    */

    return NextResponse.json({
      success: true,
      message:
        "Comentario actualizado correctamente.",
      id,
      data: body,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al actualizar el comentario.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function DELETE(request, { params }) {
  try {

    const { id } = params;

    /*
      Solo administrador.

      Aquí posteriormente:

      Eliminar comentario.
    */

    return NextResponse.json({
      success: true,
      message:
        "Comentario eliminado correctamente.",
      id,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar el comentario.",
      },
      {
        status: 500,
      }
    );

  }
}