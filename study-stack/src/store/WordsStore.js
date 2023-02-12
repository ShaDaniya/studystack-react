import { makeAutoObservable, runInAction } from "mobx";

const getWords = () => fetch("api/words")
.then((response) => {
    if (response.ok) {
        return response.json()
    }
    throw new Error("Something went wrong...")
})
.then((response) => response)

export default class WordsStore {
    words = []
    isLoading = false
    isLoaded = false
    error = null

    constructor() {
        makeAutoObservable(this)
    }

    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return
        }
        this.isLoading = true
        const result = await getWords().catch((error) => (this.error = error))

        runInAction(() => {
            this.words = result
            this.isLoading = false
            this.isLoaded = false
        })
    }

    wordEdit = async (word) => {
        await fetch(`api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word)
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Something went wrong")
        })
        .catch((error) => (this.error = error))
    
        runInAction(() => {
            this.loadData()
        })
    }
}

