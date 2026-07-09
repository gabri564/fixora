import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Correo y contraseña son obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    /*
      Aquí posteriormente irá:

      1. Conexión a SQL Server.
      2. Buscar usuario.
      3. Comparar contraseña con bcrypt.
      4. Generar JWT.
      5. Guardar cookie segura.
    */

    return NextResponse.json({
      success: true,
      message:
        "Inicio de sesión correcto.",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error interno del servidor.",
      },
      {
        status: 500,
      }
    );

  }
}