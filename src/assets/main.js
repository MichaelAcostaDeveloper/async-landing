const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCcxUzbzRu-XDq6LvMptRA5A&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '80a4f028f6msh8a250ba8a082d7dp1f7b48jsn9eabb588e82a',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    console.log('>>>>>>DATA>>>>> ', data);
    return data;
}
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
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
        </div>`).slice(0, 4).join('')}
`;
content.innerHTML = view;
    } catch (error) {
        alert('No se pudo establecer la comunicacion');
        console.log(error);
    }
})();
fetchData(API);