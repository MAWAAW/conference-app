import TalkService from './common/talk.service'
import { render } from './layout/index'
import { render as renderById } from './speakers/list/index'


console.log("debut index.js")

/*let talkService = new TalkService()

talkService.findAllSpeakers()
    .then(resp => resp.json())
    .then(speakers => speakers.forEach(speaker => console.log(speaker.firstname)))
*/
render()

renderById("main-view")

console.log("fin index.js")
