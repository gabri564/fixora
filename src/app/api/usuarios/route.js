import { NextResponse } from "next/server";

export async function GET() {
  try {

    /*
      Aquí posteriormente:

      1. Obtener todos los usuarios.
      2. Filtrar por rol.
      3. Filtrar por estado.
      4. Ordenar por fecha de registro.
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
          "Error al obtener los usuarios.",
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

      nombres
      apellidos
      email
      telefono
      password
      rol
      estado

    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Usuario creado correctamente.",
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
          "Error al crear el usuario.",
      },
      {
        status: 500,
      }
    );

  }
}