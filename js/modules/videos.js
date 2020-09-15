let videos = []

function onChangeVid(event) {
    for (var i = 0; i < event.files.length; i++) {
        var reader = new FileReader();
        reader.onload = e => {
            var size = e.loaded / 1048576; // <-- MB
            newVid(e.target.result, size);
        };
        reader.readAsDataURL(event.files[i]);
        loadingVid()
    }
}

function newVid(src, size) {
    let id = 0;
    if (videos.length !== 0) while (videos.filter(m => m.id === id)[0] !== undefined) id++;
    videos.push({id: id, tipo: 'vid', conteudo: src, tamanho: size});
    renderVid();
}

function deleteVid(id) {
    videos.splice(videos.indexOf(videos.filter(value => value.id === id)[0]), 1);
    renderVid();
    if (videos.length === 0) {
        $('#video_container').html('').append('<span class="text-pink nenhum">Nenhum vídeo adicionado</span>')
    }
}

function deleteAllVids() {
    videos = [];
    $('#video_container').html('').append('<span class="text-pink nenhum">Nenhum vídeo adicionado</span>')
    $('#video-title').html('Vídeos')
}

function renderVid() {
    $('#video_container').html('');
    if (videos.length !== 0) {
        $('#video-title').html('').append(`Vídeos (${videos.length}) - ${totalVidSize().toFixed()} MB`);
        videos.forEach(m => {
            var vid = $(
                `<div class="col-lg-4 col-sm-6 my-2" id="video_${m.id}">\
                    <div class="alert alert-dismissible video-container bg-transparent border-custom shadow p-0 py-2 m-0 flex-center">\
                        <figure class="figure m-0 text-center max-w-75">\
                            <video class="video-preview figure-img rounded-top max-w-100" src="${m.conteudo}" id="figura_vid_${m.id}" controls></video>\
                            <figcaption class="figure-caption text-center text-dark bg-light-2 rounded-bottom py-1">\
                                <small id="caption_vid_${m.id}"></small>\
                                <small class="font-weight-bold">${m.tamanho.toFixed()} MB</small>\
                            </figcaption>\
                        </figure>\
                        <button type="button" class="btn close material-icons text-dark" id="deleteVid_${m.id}" data-dismiss="alert" aria-label="Close">close</button>\
                    </div>\
                </div>`
            );

            $('#video_container').append(vid);

            document.getElementById("figura_vid_" + m.id).oncanplay = function() {
                videos.forEach(m => {
                    document.getElementById("caption_vid_" + m.id).innerHTML = `
                        ${document.getElementById("figura_vid_" + m.id).videoWidth} x
                        ${document.getElementById("figura_vid_" + m.id).videoHeight}, 
                        `
                })
            }
            document.getElementById('deleteVid_' + m.id).addEventListener('click', () => deleteVid(m.id))
        });
    } else {
        $('#video-title').html('Vídeos')
    }
}



function totalVidSize() {
    let tamanhos = videos.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

function loadingVid() {
    $('#video_container').html('<i class="spinner-border text-pink align-self-center"></i>');
}

export {onChangeVid, deleteAllVids}