

function requestQuestions() {
    let formValues = {};

    const selected = document.querySelectorAll('input[type=radio]:checked');
    const segundaPregunta = document.getElementById('segundaPregunta')
    formValues['segundaPregunta'] = segundaPregunta.value
    console.log(selected);

    for (const iterator of selected) {
        formValues[iterator.name] = iterator.value;
    }

    // var config = {
    //     headers: { 'Access-Control-Allow-Origin': '*' }
    //   }
    url = 'http://3.89.254.52:8080/'
    axios.post(url + '/systemrules', {
        data: formValues
    }
    ).then(function (response) {
        if (response.status === 200) {
             let diag = document.getElementById('diag')
             diag.innerHTML = response.data

            let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal')) // Returns a Bootstrap modal instance
            modal.show();
            
            
        }
    })
}