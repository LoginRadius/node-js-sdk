module.exports = function (config) {

    var module = {};
    var cloudEndpoint = "/api/v2/";
    var helper = require('./../helper.js');

    // Identity/UserList( POST )
    // module.userList = function (from, select, where, orderby, skip, limit) {
    //     from = (typeof from === 'undefined') ? 'users' : from;
    //     select = (typeof select === 'undefined') ? '' : select;
    //     where = (typeof where === 'undefined') ? '' : where;
    //     orderby = (typeof orderby === 'undefined') ? '' : orderby;
    //     skip = (typeof skip === 'undefined') ? '' : skip;
    //     limit = (typeof limit === 'undefined') ? '' : limit;
    //     var formData = {
    //         "from": from,
    //         "select": select,
    //         "where": where,
    //         "orderby": orderby,
    //         "skip": skip,
    //         "limit": limit
    //     }
    //     return new Promise(function (resolve, reject) {
    //         config.request({
    //             method: 'post',
    //             uri: config.apidomain + restHookEndpoint +"identity?key=" + config.apikey + "&secret=" + config.apisecret,
    //             headers: {'content-type': 'application/json'},
    //             body: JSON.stringify(formData)
    //         }, function (data) {
    //             if (helper.checkError(data)) {
    //                 reject(data);
    //             } else {
    //                 resolve(data);
    //             }
    //         });
    //     });
    // }

    // Aggregation Query Data( POST )
    module.aggregationQueryData = function (from, to, first_data_point, stats_type) {
        var formData = {
            "firstDatapoint": first_data_point,
            "statsType": stats_type
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'post',
                uri: config.apidomain + cloudEndpoint +"insights?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&from=" + from + "&to=" + to,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }
    return module;
};