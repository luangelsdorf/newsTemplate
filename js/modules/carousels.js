let carousels = []
let viewCarousel = []

export function onChangeCarouselFile(event) {
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
            var size = document.getElementById('img_import').files[0].size / 1024; // <-- KB
            newImgViewCarousel(e.target.result, size);
        };
        reader.readAsDataURL(event.files[0]);
    }
}


export function newImgViewCarousel(src, size) {
    let id = 0;
    if (viewCarousel.length !== 0) while (viewCarousel.filter(m => m.id === id)[0] !== undefined) id++;
    viewCarousel.push({id: id, tipo: 'img', conteudo: src, tamanho: size});
    renderViewCarousel();
}


export function deleteCarouselImage(id) {
    viewCarousel.splice(viewCarousel.indexOf(viewCarousel.filter(value => value.id === id)[0]), 1);
    renderViewCarousel();
    if (viewCarousel.length === 0 ) {
        $('#carousel_contente').append('<span class="text-dark h5 my-5">Nenhuma imagem adicionada</span>')
    }
}

export function renderViewCarousel() {
    $('#carousel_contente').html("");
    if (viewCarousel.length !== 0) {
        viewCarousel.forEach(m => {
            var campo = $('<div class="col-lg-4 col-sm-6 my-2" id="imagem_' + m.id + '"><div class="alert alert-dismissible img-container bg-transparent border-custom shadow p-0 py-2 m-0 flex-center"><figure class="figure m-0 text-center max-w-75"><img class="img-preview figure-img rounded-top max-w-100" src="' + m.conteudo + '" alt="" id="carousel_img_' + m.id + '"><figcaption class="figure-caption text-center text-dark bg-light-4 rounded-bottom py-1"><small id="img_size_' + m.id + '"></small><small class="font-weight-bold">' + m.tamanho.toFixed() + 'KB</small></figcaption></figure><button type="button" id="deleteCarouselImage_' + m.id + '" class="btn close material-icons text-dark" data-dismiss="alert" aria-label="Close">close</button></div></div>');
            $('#carousel_contente').append(campo);

            setTimeout(() => {
                viewCarousel.forEach(m => {
                    document.getElementById("img_size_" + m.id).innerHTML = document.getElementById("carousel_img_" + m.id).naturalWidth + " x " + document.getElementById("carousel_img_" + m.id).naturalHeight + ", ";
                })
            }, 0)

            document.getElementById('deleteCarouselImage_' + m.id).addEventListener('click', () => deleteCarouselImage(m.id))
        });
    }
}


export function cleanViewCarousel() {
    viewCarousel = [];
    $('#carousel_contente').html('').append('<span class="text-dark h5 my-5">Nenhuma imagem adicionada</span>')

}


export function newCarousel() {
    if (viewCarousel.length !== 0) {
        let id = 0;
        if (carousels.length !== 0) while (carousels.filter(m => m.id === id)[0] !== undefined) id++;
        let size = singleCarouselSize(viewCarousel)
        carousels.push({id: id, conteudo: viewCarousel, tamanho: size});
        renderReadyCarousel();
    }
}


export function deleteCarousel(id) {
    carousels.splice(carousels.indexOf(carousels.filter(value => value.id === id)[0]), 1);
    renderReadyCarousel();
    if (carousels.length === 0) {
        $('#carousels_container').html('').append('<span class="text-caution h4">Nenhum carrossel adicionado</span>')
    }
}

export function renderReadyCarousel() {
    $('#carousels_container').html("");
    if (carousels.length !== 0) {
        $('#carousel-title').html('').append("Carrosséis (" + carousels.length + ") - " + totalCarouselSize());
        carousels.forEach(m => {
            var container = '<div class="row mx-3 mb-3 border rounded w-100 bg-light-2" id="carouselWrapper_' + m.id + '"><div class="row no-gutters w-100"><p class="lead font-weight-bold p-2 m-0 text-dark" id="carrossel_' + m.id + '"></p><div class="ml-auto align-self-start rounded bg-light-4 shadow-sm"><a class="material-icons text-danger p-2 md-18" href="javascript:void(0)" id="deleteCarousel_' + m.id + '">remove</a><a class="material-icons text-warning p-2 md-18" href="javascript:void(0)">edit</a></div></div></div>';
            $('#carousels_container').append(container);
            $('#carrossel_' + m.id).append(m.conteudo.length + ' imagens, ' + m.tamanho.toFixed() + ' KB');
            carousels[carousels.indexOf(m)].conteudo.forEach(n => {
                    var img = '<div class="col-md-2 p-3"><div class="alert img-carousel-container border-custom shadow-sm m-0 flex-center"><img class="rounded img-carousel-preview max-w-100" id="' + n.id + '" src="' + n.conteudo + '" alt=""></div></div>';
                    $('#carouselWrapper_' + m.id).append(img)
                });
            document.getElementById('deleteCarousel_' + m.id).addEventListener('click', () => deleteCarousel(m.id))
            });
        setTimeout(cleanViewCarousel, 1000);
    } else {
        $('#carousel-title').html('Carrosséis')
    }
}

export function singleCarouselSize(conteudo) {
    let tamanhos = conteudo.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

export function totalCarouselSize() {
    let tamanhos = carousels.map(a => a.tamanho);
    let size = tamanhos.reduce((a, b) => a + b, 0)

    if (size >= 1024) {
        size /= 1024;
        return size.toFixed(1).toString() + ' MB';
    } else {
        return size.toFixed(1).toString() + ' KB';
    }

}

export function deleteAllCarousels() {
    carousels = [];
    $('#carousels_container').html('').append('<span class="text-caution h4">Nenhum carrossel adicionado</span>')
    $('#carousel-title').html('Carrosséis')
}

