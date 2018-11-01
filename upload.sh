#!/bin/bash
pwd=`pwd`
version=$1
env=$2
while [ -z "$version" ]; do
    read -p "请输入版本号: " version
done
while [ -z "$env" ]; do
    read -p "请输入环境(online/test): " env
done
if [ $env = "online" ]; then
    npm run build
else
    npm run dev
fi
/Applications/wechatwebdevtools.app/Contents/Resources/app.nw/bin/cli -u $version@$pwd

# while getopts "a:b" opt
# do 
#     case $opt in
#         a) echo $opt $OPTARG $OPTIND;;
#         b) echo $opt $OPTARG $OPTIND;;
#         ?) echo "unknow param"
#     esac
# done