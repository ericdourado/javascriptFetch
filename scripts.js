// https://sujeitoprogramador.com/rn-api/?api=posts


let listElement = document.querySelector('#app');
let posts = [];


function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((r) => { return r.json() })
        .then((json) => {
            posts = json;

            console.log(json)

            
            posts.map((item) => {
                let liElement = document.createElement("li");
                let titleElement = document.createElement("strong");
                let imgElement = document.createElement("img");
                let descriptionElement = document.createElement("a");

                let titleText = document.createTextNode(item.titulo);
                titleElement.appendChild(titleText);
                liElement.appendChild(titleElement);

                imgElement.src = item.capa;
    
                liElement.appendChild(imgElement);

                let descriptionText = document.createTextNode(item.subtitulo);
                descriptionElement.appendChild(descriptionText); 
                liElement.appendChild(descriptionElement);

                listElement.appendChild(liElement);

            });

        })
        .catch(() => {
            console.log('ERRO INTERNO')
        }) 


}

nutriApp();