import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente se hará:

      1. Obtener todas las categorías.
      2. Ordenarlas por nombre.
      3. Mostrar cantidad de productos.
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
          "Error al obtener las categorías.",
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

      nombre
      descripcion
      estado

    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Categoría creada correctamente.",
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
          "Error al crear la categoría.",
      },
      {
        status: 500,
      }
    );

  }
}