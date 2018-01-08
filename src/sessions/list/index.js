import TalkService from '../../common/talk.service'


export default class SessionList {
    constructor(talkService) {
        this.talkService = talkService
    }
    render(idView) {
        this.talkService
            .findAllSessions()
            .then(resp => resp.json())
            .then(sessions => {
                sessions.forEach(session => document.getElementById(idView).innerHTML += '<p>' + session.title + '</p>')
            })
    }
}