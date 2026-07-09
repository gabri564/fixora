import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {

    const { id } = params;

    /*
      Aquí posteriormente se hará:

      1. Buscar categoría por ID.
      2. Obtener cantidad de productos.
      3. Devolver información completa.
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
          "Error al obtener la categoría.",
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

      1. Actualizar nombre.
      2. Actualizar descripción.
      3. Actualizar estado.
    */

    return NextResponse.json({
      success: true,
      message:
        "Categoría actualizada correctamente.",
      id,
      data: body,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al actualizar la categoría.",
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
      Aquí posteriormente:

      1. Verificar si tiene productos.
      2. Eliminar categoría.
    */

    return NextResponse.json({
      success: true,
      message:
        "Categoría eliminada correctamente.",
      id,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar la categoría.",
      },
      {
        status: 500,
      }
    );

  }
}