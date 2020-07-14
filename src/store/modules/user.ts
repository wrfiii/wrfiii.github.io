interface User {
    nickname: string;
    isLogin: boolean;
    isVip: boolean;
    level: number;
    avatarUrl: string;
    token: string;
    userId: number;
}

const state: User = {
    nickname: '',
    isLogin: false,
    isVip: false,
    level: 0,
    avatarUrl: '',
    token: '',
    userId: 0
}

const mutations = {
    M_USERINFO: (state: User, val: any) => {
        const { level } = val;
        const { avatarUrl, nickname, userId } = val.profile;
        state.level = level;
        state.avatarUrl = avatarUrl;
        state.nickname = nickname;
        state.userId = userId;
    }
}

const actions = {


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}


