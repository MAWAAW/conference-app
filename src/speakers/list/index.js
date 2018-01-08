import TalkService from '../../common/talk.service'

export function render(idView) {
    let talkService = new TalkService()
    talkService
        .findAllSpeakers()
        .then(resp => resp.json())
        .then(speakers => {
            speakers.forEach(speaker => document.getElementById(idView).innerHTML += '<p>' + speaker.firstname + '</p>')

        })
}