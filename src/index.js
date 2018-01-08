import TalkService from './common/talk.service'
import { render } from './layout/index'
import { render as renderSpeakers } from './speakers/list/index'
import { render as renderSessions } from './sessions/list/index'
import { render as renderOneSpeaker } from './speakers/item/index'
import { render as renderOneSession } from './sessions/item/index'

console.log("--- debut index.js")

talkService = new TalkService()

var router = () => {

    if (location.hash == '#speakers-list') {
        render()
        renderSpeakers(talkService, "main-view")
    } else if (location.hash == '#sessions-list') {
        render()
        renderSessions(talkService, "main-view")
    } else if (location.hash.includes('#speakers-list?id=')) {
        let params = new URLSearchParams(location.hash)
        let idSpeaker = params.get("#speakers-list?id")
        console.log("mon param : " + idSpeaker)
        render()
        renderOneSpeaker(talkService, "main-view", idSpeaker)
    } else if (location.hash.includes('#sessions-list?id=')) {
        let params = new URLSearchParams(location.hash)
        let idSession = params.get("#sessions-list?id")
        console.log("mon param : " + idSession)
        render()
        renderOneSession(talkService, "main-view", idSession)
    } else {
        render()
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});

console.log("fin index.js ---")
