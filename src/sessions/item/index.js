import TalkService from '../../common/talk.service'

export function render(talkService, idView, idSession) {
    talkService
        .findSessionById(idSession)
        .then(resp => resp.json())
        .then(session => document.getElementById(idView).innerHTML += '<p>' + session[0].title + '</p>')
}