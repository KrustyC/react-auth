import store from "./store/index"
import { addArticle } from "./actions/index"
console.log(store)
window.store = store
window.addArticle = addArticle