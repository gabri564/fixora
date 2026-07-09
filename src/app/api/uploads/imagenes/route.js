import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    /*
      Aquí posteriormente:

      1. Verificar que el usuario
         sea ADMIN.

      2. Recibir la imagen.

      3. Validar extensión:

         jpg
         jpeg
         png
         webp
         svg

      4. Validar tamaño.

      5. Renombrar archivo.

      6. Guardar en:

         /public/uploads/imagenes

      7. Registrar la ruta
         en SQL Server.
    */

    const formData =
      await request.formData();

    const imagen =
      formData.get("imagen");

    if (!imagen) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Debe seleccionar una imagen.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Imagen subida correctamente.",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al subir la imagen.",
      },
      {
        status: 500,
      }
    );

  }
}