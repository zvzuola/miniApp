import wepy from 'wepy'
import CryptoJS from 'crypto-js'

const UID = "UAA44ECA5D";
const KEY = "ikllxqdufpsrynqf";

const JOKE_KEY = "2ef2cce384714d2c93efd37a0cf0f371"

const getWeatherUrl = (location = 'hangzhou', type ='daily') => {
  const api = `https://api.seniverse.com/v3/weather/${type}.json`;
  const ts = Math.floor((new Date()).getTime() / 1000);
  const str = `ts=${ts}&uid=${UID}`;
  const sig = encodeURIComponent(CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64));
  const url = `${api}?location=${location}&${str}&sig=${sig}&start=0&days=3`;
  return url;
}

const wxRequest = async (url, params = {}) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: { 'Content-Type': 'application/json' }
  })
  wepy.hideToast()
  console.log(url, res)
  return res
}

export const getDailyWeather = (location = 'hangzhou') => {
  return wxRequest(getWeatherUrl(location, 'daily'))
}

export const getNowWeather = (location = 'hangzhou') => {
  return wxRequest(getWeatherUrl(location, 'now'))
}

export const getCity = (longitude, latitude) => {
  const url = `https://api.seniverse.com/v3/location/search.json?key=${KEY}&q=${latitude}:${longitude}`
  return wxRequest(url)
}

export const getSuggestion = (location) => {
  const url = `https://api.seniverse.com/v3/life/suggestion.json?key=${KEY}&location=${location}&language=zh-Hans`
  return wxRequest(url)
}

export const getWordsJoke = (page) => {
  const url = `http://api.shujuzhihui.cn/api/joke/qiubai/word?appKey=${JOKE_KEY}&page=${page}`
  return wxRequest(url)
}

export const getImgsJoke = (page) => {
  const url = `http://api.shujuzhihui.cn/api/joke/qiubai/img?appKey=${JOKE_KEY}&page=${page}`
  return wxRequest(url)
}