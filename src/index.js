import { TalkService } from './common/talk.service'
import { render } from './layout/index'
import SpeakerList from './speakers/list/index'
import SessionList from './sessions/list/index'
import SpeakerOne from './speakers/item/index'
import SessionOne from './sessions/item/index'

console.log("--- debut main")

const talkService = new TalkService()
const speakerList = new SpeakerList(talkService)
const sessionList = new SessionList(talkService)
const speakerOne = new SpeakerOne(talkService)
const sessionOne = new SessionOne(talkService)

var router = () => {

    if (location.hash == '#speakers-list') {
        render()
        speakerList.render("main-view")
    } else if (location.hash == '#sessions-list') {
        render()
        sessionList.render("main-view")
    } else if (location.hash.includes('#speakers-list?id=')) {
        let params = new URLSearchParams(location.hash)
        let idSpeaker = params.get("#speakers-list?id")
        render()
        speakerOne.render("main-view", idSpeaker)
    } else if (location.hash.includes('#sessions-list?id=')) {
        let params = new URLSearchParams(location.hash)
        let idSession = params.get("#sessions-list?id")
        render()
        sessionOne.render("main-view", idSession)
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

console.log("fin main ---")
