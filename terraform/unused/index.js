'use strict';

const aws = require('aws-sdk');
aws.config.update({region: 'ap-northeast-1'});

exports.handler = (event, context, callback) => {
    const s3 = new aws.S3();
    const cloudwatchlogs = new aws.CloudWatchLogs();

    const getToTS = function() {
        const now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        return now.getTime();
    };
    const getFromTS = function(toTS) {
        const to = new Date(toTS);
        to.setDate(to.getDate()-1);
        return to.getTime();
    };
    const dateFormat = function(date) {
        const y = ('000' + date.getFullYear()).slice(-4);
        const m = ('0' + (date.getMonth() + 1)).slice(-2);
        const d = ('0' + date.getDate()).slice(-2);
        return y + "-" + m + "-" + d;
    };

    // 日次での処理を想定している。
    const toTS = getToTS(); // 実行日時の00:00:00.0
    const fromTS = getFromTS(toTS); // 実行日時1日前の00:00:00.0
    const s3BucketName = 'coffeehub'; // 出力先のS3バケット
    const s3prefix = 'logs/' + 'dt=' + (dateFormat(new Date(fromTS))); // 出力ファイルのprefix
    const taskName = 'export_task_' + (dateFormat(new Date(fromTS)));
    const logGroupName = 'ecs/coffeehub';

    // 上記の設定で CloudWatch Logs の「log_group」というロググループに溜められたログの内容が
    // s3://logs-bucket/hoge-logs/yyyy-mm-dd/ に出力される。

    const response = cloudwatchlogs.createExportTask(
        {
            'taskName': taskName,
            'logGroupName': logGroupName,
            'from': fromTS,
            'to': toTS,
            'destination': s3BucketName,
            'destinationPrefix': s3prefix
        }, function(err, data) {
            if (err) {
                console.log("result: error")
                console.log(err, err.stack); // an error occurred
            } else {
                console.log("result: succeess")
                console.log(data); // successful response
            }
        }
    );

    //console.log(`response: ${response.keys}`);

    //callback(null, response);
};
