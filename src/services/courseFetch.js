import { getToken } from "../utils/token";

const {fetch: origFetch} = window
window.fetch = async (...args) => {
    const response = await origFetch(...args)

    /* work with the cloned response in a separate promise
       chain -- could use the same chain with `await`. */

    response
        .clone()
        .json()
        .then(body => console.log("intercepted response:",body))
        .catch(err => console.error(err))

    /* the original response can be resolved unmodified: */
    //return response;

    /* or mock the response: */

    return {
        ok: true,
        status: 200,
        json: async () => ({
            userId: 1,
            id: 1,
            title: "Mocked!!",
            completed: false
        })
    }
}