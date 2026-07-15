import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {

    /*
      Aquí posteriormente:

      1. Verificar que el usuario
         sea ADMIN.

      2. Recibir la ruta
         de la imagen.

      3. Buscar el archivo.

      4. Eliminar el archivo
         del servidor.

      5. Eliminar el registro
         de SQL Server si existe.

      6. Devolver respuesta.
    */

    const body =
      await request.json();

    const { ruta } = body;

    if (!ruta) {
      return NextResponse.json(
        {
          success: false,
          message:
            "La ruta de la imagen es obligatoria.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Imagen eliminada correctamente.",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar la imagen.",
      },
      {
        status: 500,
      }
    );

  }
}