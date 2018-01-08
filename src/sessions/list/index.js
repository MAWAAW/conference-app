import TalkService from '../../common/talk.service'

export function render(talkService, idView) {
    talkService
        .findAllSessions()
        .then(resp => resp.json())
        .then(sessions => {
            sessions.forEach(session => document.getElementById(idView).innerHTML += '<p>' + session.title + '</p>')
        })
}