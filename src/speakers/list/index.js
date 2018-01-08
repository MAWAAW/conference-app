import TalkService from '../../common/talk.service'

export function render(talkService, idView) {
    talkService
        .findAllSpeakers()
        .then(resp => resp.json())
        .then(speakers => {
            speakers.forEach(speaker => document.getElementById(idView).innerHTML += '<a href=' + 'http://localhost:8080/#speakers-list?id=' + speaker.id + '>' + speaker.firstname + '</a><br>')
        })
}
