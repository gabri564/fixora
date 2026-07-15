import { NextResponse } from "next/server";

export async function POST() {
  try {

    /*
      Más adelante aquí se hará:

      1. Eliminar la cookie JWT.
      2. Invalidar el refresh token.
      3. Registrar el cierre de sesión.
    */

    const response = NextResponse.json({
      success: true,
      message: "Sesión cerrada correctamente.",
    });

    response.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return response;

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor.",
      },
      {
        status: 500,
      }
    );

  }
}