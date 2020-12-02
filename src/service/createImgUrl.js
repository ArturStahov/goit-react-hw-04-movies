const createImgUrl = patch => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  return `${BASE_IMG_URL}${patch}`;
};

export default createImgUrl;
