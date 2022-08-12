const API = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f2b98867bmsha9d93a920c5292dp15f8c6jsn4ddae291804f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API, options);
        let template = `${videos.items.map(video => `
            <div class="group relative">
                <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                  </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}`;
        //slice es para indicar que de los 9 que estamos pidiendo en la API solo queremos mostrar por ahora 4 y join, para unir todos los elementos
        content.innerHTML = template;
    } catch (error) {
        console.error(error);
    }
})();