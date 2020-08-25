let campos = [];


function newParagraph() {
    let id = 0;
    if (campos.length !== 0) while (campos.filter(m => m.id === id)[0] !== undefined) id++;
    campos.push({id: id, tipo: 'text', conteudo: ""});
    renderParagraph();
}


function deleteParagraph(id) {
    campos.splice(campos.indexOf(campos.filter(value => value.id === id)[0]), 1);
    renderParagraph();
    if (campos.length === 0) {
        $('#paragraph_container').append('<span class="text-teal h4">Nenhum parágrafo adicionado</span>')
    }
}

function deleteAllParagraphs() {
    if (campos.length < 1) return;
    campos = [];
    renderParagraph();
    $('#paragraph_container').append('<span class="text-teal h4">Nenhum parágrafo adicionado</span>')

}


function renderParagraph() {
    campos.forEach(m => {
        m.conteudo = $('#conteudo_' + m.id).val();
        if (m.conteudo === undefined) m.conteudo = "";
    });

    $('#paragraph_container').html("");
    campos.forEach(m => {
        let campo = $(
            '<div class="row w-100" id="paragrafo_' + m.id + '">' +
                '<div class="col-11 " id="texto_' + m.id + '">' +
                    '<textarea class="form-control bg-light-2 text-dark m-0 my-3" id="conteudo_' + m.id + '" rows="3">' + m.conteudo + '</textarea>' +
                '</div>' +
                '<div class="col-1 d-flex flex-center">' +
                    '<button type="button" id="btn_' + m.id + '" class="btn" title="Excluir parágrafo"><i class="material-icons text-dark">delete</i></button>' +
                '</div>' +
            '</div>'
        );

        $('#paragraph_container').append(campo);
        document.getElementById('btn_' + m.id).addEventListener('click', () => deleteParagraph(m.id))
    });
}

export {newParagraph, deleteParagraph, deleteAllParagraphs};
