import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {

    const { id } = params;

    /*
      Aquí posteriormente se hará:

      1. Buscar el producto por ID.
      2. Obtener información desde SQL Server.
      3. Devolver producto completo.
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
          "Error al obtener el producto.",
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
      Aquí posteriormente se hará:

      1. Validar datos.
      2. Actualizar el producto.
      3. Actualizar imagen si cambió.
      4. Guardar cambios en SQL Server.
    */

    return NextResponse.json({
      success: true,
      message:
        "Producto actualizado correctamente.",
      id,
      data: body,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al actualizar el producto.",
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
      Aquí posteriormente se hará:

      1. Eliminar registro.
      2. Eliminar imagen.
      3. Eliminar archivo descargable.
    */

    return NextResponse.json({
      success: true,
      message:
        "Producto eliminado correctamente.",
      id,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar el producto.",
      },
      {
        status: 500,
      }
    );

  }
}