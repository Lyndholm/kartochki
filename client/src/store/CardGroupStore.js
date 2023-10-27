import { makeAutoObservable } from "mobx";

export default class CardGroupStore {
    constructor() {
        this._groups = [
            { id: 1, name: 'сложение', description: "сложение однозначных чисел" },
            { id: 2, name: 'вычитание', description: "вычитание однозначных чисел" },
            { id: 3, name: 'умножение', description: "умножение однозначных чисел" },
            { id: 4, name: 'деление', description: "деление однозначных чисел" },
            { id: 5, name: 'Internet', description: "Internet & email vocabulary" },
            { id: 6, name: 'Неправильные глаголы', description: "Неправильные глаголы на букву 'b'" },
            { id: 7, name: 'Базы данных, определения', description: "" },
            { id: 8, name: 'Расшифровка понятий', description: "" }
        ]

        this._subject = [
            { id: 1, name: 'Алгебра' },
            { id: 2, name: 'Английский' },
            { id: 3, name: 'Базы Данных' },
            { id: 4, name: 'Основы программирования' }
        ]

        this._selectedSubject = {}

        makeAutoObservable(this)
    }

    setGroup(groups) {
        this._groups = groups
    }
    setSubject(subject) {
        this._subject = subject
    }

    setSelectedSubject(subject) {
        this._selectedSubject = subject
    }

    get groups() {
        return this._groups
    }
    get subject() {
        return this._subject
    }

    get selectedSubject() {
        return this._selectedSubject
    }
}