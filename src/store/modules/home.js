
import {services as Services} from '../../api/index';
import Util from '../../util/index';
import {Indicator} from 'mint-ui';
import {Toast} from 'mint-ui';

const state = {
    appindex: {}
}

const getters = {
    appindex: state => state.appindex
};

const mutations = {
    appindex(state, payload) {
        state.appindex = payload.res.data;
    }
}

const actions = {
    appindex({commit}, payload) {
        let Codekey = Util.getRrandomStr();
        let token = Util.getCookie('token');
        let params = Util.getParams('wechat', token, '');
        console.log(params);
        params = Util.encryption(Codekey, params, 'code');
        Indicator.open({
            text: '拼命加载...',
            spinnerType: 'triple-bounce'
        });
        Services.appindex(Codekey, params).then(function (res) {
            var key = res.headers['x-dola-edoc'];
            var data = res.data;
            var str = Util.decrypt(key, data, 'code')
            var data = JSON.parse(str);
            console.log(data);
            if (data.code == 0) {
                commit({
                    type: 'appindex',
                    res: data
                });
                Indicator.close();
            } else {
                Indicator.close();
                Toast({
                    message: data.msg,
                    duration: 1500
                });
            }
        }).catch(function (err) {
            Indicator.close();
        })
    }
}



export default {
    state,
    mutations,
    getters,
    actions
};
