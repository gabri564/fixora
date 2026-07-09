import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    /*
      Aquí posteriormente se hará:

      1. Leer el Refresh Token.
      2. Validarlo.
      3. Generar un nuevo JWT.
      4. Actualizar la cookie segura.
    */

    const refreshToken =
      request.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Refresh Token no encontrado.",
        },
        {
          status: 401,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      message:
        "Token actualizado correctamente.",
    });

    response.cookies.set({
      name: "token",
      value: "nuevo-token",
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;

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