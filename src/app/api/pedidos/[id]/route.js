import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {

    const { id } = params;

    /*
      Aquí posteriormente:

      1. Buscar el pedido por ID.
      2. Obtener cliente.
      3. Obtener productos.
      4. Obtener pago.
    */

    return NextResponse.json({
      success: true,
      data: {
        id,
      },
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al obtener el pedido.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function PUT(request, { params }) {
  try {

    const { id } = params;

    const body = await request.json();

    /*
      Aquí posteriormente:

      Cambiar estado:

      Pendiente
      Pagado
      Procesando
      Completado
      Cancelado
    */

    return NextResponse.json({
      success: true,
      message:
        "Pedido actualizado correctamente.",
      id,
      data: body,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al actualizar el pedido.",
      },
      {
        status: 500,
      }
    );

  }
}

export async function DELETE(request, { params }) {
  try {

    const { id } = params;

    /*
      Solo administrador.
      Aquí posteriormente
      se eliminará el pedido.
    */

    return NextResponse.json({
      success: true,
      message:
        "Pedido eliminado correctamente.",
      id,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al eliminar el pedido.",
      },
      {
        status: 500,
      }
    );

  }
}