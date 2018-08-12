export function getMedia(mediasArray, id) {
  return mediasArray.find(media => media.id === id);
}

export function getBackground(contentMedias, medias) {
  const id = contentMedias.find(el => el.use_for === 'background').media_id;
  return getMedia(medias, id).url;
}

export function getThumbnail(contentMedias, medias) {
  const id = contentMedias.find(el => el.use_for === 'thumbnail').media_id;
  return getMedia(medias, id).url;
}
