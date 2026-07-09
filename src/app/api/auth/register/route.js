import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    const body = await request.json();

    const {
      nombres,
      apellidos,
      email,
      telefono,
      password,
    } = body;

    if (
      !nombres ||
      !apellidos ||
      !email ||
      !telefono ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Todos los campos son obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    /*
      Aquí posteriormente irá:

      1. Validar formato del correo.
      2. Validar teléfono.
      3. Verificar si el correo ya existe.
      4. Encriptar contraseña con bcrypt.
      5. Guardar usuario en SQL Server.
      6. Enviar correo de verificación (opcional).
    */

    return NextResponse.json({
      success: true,
      message:
        "Usuario registrado correctamente.",
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