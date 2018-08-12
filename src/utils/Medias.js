export function getMedia(mediasArray, id) {
  return mediasArray.find(media => media.id === id);
}

export function getBackground(contentMedias, medias) {
  const id = contentMedias.find(el => el.use_for === 'background').media_id;
  console.log('id', id);
  const res = getMedia(medias, id).url;
  getMedia(medias, id);
  console.log('res', res);
  return res;
}
