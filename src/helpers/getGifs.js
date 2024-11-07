export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RA8clX7EH9bEdSZ014Bruuz3aysiDNqG&q=${category}&limit=9`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs
};
