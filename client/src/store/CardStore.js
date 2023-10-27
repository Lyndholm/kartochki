import { makeAutoObservable } from "mobx";

export default class CardStore {
    constructor() {
        this._cards = [
            { id: 1, question: '2+2', answer: "4" },
            { id: 2, question: '2-2', answer: "0" },
            { id: 3, question: '2*2', answer: "4" },
            { id: 4, question: '2:2', answer: "1" },
            { id: 5, question: 'КАПС', answer: "UPPER-CASE" },
            { id: 6, question: 'Находить/обнаруживать', answer: "find, found, found" },
            { id: 7, question: 'Атрибуты данных', answer: "Необходимый элемент базы, который представляет собой какую-либо характерную и уникальную информацию." },
            { id: 8, question: 'Отладка программы', answer: "Процесс поиска и исправления ошибок или неполадок в исходном коде какого-либо программного обеспечения" },
            { id: 9, question: '6+2', answer: "8" },
            { id: 10, question: '5-2', answer: "3" },
            { id: 11, question: '4*3', answer: "12" },
            { id: 12, question: '9:3', answer: "3" }
        ]
        this._status = [
            { id: 1, name: 'непросмотренное' },
            { id: 2, name: 'просмотренное' },
            { id: 4, name: 'изучаемое' },
            { id: 3, name: 'освоенное' }
        ]
        makeAutoObservable(this)
    }

    setCards(cards) {
        this._cards = cards
    }

    setStatus(status) {
        this._status = status
    }

    setSelectedStatus(status) {
        this._selectedStatus = status
    }
    get cards() {
        return this._cards
    }

    get status() {
        return this._status
    }

    get selectedStatus() {
        return this._selectedStatus
    }

}