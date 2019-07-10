// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request-promise');

cloud.init();

const url = 'http://tannerv.ddns.net:3000/api';
// http://musicapi.leanapp.cn/
// 云函数入口函数
exports.main = async (event, context) => {
  const { artist } = event;

  let albums = await request({
    uri: `${url}/artist/${artist}`,
    method: 'GET',
    json: true
  });

  return {
    albums
  };
};
