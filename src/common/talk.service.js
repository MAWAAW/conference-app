export class TalkService {

    findAllSpeakers() {
        return fetch('http://localhost:3000/speakers', {
            method: 'get'
        })
    }

    findAllSessions() {
        return fetch('http://localhost:3000/sessions', {
            method: 'get'
        })
    }

    findSpeakerById(idSpeaker) {
        return fetch('http://localhost:3000/speakers?id=' + idSpeaker, {
            method: 'get'
        })
    }

    findSessionById(idSession) {
        return fetch('http://localhost:3000/sessions?id=' + idSession, {
            method: 'get'
        })
    }
}


