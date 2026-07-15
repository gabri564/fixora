import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente se hará:

      1. Obtener todos los productos desde SQL Server.
      2. Filtrar por categoría.
      3. Filtrar por tipo:
         - Gratis
         - De pago
         - Proyecto
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
          "Error al obtener los productos.",
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
      body contendrá por ejemplo:

      titulo
      descripcion
      categoriaId
      precio
      imagen
      archivo
      tipo
      estado

    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Producto creado correctamente.",
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
          "Error al crear el producto.",
      },
      {
        status: 500,
      }
    );

  }
}