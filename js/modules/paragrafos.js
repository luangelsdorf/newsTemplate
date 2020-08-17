var fromDelete = Boolean;
let campos = [];
let paragraph_ph = "<div class=\"row border border-teal border-dashed rounded justify-content-center align-items-center my-5\" style=\"height: 116px;\"><p class=\"h4 text-teal ml-auto unselectable\">Nenhum parágrafo adicionado</p><div class=\"ml-auto align-self-start\"><a class=\"material-icons-outlined text-teal py-2 m-2 pointer\" id=\"add-paragraph\">add_box</a></div></div>";

function defaultParagraph() {
    if (campos.length === 0) {
        $('#paragraph_container')
            .removeClass('row border border-teal border-dashed rounded justify-content-center align-items-center my-5')
            .append(paragraph_ph)

    } else {
        $('#paragraph_container')
            .addClass('row border border-teal border-dashed rounded justify-content-center align-items-center my-5')
    }
}

function newParagraph() {
    let id = 0;
    if (campos.length !== 0) while (campos.filter(m => m.id === id)[0] !== undefined) id++;
    campos.push({id: id, tipo: 'text', conteudo: ""});
    fromDelete = false;
    renderParagraph();
}

function renderParagraph() {
    campos.forEach( m => {
            m.conteudo = $('#conteudo_' + m.id).val();
            if (m.conteudo === undefined) m.conteudo = "";
        }
    );
    $('#paragraph_container').html("");
    if (campos.length === 0) return;
    campos.forEach(m => {
            let campo = $("<div class=\"col-11 \" id=\"paragrafo_" + m.id + "\"><textarea class=\"form-control bg-light-2 text-dark m-0 my-3\" id=\"conteudo_" + m.id + "\" rows=\"3\">" + m.conteudo + "</textarea></div><div class=\"col-1 text-center\" id=\"btn_" + m.id + "\"><button type=\"button\" onclick=\"deleteParagraph(" + m.id + ");\" class=\"btn\" title=\"Excluir parágrafo\"><i class=\"material-icons text-dark\">delete</i></button></div>");
            $('#paragraph_container').append(campo);
            if (campos[campos.length - 1] === m && fromDelete === false) {
                campo.toggleClass('hidden').show(350)
            }
        }
    );
}

function deleteParagraph(id) {
    campos.splice(campos.indexOf(campos.filter(value => value.id === id)[0]), 1);
    fromDelete = true;
    renderParagraph();
    defaultParagraph();
}

function deleteAllParagraphs() {
    if (campos.length < 1) return;
    $('#paragraph_container').find('.col-md-11').hide(350);
    $('#paragraph_container').find('.col-md-1').hide(350);
    campos = [];
    setTimeout(function () {
        renderParagraph();
        defaultParagraph();
    }, 350)

}

export {defaultParagraph, newParagraph, renderParagraph, deleteParagraph, deleteAllParagraphs};
