class EditServices {
    static async editWords(id) {
        try{
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
            {method: "POST"})
        const data = await response.json()
        return data
        }
        catch(e) {
            console.error(e);
        }
    }
}

export default EditServices