const url = "http://ancient-plateau-45399.herokuapp.com"
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
/* const limit = 3;
const page = 1; */

const searchNames = async searchText =>{
    const res = await fetch ('http://api-clima-resilia.herokuapp.com');
    const cidades = await res.json();

    let matches = cidades.filter(cidade => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return cidade?.nome?.match(regex)
    });

    if(searchText.length === 0){
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches);
}

    const outputHtml = matches =>{
        if(matches.length > 0){
            const html = matches.map((match, index) => `
                <div class="xii card card-body mb-1 mt-3" onclick="weathermap(${index})">
                    <h4>${match.nome}</h4>
                    <small id="z${index}">${match.fuso_horario}</small>
                    <small id="y${index}">${match.longitude}</small>
                </div>`)
                .join('')
            matchList.innerHTML = html
        }
    }
search.addEventListener('input', () => searchNames(search.value))
