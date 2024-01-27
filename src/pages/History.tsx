export function History() {
  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-gray-100 font-bold">Meu histórico</h1>

      <div className="flex-1 overflow-auto mt-10">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed rounded-tl-lg pl-6">
                Tarefas
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Início
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed rounded-tr-lg pr-6">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Tarefa 01
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                20 Minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 minutos atrás
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <span className="flex items-center gap-4 before:content-normal w-2 h-2 rounded-full bg-yellow-500">
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Tarefa 01
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                20 Minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 minutos atrás
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <span className="flex items-center gap-4 before:content-normal w-2 h-2 rounded-full bg-yellow-500">
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Tarefa 01
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                20 Minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 minutos atrás
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <span className="flex items-center gap-4 before:content-normal w-2 h-2 rounded-full bg-yellow-500">
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Tarefa 01
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                20 Minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 minutos atrás
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 px-4 pl-4 pr-24 text-sm leading-relaxed">
                <span className="flex items-center gap-4 before:content-normal w-2 h-2 rounded-full bg-yellow-500">
                  Concluído
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
