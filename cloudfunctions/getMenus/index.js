// 云函数入口文件
const cloud = require('wx-server-sdk');
const cheerio = require('cheerio');
const request = require('request-promise');

cloud.init();

// 云函数入口函数
exports.main = async event => {
  const { url } = event;
  return request(url).then(res => {
    const $ = cheerio.load(res);
    const menus = [];
    $('#divCNT > p > span').each(function() {
      menus.push($(this).text());
    });
    return {
      menus
    };
  });
};
