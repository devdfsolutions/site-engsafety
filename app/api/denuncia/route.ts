import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nome = String(formData.get("nome") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const tipo = String(formData.get("tipo") || "").trim();
    const descricao = String(formData.get("descricao") || "").trim();

    if (!tipo || !descricao) {
      return NextResponse.redirect(
        new URL("/etica-denuncia?erro=1", request.url),
        { status: 303 }
      );
    }

    console.log("Nova denúncia recebida:");
    console.log({
      nome,
      email,
      tipo,
      descricao,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.redirect(
      new URL("/etica-denuncia?sucesso=1", request.url),
      { status: 303 }
    );
  } catch (error) {
    console.error("Erro ao processar denúncia:", error);

    return NextResponse.redirect(
      new URL("/etica-denuncia?erro=1", request.url),
      { status: 303 }
    );
  }
}