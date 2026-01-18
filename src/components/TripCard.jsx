export default function TripCard({ data }) {
  if (!data) return null;

  const { img, destino, valor, qtdParcelas, valorParcela, dataIda, dataVolta, status } = data;

  return (
    <div className="container w-67.5 h-94 bg-background rounded-4xl overflow-hidden shadow-md hover:scale-[1.02] transition-all duration-300 hover:cursor-pointer relative z-0 hover:z-20">
      <div className="w-full relative">
        <img src={img} alt={destino} className="w-full h-60 object-cover" />
        <div className="absolute top-48 right-0 flex flex-col px-6 py-2 bg-background rounded-tl-xl items-end z-10">
          <span className="text-sm text-gray-600 -mb-2">{qtdParcelas} {valorParcela}</span>
          <span className="text-xl text-green font-bold">{valor}</span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl text-text-gray font-semibold">{destino}</h2>
        <p className="text-sm text-text-gray text-muted-foreground">Ida: {dataIda} — Volta: {dataVolta}</p>
        {status && (
          <div className="mt-3">
            {
              (() => {
                let bg = "bg-yellow-200";
                let text = "text-yellow-800";

                if (status === 'DISPONIVEL') {
                  bg = 'bg-green-100';
                  text = 'text-green-800';
                } else if (status === 'ESGOTADO') {
                  bg = 'bg-red-100';
                  text = 'text-red-700';
                }

                return (
                  <span className={`inline-block font-medium ${bg} ${text} px-2 py-1 rounded`}>{status}</span>
                )
              })()
            }
          </div>
        )}
      </div>
    </div>
  );
}