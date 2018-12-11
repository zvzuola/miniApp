// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request-promise');

cloud.init();

const url = 'http://tannerv.ddns.net:3000/api';

// 云函数入口函数
exports.main = async (event) => {
  const { album } = event;

  let songs = await request({
    uri: `${url}/album/${album}`,
    method: 'GET',
    json: true
  });

  return {
    songs
  };
};
