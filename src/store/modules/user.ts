interface User {
    name: string;
    isLogin: boolean;
    isVip: boolean;
    level: number;
    avater: string;
    token: string;
}

const state: User = {
    name: '',
    isLogin: false,
    isVip: false,
    level: 0,
    avater: '',
    token: ''
}

const mutations = {
}

const actions = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}   


