import { NextResponse } from "next/server";

export async function GET(request) {
  try {

    /*
      Aquí posteriormente se hará:

      1. Leer la cookie JWT.
      2. Verificar el token.
      3. Obtener el usuario desde SQL Server.
      4. Devolver la información del usuario.
    */

    const token =
      request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No autorizado.",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: 1,
        nombres: "Administrador",
        apellidos: "FIXORA",
        email: "admin@fixora.com",
        rol: "ADMIN",
      },
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