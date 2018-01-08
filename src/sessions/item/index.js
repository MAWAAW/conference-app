import TalkService from '../../common/talk.service'

export class OneSession {
    constructor(talkService) {
        this.talkService = talkService
    }
    render(idView, idSession) {
        this.talkService
            .findSessionById(idSession)
            .then(resp => resp.json())
            .then(session => document.getElementById(idView).innerHTML += '<p>' + session[0].title + '</p>')
    }
}