import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isUser = {}
        this._isAuth = false

        makeAutoObservable(this)
    }
    setIsUser(bool) {
        this._isUser = bool
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    get isAuth() {
        return this._isAuth
    }
    get isUser() {
        return this._isUser
    }
}