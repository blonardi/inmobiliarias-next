export async function fetchAPI(API_BASE_URL) {
	if(!API_BASE_URL) return
	try {
			// Realiza la solicitud fetch a la URL base de la API de planetas
			const response = await fetch(API_BASE_URL);
			// Verifica si la respuesta es exitosa
			if (!response.ok) {
					throw new Error('Error al obtener los datos de la API');
			}
			// Convierte la respuesta a JSON
			const data = await response.json();
			// Retorna los datos obtenidos
			return data;
	} catch (error) {
			// Si hay un error, lanza una excepción con el error
			throw new Error(`Error en fetchAPI: ${error.message}`);
	}
}