export const formatTime = (seconds = 0, guide = seconds) => {
  let s = Math.floor(seconds % 60);
  let m = Math.floor((seconds / 60) % 60);
  let h = Math.floor(seconds / 3600);
  const gm = Math.floor((guide / 60) % 60);
  const gh = Math.floor(guide / 3600);
  if (isNaN(seconds) || seconds === Infinity) {
    h = m = s = '-';
  }
  h = h > 0 || gh > 0 ? `${h}:` : '';
  m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
  s = s < 10 ? `0${s}` : s;
  return h + m + s;
};
