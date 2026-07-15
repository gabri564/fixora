import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {

    const { id } = params;

    /*
      Aquí posteriormente:

      1. Buscar usuario por ID.
      2. Obtener sus pedidos.
      3. Obtener sus compras.
      4. Obtener sus descargas.
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
          "Error al obtener el usuario.",
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

      nombres
      apellidos
      email
      teléfono
      contraseña
      rol
      estado
    */

    return NextResponse.json({
      success: true,
      message:
        "Usuario actualizado correctamente.",
      id,
      data: body,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al actualizar el usuario.",
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

      1. Eliminar usuario.
      2. Eliminar sesiones.
      3. Mantener historial de compras.
    */

    return NextResponse.json({
      success: true,
      message:
        "Usuario eliminado correctamente.",
      id,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar el usuario.",
      },
      {
        status: 500,
      }
    );

  }
}