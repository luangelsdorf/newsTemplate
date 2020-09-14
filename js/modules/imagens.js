let imagens = []


function onChangeImg(event) {
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var size = document.getElementById('addImg').files[0].size / 1024; // <-- KB
            newImg(e.target.result, size);
        };
        reader.readAsDataURL(event.files[0]);
    }
}

function newImg(src, size) {
    let id = 0;
    if (imagens.length !== 0) while (imagens.filter(m => m.id === id)[0] !== undefined) id++;
    imagens.push({id: id, tipo: 'img', conteudo: src, tamanho: size});
    renderImg();
}

function deleteImg(id) {
    imagens.splice(imagens.indexOf(imagens.filter(value => value.id === id)[0]), 1);
    renderImg()
    if (imagens.length === 0) {
        $('#img_container').html('').append('<span class="text-info nenhum">Nenhuma imagem adicionada</span>')
    }
}

function deleteAllImgs() {
    imagens = [];
    $('#img_container').html('').append('<span class="text-info nenhum">Nenhuma imagem adicionada</span>')
    $('#img-title').html('Imagens')
}

function renderImg() {
    $('#img_container').html('');
    if (imagens.length !== 0) {
        $('#img-title').html('').append(`Imagens (${imagens.length}) - ${totalImgSize().toFixed()} KB`)
        imagens.forEach(m => {
            var img = $(
                `<div class="col-lg-3 col-sm-6 my-2" id="imagem_${m.id}">\
                    <div class="alert alert-dismissible img-container bg-transparent border-custom shadow p-0 py-2 m-0 flex-center">\
                        <figure class="figure m-0 text-center max-w-75">\
                            <img class="img-preview figure-img rounded-top max-w-100" src="${m.conteudo}" alt="" id="figura_${m.id}">\
                            <figcaption class="figure-caption text-center text-dark bg-light-2 rounded-bottom py-1">\
                                <small id="caption_${m.id}"></small>\
                                <small class="font-weight-bold">${m.tamanho.toFixed()} KB</small>\
                            </figcaption>\
                        </figure>\
                        <button type="button" class="btn close material-icons text-dark" id="deleteImg_${m.id}" data-dismiss="alert" aria-label="Close">close</button>\
                    </div>\
                </div>`
            );
            $('#img_container').append(img);
            setTimeout(function () {
                imagens.forEach(m => {
                    let width = document.getElementById("figura_" + m.id).naturalWidth
                    let height = document.getElementById("figura_" + m.id).naturalHeight
                    document.getElementById("caption_" + m.id).innerHTML = width + " x " + height + ", ";
                })
            }, 0);
            document.getElementById('deleteImg_' + m.id).addEventListener('click', () => deleteImg(m.id))
            document.getElementById('imagem_' + m.id).addEventListener('click', (e) => {
                viewImg(e, document.getElementById('figura_' + m.id), m.conteudo)
            })
        });
    } else {
        $('#img-title').html('Imagens')
    }
}

function viewImg(event, img, src) {
    if (event.target.localName !== 'button') {
        document.querySelector('#viewImgTitle').innerHTML = `Visualizar Imagem (${img.naturalWidth} x ${img.naturalHeight})`;
        document.querySelector('#viewImgBody').innerHTML = `<figure class="figure m-0 text-center max-w-95"><img class="max-w-100" src="${src}" alt="">`
        $('#viewImg').modal()
    }
}

function totalImgSize() {
    let tamanhos = imagens.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

export {onChangeImg, deleteAllImgs}