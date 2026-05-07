type EticaDenunciaPageProps = {
  searchParams?: Promise<{
    sucesso?: string;
    erro?: string;
  }>;
};

export default async function EticaDenunciaPage({
  searchParams,
}: EticaDenunciaPageProps) {
  const params = await searchParams;
  const sucesso = params?.sucesso === "1";
  const erro = params?.erro === "1";

  return (
    <main className="bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Canal de Ética e Denúncias
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Este canal foi criado para o envio de relatos relacionados a
            condutas inadequadas, suspeitas de irregularidades, descumprimento
            de normas, práticas antiéticas ou qualquer situação que deva ser
            apurada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Confidencialidade e anonimato
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Este canal permite o envio de relatos de forma anônima, sendo
              garantido o tratamento confidencial das informações.
              Recomendamos fornecer o máximo de detalhes possível para auxiliar
              na apuração.
            </p>
          </div>

          {sucesso && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Relato enviado com sucesso.
            </div>
          )}

          {erro && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Não foi possível enviar o relato. Tente novamente.
            </div>
          )}

          <form
            action="/api/denuncia"
            method="POST"
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Registrar denúncia
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome (opcional)
              </label>
              <input
                type="text"
                name="nome"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail (opcional)
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo da denúncia
              </label>
              <select
                name="tipo"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="Conduta inadequada">Conduta inadequada</option>
                <option value="Fraude ou irregularidade">
                  Fraude ou irregularidade
                </option>
                <option value="Assédio">Assédio</option>
                <option value="Descumprimento de normas">
                  Descumprimento de normas
                </option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição da ocorrência *
              </label>
              <textarea
                name="descricao"
                required
                rows={5}
                placeholder="Descreva o ocorrido com o máximo de detalhes possível..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1e40af] py-4 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Enviar denúncia
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}