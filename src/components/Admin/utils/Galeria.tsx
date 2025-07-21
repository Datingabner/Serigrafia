import ImageModal from "../../Utils/ImageModal";

const imagenesPorCategoria = import.meta.glob("../../../assets/serigrafia-resource/*/*.jpg", { eager: true, query: '?url', import: 'default' });

function getImagenesPorCategoria() {
    type ImagenAgrupada = {
        categoria: string;
        nombre: string;
        url: string;
    };

    const listaAgrupada: ImagenAgrupada[] = Object.entries(imagenesPorCategoria).map(
        ([path, url]) => {
            const partes = path.split("/");
            const categoria = partes[partes.length - 2]; // Ej: Playeras, Gorras
            const nombreArchivo = partes[partes.length - 1].replace(".jpg", "");

            return {
                categoria,
                nombre: nombreArchivo,
                url: url as string,
            };
        }
    );
    return (
        <div className="container mx-auto px-4 py-8">


            <div className="mt-16  text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Galeria</h3>
                <div className="columns-2 md:columns-4 gap-4 space-y-4">
                    {listaAgrupada.map((item) => (
                        <div key={item.nombre} className="inline-block w-full">
                            <ImageModal
                                key={item.nombre}
                                images={item.url}
                                categoria={item.categoria}
                            >

                                <div key={item.nombre} className="p-2 border-2 border-gray-400 md:hover:border-t-purple-500 md:hover:border-s-blue-700 md:hover:border-b-sky-400 md:hover:border-r-pink-500 hover:p-0 hover:scale-110  aspect-square bg-gradient-to-br rounded-lg flex items-center justify-center hover:from-blue-100 hover:to-cyan-100 transition-colors hover:transition-all duration-300 cursor-pointer">
                                    {/* <span className="text-gray-500 font-medium">Muestra {item.name}</span> */}
                                    <img src={item.url} alt={item.categoria} className='w-full rounded-lg hover:opacity-90 transition-opacity duration-300' />
                                </div>
                            </ImageModal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default getImagenesPorCategoria;