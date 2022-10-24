const url = "http://ancient-plateau-45399.herokuapp.com"
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

const searchNames = async searchText =>{
    const res = await fetch ('https://api-clima-resilia.herokuapp.com');
    const cidades = await res.json();
    let matches = cidades.filter(cidade => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return cidade.nome.match(regex)
    });

    if(searchText.length === 0){
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches);

    const outputHtml = matches =>{
        if(matches.length > 0){
            const html = matches.map(match => `
                <div class="card card-body mb-1">
                    <h4>${match.nome}</h4>
                    <small>${match.fuso_horario}</small>
                </div>`)
                .join('')
            matchList.innerHTML = html
        }
    }

search.addEventListener('input', () => searchNames(search.value))
}
