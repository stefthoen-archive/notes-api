const apiBaseURL = 'http://localhost:3000';

class MockAPI {

    getNote(id) {
        return fetch(`${apiBaseURL}/notes/${id}`)
            .then(response => response.json())
    }

    getNotes() {
        return fetch(`${apiBaseURL}/notes`)
            .then(response => response.json())
    }

    createNote(note) {
        return fetch(
            `${apiBaseURL}/notes`, {
                method: "POST",
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(note)
            })
            .then(response => response)
    }

    deleteNote(id) {
        return fetch(
                `${apiBaseURL}/notes/${id}`, { method: "DELETE" })
            .then(response => response.json())
    }

    updateNote(note) {
        return fetch(
            `${apiBaseURL}/notes/${note.id}`, {
                method: "PATCH",
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(note)
            })
            .then(response => response.json())
    }

    // Examples of chaining
    transformNote(note) {
        note.title = note.title.toUpperCase();
        return note;
    }

    doStuff(note) {
        console.log('uppercase title', note);
    }

}

let api = new MockAPI();

api.getNote(1)
    .then(note => {
        console.log(note);
    })
    .catch(error => {
        console.error('booooo', error);
    });

api.getNote(1)
    .then(api.transformNote)
    .then(api.doStuff)
    .catch(error => {
        console.error('booooo', error);
    });

api.getNotes()
    .then(notes => {
        console.log(notes);
    })
    .catch(error => {
        console.error('booooo', error);
    });

// api.createNote({
//       "title": "Goku is de beste",
//       "location": {
//         "lat": "over9000",
//         "lon": "ookover9000"
//       },
//       "author": "Vegeta",
//       "author_email": "what@doesthescoutersay.abouthispowerlevel"
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.error('OVER 9000?!?!', error);
//     });

api.updateNote({
      "id": 1,
      "title": "Goku is de beste",
      "location": {
        "lat": "over9000",
        "lon": "ookover9000"
      },
      "author": "Vegeta",
      "author_email": "what@doesthescoutersay.abouthispowerlevel"
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.error('OVER 9000?!?!', error);
    });


// api.deleteNote(6);
