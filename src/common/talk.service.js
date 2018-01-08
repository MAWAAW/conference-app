export default class TalkService {

    findAllSpeakers() {
        return fetch('http://localhost:3000/speakers', {
            method: 'get'
        })
    }
}


