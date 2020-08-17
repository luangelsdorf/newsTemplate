import * as para from "./modules/paragrafos.js";

$(document).ready(() => {
    setTheme(getDarkCookie());
});


function changeTheme() {
    setDarkCookie(!getDarkCookie());
    setTheme(getDarkCookie());
}


function getDarkCookie() {
    const name = "site_darkmode=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length) === "true";
    }
    return false;
}


function setDarkCookie(state) {
    const tempo = new Date();
    tempo.setDate(tempo.getTime() + (365*24*60*60*1000));
    const expires = "expires="+ tempo.toUTCString();
    document.cookie = "site_darkmode"+"="+state+";" +expires+"; path=/";
}


function setTheme(arg){
    if(!arg) {
        $('#darkMode').attr("checked", false);
        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light');
        $('.bg-dark').removeClass('bg-dark').addClass('bg-light');
        $('.bg-dark-lg').removeClass('bg-dark-lg').addClass("bg-light-lg");
        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-dark');
        $('.nav-item .text-light-3').addClass('text-dark').addClass('text-dark-3').removeClass('text-light-3');
        $('.nav-pills .active-dark').removeClass('active-dark').addClass('active');
        $('.bg-dark-sm').removeClass('bg-dark-sm').addClass('bg-light-2');
        $('.nav-item .nav-item').removeClass('text-light-3').addClass('text-dark').addClass('text-dark-3');
        $('.text-light').removeClass('text-light').addClass('text-dark');
        $('.text-light-2').removeClass('text-light-2').addClass('text-dark-2');
        $('.text-light-3').removeClass('text-light-3').addClass('text-dark-3');
        $('.span-light').removeClass('bg-light').addClass('bg-dark');
        $('.table-dark').removeClass('table-dark').addClass('table-light-4');
        $('.bg-dark-lg').removeClass('bg-dark-lg').addClass('btn-outline-light-2');
        $('.dropdown-item-dark').removeClass('dropdown-item-dark').addClass('dropdown-item');
        $('.btn-outline-light-3').removeClass('btn-outline-light-3').addClass('btn-outline-dark-lg');
        $('.text-light-3').removeClass('text-light-3').addClass('text-dark-lg');
        $('.border-light').removeClass('border-light').addClass('border-dark');
        $('.bg-primary-dark').removeClass('bg-primary-dark').addClass('bg-primary-light');
        $('.bg-success-dark').removeClass('bg-success-dark').addClass('bg-success-light');
        $('.bg-warning-dark').removeClass('bg-warning-dark').addClass('bg-warning-light');
        $('.bg-caution-dark').removeClass('bg-caution-dark').addClass('bg-caution-light');
        $('.bg-danger-dark').removeClass('bg-danger-dark').addClass('bg-danger-light');
        $('.bg-indigo-dark').removeClass('bg-indigo-dark').addClass('bg-indigo-light');
        $('.bg-pink-dark').removeClass('bg-pink-dark').addClass('bg-pink-light');
        $('.bg-teal-dark').removeClass('bg-teal-dark').addClass('bg-teal-light');
        $('.add-not-dark').removeClass('add-not-dark').addClass('add-not-light');






    } else {
        $('#darkMode').attr("checked", true);
        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark');
        $('.bg-light').removeClass('bg-light').addClass('bg-dark');
        $('.bg-light-lg').removeClass('bg-light-lg').addClass("bg-dark-lg");
        $('.btn-outline-dark').removeClass('btn-outline-dark').addClass('btn-outline-light');
        $('.nav-item .text-dark-3').addClass('text-light').addClass('text-light-3').removeClass('text-dark-3');
        $('.nav-pills .active').removeClass('active').addClass('active-dark');
        $('.bg-light-2').removeClass('bg-light-2').addClass('bg-dark-sm');
        $('.nav-item .nav-item').removeClass('text-dark-3').addClass('text-light').addClass('text-light-3');
        $('.text-dark').removeClass('text-dark').addClass('text-light');
        $('#copy').addClass('text-light');
        $('.text-dark-2').removeClass('text-dark-2').addClass('text-light-2');
        $('.text-dark-3').removeClass('text-dark-3').addClass('text-light-3');
        $('.span-light').removeClass('bg-dark').addClass('bg-light');
        $('.table-light-4').removeClass('table-light-4').addClass('table-dark');
        $('.btn-outline-light-2').removeClass('btn-outline-light-2').addClass('bg-dark-lg');
        $('.dropdown-item').removeClass('dropdown-item').addClass('dropdown-item-dark');
        $('.btn-outline-dark-lg').removeClass('btn-outline-dark-lg').addClass('btn-outline-light-3');
        $('.text-dark-lg').removeClass('text-dark-lg').addClass('text-light-3');
        $('.border-dark').removeClass('border-dark').addClass('border-light');
        $('.bg-primary-light').removeClass('bg-primary-light').addClass('bg-primary-dark');
        $('.bg-success-light').removeClass('bg-success-light').addClass('bg-success-dark');
        $('.bg-warning-light').removeClass('bg-warning-light').addClass('bg-warning-dark');
        $('.bg-caution-light').removeClass('bg-caution-light').addClass('bg-caution-dark');
        $('.bg-danger-light').removeClass('bg-danger-light').addClass('bg-danger-dark');
        $('.bg-indigo-light').removeClass('bg-indigo-light').addClass('bg-indigo-dark');
        $('.bg-pink-light').removeClass('bg-pink-light').addClass('bg-pink-dark');
        $('.bg-teal-light').removeClass('bg-teal-light').addClass('bg-teal-dark');
        $('.add-not-light').removeClass('add-not-light').addClass('add-not-dark');



    }
}

//--------------------------------------------------------------------------------------------------------------------\\
var fromDelete = Boolean;
var sideBarVisible = true;

/* Arrays */


let viewCarousel  = [];
let carousels     = [];

let imagens       = [];

let videos        = [];

/* Media Placeholders */

let carousel_ph    = "<div class=\"row border border-caution border-dashed rounded justify-content-center align-items-center my-5\" style=\"height: 116px;\"><p class=\"h4 text-caution ml-auto unselectable\">Nenhum carousel adicionado</p><div class=\"ml-auto align-self-start\"><a class=\"material-icons-outlined text-caution py-2 m-2\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#modalCarousel\">add_box</a></div></div>";
let image_ph       = "<div class=\"row border border-info border-dashed rounded justify-content-center align-items-center my-5\" style=\"height: 116px;\"><p class=\"h4 text-info ml-auto unselectable\">Nenhuma imagem adicionada</p><div class=\"ml-auto align-self-start\"><label class=\"btn p-0 material-icons-outlined text-info py-2 m-2\" for=\"img\">add_box</label><input class=\"form-control-file input-file\" type=\"file\" accept=\"image/*\" onchange=\"onChangeImg(this)\" id=\"img\"></div></div>";
let video_ph       = "<div class=\"row border border-pink border-dashed rounded justify-content-center align-items-center my-5\" style=\"height: 116px;\"><p class=\"h4 text-pink ml-auto unselectable\">Nenhum vídeo adicionado</p><div class=\"ml-auto align-self-start\"><label class=\"btn p-0 material-icons-outlined text-pink py-2 m-2\" for=\"vid\">add_box</label><input class=\"form-control-file input-file\" type=\"file\" accept=\"video/*\" onchange=\"onChangeVid(this)\" id=\"vid\"></div></div>";


/* Paragraph Functions */

$(document).ready(() => {
    document.querySelector('#addParagraph').addEventListener('click', () => {
        para.newParagraph()
    })
})

/* Carousel Functions */
function defaultCarousel() {
    if (carousels.length === 0) {
        $('.row.no-gutters.w-100').remove()
        $('#carousels_container')
            .removeClass('row border border-caution border-dashed rounded justify-content-center align-items-center my-5')
            .append(carousel_ph)

    } else {
        $('#carousels_container')
            .addClass('row border border-caution border-dashed rounded justify-content-center align-items-center my-5')
    }
}

function onChangeCarouselFile(event) {
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var size = document.getElementById('img_import').files[0].size / 1024; // <-- KB
            newImgViewCarousel(e.target.result, size);
        };
        reader.readAsDataURL(event.files[0]);
    }
}


function newImgViewCarousel(src, size) {
    let id = 0;
    if (viewCarousel.length !== 0) while (viewCarousel.filter(m => m.id === id)[0] !== undefined) id++;
    viewCarousel.push({id: id, tipo: 'img', conteudo: src, tamanho: size});
    fromDelete = false;
    renderViewCarousel();
}


function deleteCarouselImage(id) {
    viewCarousel.splice(viewCarousel.indexOf(viewCarousel.filter(value => value.id === id)[0]), 1);
    fromDelete = true;
    renderViewCarousel();
}

function renderViewCarousel() {
    $('#carousel_contente').html("");
    if (viewCarousel.length !== 0) {
        viewCarousel.forEach(m => {
                var campo = $("<div class=\"col-md-3 my-2 \" id=\"carousel_item_import_" + m.id + "\"><div class=\"alert alert-dismissible bg-transparent border-custom  shadow-sm p-0 py-2 m-0 fade show row no-gutters justify-content-center align-items-center\" style='max-height: 170px; height: 170px;'><img class=\"rounded\" style='max-height: 154px; max-width: 154px;' src=\"" + m.conteudo + "\" alt=\"\"><button type=\"button\" onclick='deleteCarouselImage(" + m.id + ")' class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\" class=\"text-dark\">&times;</span></button></div></div>");
                $('#carousel_contente').append(campo);
                if (viewCarousel[viewCarousel.length - 1] === m && fromDelete === false) {
                    campo.toggleClass('hidden').show(350, piscarVerde('#carousel_contente'))
                }
            }
        );
    }
    const imp = '<div class="col-md-3 my-2 text-center rounded" style="max-height: 170px; height: 170px;"><button class="btn btn-block border-custom shadow-sm bg-light-2" style="max-height: 170px; height: 170px;"><label class="m-0 p-0 btn" for="img_import"><i class="material-icons pt-2 md-10x text-dark">add</i></label><input class="form-control-file input-file" type="file" accept="image/*" onchange="onChangeCarouselFile(this)" id="img_import"></button></div>';
    $('#carousel_contente').append(imp);
    setTheme(getDarkCookie());
}


function cleanViewCarousel() {
    const imp = '<div class="col-md-3 text-center rounded" style="max-height: 170px; height: 170px;"><button class="btn btn-block border-custom shadow-sm bg-light-2" style="max-height: 170px; height: 170px;"><label class="m-0 p-0 btn" for="img_import"><i class="material-icons pt-2 md-10x text-dark">add</i></label><input class="form-control-file input-file" type="file" accept="image/*" onchange="onChangeCarouselFile(this)" id="img_import"></button></div>';
    $('#carousel_contente').html("").append(imp);
    viewCarousel = [];
}


function newCarousel() {
    if (viewCarousel.length !== 0) {
        let id = 0;
        if (carousels.length !== 0) while (carousels.filter(m => m.id === id)[0] !== undefined) id++;
        let size = singleCarouselSize(viewCarousel)
        carousels.push({id: id, conteudo: viewCarousel, tamanho: size});
        fromDelete = false;
        renderReadyCarousel();
    }
}


function deleteCarousel(id) {
    piscarVermelho('#carousels_container')
    carousels.splice(carousels.indexOf(carousels.filter(value => value.id === id)[0]), 1);
    fromDelete = true;
    renderReadyCarousel();
}

function editCarousel() {
    openCarousel();
    $('#carousel_contente').html("");
    if (bkp.length !== 0) {
        bkp.forEach(m => {
                var campo = "<div class=\"col-md-3 \" id=\"carousel_item_import_" + m.id + "\"><div class=\"alert alert-dismissible bg-transparent border-custom  shadow-sm p-0 py-2 m-0 fade show row no-gutters justify-content-center align-items-center\" style='max-height: 170px; height: 170px;'><img class=\"rounded\" style='max-height: 154px; max-width: 154px;' src=\"" + m.conteudo + "\" alt=\"\"><button type=\"button\" onclick='deleteCarouselImage(" + m.id + ")' class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\" class=\"text-dark\">&times;</span></button></div></div>";
                $('#carousel_contente').append(campo);
            }
        );
    }
    const imp = '<div class="col-md-3 text-center rounded" style="max-height: 170px; height: 170px;"><button class="btn btn-block border-custom shadow-sm bg-light-2" style="max-height: 170px; height: 170px;"><label class="m-0 p-0 btn" for="img_import"><i class="material-icons pt-2 md-10x text-dark">add</i></label><input class="form-control-file input-file" type="file" accept="image/*" onchange="onChangeCarouselFile(this)" id="img_import"></button></div>';
    $('#carousel_contente').append(imp);
    setTheme(getDarkCookie());
}

function renderReadyCarousel() {
    $('#carousels_container').html("");
    $('#carousels_container').append('<div class="row no-gutters w-100"><p class="h4 text-caution m-0 py-3 pl-3" id="carousels">Carousels</p><div class=\"ml-auto align-self-center rounded\"><a class=\"material-icons text-danger m-2\" title=\"Excluir todos\" href=\"javascript:void(0);\" onclick=\"deleteAllCarousels()\">close</a><a class=\"material-icons-outlined text-caution m-2\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#modalCarousel\">add_box</a></div></div>');
    $('#carousels').append(" (" + carousels.length + ") - " + totalCarouselSize());
    carousels.forEach(m => {
            var container = "<div class=\"row mx-3 mb-3 border rounded w-100 bg-light-2\" id=\"carouselWrapper_" + m.id + "\"><div class=\"row no-gutters w-100\" style=\"max-height: 32px;\"><p class=\"lead font-weight-bold p-2 m-0 text-dark\" id=\"carrossel_" + m.id + "\"></p><div class=\"ml-auto align-self-start rounded bg-light-4 shadow-sm\"><a class=\"material-icons text-danger p-2 md-18\" href=\"javascript:void(0)\" title=\"Excluir carrossel\" onclick=\"deleteCarousel(" + m.id + ")\">remove</a><a class=\"material-icons text-warning p-2 md-18\" href=\"javascript:void(0)\" title=\"Excluir carrossel\">edit</a></div></div></div>";
            $('#carousels_container').append(container);
            $('#carrossel_' + m.id).append(m.conteudo.length + ' imagens, ' + m.tamanho.toFixed() + ' KB');
            carousels[carousels.indexOf(m)].conteudo.forEach(n => {
                var img = "<div class=\"col-md-2 p-3\"><div class=\"alert bg-transparent border-custom border-custom shadow-sm p-0 py-2 m-0 fade show row no-gutters justify-content-center align-items-center\" style=\"max-height: 100px; height: 100px;\"><img class=\"rounded\" id=\"" + n.id + "\" style=\"max-height: 84px; max-width: 84px;\" src=\"" + n.conteudo + "\" alt=\"\"></div></div>";
                $('#carouselWrapper_' + m.id).append(img)

                if (carousels[carousels.length - 1] === m && fromDelete === false) {
                    $('#carouselWrapper_' + m.id).hide().show(350, piscarVerde('#carousels_container'));
                    }
                }
            );
        }
    );
    setTheme(getDarkCookie());
    setTimeout(cleanViewCarousel, 1000);
    defaultCarousel();
}

function singleCarouselSize(conteudo) {
    let tamanhos = conteudo.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

function totalCarouselSize() {
    let tamanhos = carousels.map(a => a.tamanho);
    let size = tamanhos.reduce((a, b) => a + b, 0)

    if (size >= 1024) {
        size /= 1024;
        return size.toFixed(1).toString() + ' MB';
    } else {
        return size.toFixed(1).toString() + ' KB';
    }

}

function deleteAllCarousels() {
    if (carousels.length < 1) return;
    $('#carousels_container').find('.row.mx-3.mb-3').hide(350, piscarVermelho('#carousels_container'));
    setTimeout(function() {
        carousels = [];
        renderReadyCarousel();
    }, 350)
}

/* Image Functions */
function defaultImg() {
    if (imagens.length === 0) {
        $('#img_container')
            .removeClass('row border border-info border-dashed rounded my-5')
            .append(image_ph)

    } else {
        $('#img_container')
            .addClass('row border border-info border-dashed rounded my-5')
    }
}

function newImg(src, size) {
    let id = 0;
    if (imagens.length !== 0) while (imagens.filter(m => m.id === id)[0] !== undefined) id++;
    imagens.push({id: id, tipo: 'img', conteudo: src, tamanho: size});
    fromDelete = false;
    renderImg();
}

function renderImg() {
    $('#img_container').html("");
    if (imagens.length !== 0) {
        $('#img_container').append('<div class="row no-gutters w-100"><p class="h4 text-info m-0 py-3 pl-3" id="imagens">Imagens</p><div class=\"ml-auto align-self-center rounded\"><a class=\"material-icons text-danger m-2\" title=\"Excluir todos\" href=\"javascript:void(0);\" onclick=\"deleteAllImgs()\">close</a><label class=\"btn-2 p-0 material-icons-outlined text-info m-2\" for=\"img\">add_box</label><input class=\"form-control-file input-file\" type=\"file\" accept=\"image/*\" onchange=\"onChangeImg(this)\" id=\"img\"></div></div>');
        $('#imagens').append(" (" + imagens.length + ") - " + totalImgSize().toFixed() + "KB");
        imagens.forEach(m => {
                var img = $("<div class=\"col-md-4 mt-3 mb-4\" id=\"imagem_" + m.id + "\"><div class=\"alert alert-dismissible bg-transparent border-custom shadow p-0 py-2 m-0 fade show row no-gutters justify-content-center align-items-center\" style='max-height: 256px; height: 256px;'><figure class=\"figure\"><img class=\"figure-img rounded-top\" style='max-height: 200px; max-width: 240px;' src=\"" + m.conteudo + "\" alt=\"\" id=\"figura_" + m.id + "\"><figcaption class=\"figure-caption text-center text-dark bg-light-2 rounded-bottom py-1\"><small id=\"caption_" + m.id + "\"></small><small class=\"font-weight-bold\">" + m.tamanho.toFixed() + " KB</small></figcaption></figure><button type=\"button\" onclick='deleteImg(" + m.id + ")' class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\" class=\"text-dark\">&times;</span></button></div></div>");
                $('#img_container').append(img);
                if (imagens[imagens.length - 1] === m && fromDelete === false) {
                    img.toggleClass('hidden').show(350, piscarVerde('#img_container'))
                }

                setTimeout(function() {
                    imagens.forEach(m => {
                        document.getElementById("caption_" + m.id).innerHTML = document.getElementById("figura_" + m.id).naturalWidth + " x " + document.getElementById("figura_" + m.id).naturalHeight + ", ";
                    })
                }, 0);
            }
        );
        setTheme(getDarkCookie());
        defaultImg();
    }
}

function totalImgSize() {
    let tamanhos = imagens.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

function onChangeImg(event) {
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var size = document.getElementById('img').files[0].size / 1024; // <-- KB
            newImg(e.target.result, size);
        };
        reader.readAsDataURL(event.files[0]);
    }
}

function deleteImg(id) {
    piscarVermelho('#img_container');
    imagens.splice(imagens.indexOf(imagens.filter(value => value.id === id)[0]), 1);
    fromDelete = true;
    renderImg();
    defaultImg();
}

function deleteAllImgs() {
    if (imagens.length < 1) return;
    $('#img_container').find('.col-md-4').hide(350, piscarVermelho('#img_container'));
    imagens = [];
    setTimeout(function () {
        renderImg();
        defaultImg();
    }, 350)
}


/* Video Functions */
function defaultVid() {
    if (videos.length === 0) {
        $('#video_container')
            .removeClass('row border border-pink border-dashed rounded my-5')
            .append(video_ph)

    } else {
        $('#video_container')
            .addClass('row border border-pink border-dashed rounded my-5')
    }
}

function newVid(src, size) {
    let id = 0;
    if (videos.length !== 0) while (videos.filter(m => m.id === id)[0] !== undefined) id++;
    videos.push({id: id, tipo: 'vid', conteudo: src, tamanho: size});
    fromDelete = false;
    renderVid();
}

function renderVid() {
    $('#video_container').html("");
    if (videos.length === 0) return;
    $('#video_container').append('<div class="row no-gutters w-100"><p class="h4 text-pink m-0 py-3 pl-3" id="videos">Vídeos</p><div class=\"ml-auto align-self-center rounded\"><a class=\"material-icons text-danger m-2\" title=\"Excluir todos\" href=\"javascript:void(0);\" onclick=\"deleteAllVids()\">close</a><label class=\"btn-2 p-0 material-icons-outlined text-pink m-2\" for=\"vid\">add_box</label><input class=\"form-control-file input-file\" type=\"file\" accept=\"video/*\" onchange=\"onChangeVid(this)\" id=\"vid\"></div></div>');
    $('#videos').append(" (" + videos.length + ") - " + totalVidSize().toFixed() + "MB");
    videos.forEach(m => {
            var vid = $("<div class=\"col-md-6 mt-3 mb-4\" id=\"video_col_" + m.id + "\"><div class=\"alert alert-dismissible bg-transparent border-custom shadow p-0 m-0 fade show row no-gutters justify-content-center align-items-center\" style='max-height: 384px; height: 384px;'><figure class=\"figure\"><video class=\"rounded-top\" id=\"video_" + m.id + "\" style='max-height: 320px; max-width: 380px;' src=\"" + m.conteudo + "\" controls></video><figcaption class=\"figure-caption text-center text-dark bg-light-2 rounded-bottom py-1\"><small id=\"caption_vid_" + m.id + "\"></small><small class=\"font-weight-bold\">" + m.tamanho.toFixed() + " MB</small></figcaption></figure><button type=\"button\" onclick='deleteVid(" + m.id + ")' class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\" class=\"text-dark\">&times;</span></button></div></div>");
            $('#video_container').append(vid);
            if (videos[videos.length - 1] === m && fromDelete === false) {
                vid.toggleClass('hidden').show(350)
            }

            document.getElementById("video_" + m.id).oncanplay = function() {
                videos.forEach(m => {
                    document.getElementById("caption_vid_" + m.id).innerHTML = document.getElementById("video_" + m.id).videoWidth + " x " + document.getElementById("video_" + m.id).videoHeight + ", ";
                })
            }
        }
    );
    setTheme(getDarkCookie());
    defaultVid();
}

function totalVidSize() {
    let tamanhos = videos.map(a => a.tamanho);
    return tamanhos.reduce((a, b) => a + b, 0)
}

function onChangeVid(event) {
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var size = document.getElementById('vid').files[0].size / 1048576; // <-- MB
            newVid(e.target.result, size);
        };
        reader.readAsDataURL(event.files[0]);
        loadingVid();
    }
}

function deleteVid(id) {
    videos.splice(videos.indexOf(videos.filter(value => value.id === id)[0]), 1);
    fromDelete = true;
    renderVid();
    defaultVid();
}


function deleteAllVids() {
    if (videos.length < 1) return;
    $('#video_container').find('.col-md-6').hide(350, piscarVermelho('#video_container'));
    videos = [];
    setTimeout(function () {
        renderVid();
        defaultVid();
    }, 350)
}

function loadingVid() {
    $('#video_container').append("<i class=\"spinner-border text-pink align-self-center\"></i>");
}


/* MISC */
$(document).ready(() => {
    $('#form_cancel').submit(() => {
        return false;
    });
});

function hideList(element, btn, arrow) {
    $(element).hide(200);
    $(arrow).removeClass('up').addClass('down');
    $(btn).removeAttr("onclick").attr("onclick", "showList(" + "'"  + element + "', " + "'" + btn + "', " + "'" + arrow + "'" + ")")
}

function showList(element, btn, arrow) {
    $(element).show(200);
    $(arrow).removeClass('down').addClass('up');
    $(btn).removeAttr("onclick").attr("onclick", "hideList(" + "'"  + element + "', " + "'" + btn + "', " + "'" + arrow + "'" + ")")
}

/* Flash Animation Green */

function piscarVerde(container) {
    $(container).addClass('bg-success');
    setTimeout(function() {
        $(container).removeClass('bg-success').addClass('flash');
    }, 25);
    setTimeout(function() {
        $(container).removeClass('flash')
    }, 400)
}

/* Flash Animation Red */

function piscarVermelho(container) {
    $(container).addClass('bg-danger');
    setTimeout(function() {
        $(container).removeClass('bg-danger').addClass('flash');
    }, 25);
    setTimeout(function() {
        $(container).removeClass('flash')
    }, 400)
}

/* SideBar */

function sideBarToggle() {
    sideBarVisible = !sideBarVisible;
    sideBarVisibility()
}

function sideBarVisibility() {
    if (sideBarVisible === true) {
        $('#sidebar').removeClass('d-none');
        $('#sidebar-toggle').text('navigate_before');
        $('#main').removeClass('col-md-12').addClass('col-md-10')

    } else {
        $('#sidebar').addClass('d-none');
        $('#sidebar-toggle').text('navigate_next');
        $('#main').removeClass('col-md-10').addClass('col-md-12')
    }
}

$('.add-not-light, .add-not-dark').click(function () {
    location.href = "add_noticia.html";
});

$(document).ready(() => {
    $('#add-capa-btn').on('click', () => {
        if (checkCarousels() + imagens.length < 2) {
            piscarVermelho('#error')
            document.getElementById('error').innerHTML = '<span class="material-icons align-middle pb-1 pr-1">error</span><span>Adicione ao menos 2 imagens para poder escolher a capa</span>'

        } else {
            document.getElementById('error').innerHTML = ''
            imagens.forEach(m => {
                var img = '<div class="col-md-4 p-2"><img class="img-fluid" src="' + m.conteudo + '" alt=""></div>'
                $('#capas-container').append(img)
            })

            $('#add-capa').modal()
        }
    })
});

function checkCarousels() {
    let imgCounter = 0
    carousels.forEach(carousel => {
        carousel.conteudo.forEach(() => {
            imgCounter += 1
        })
    })
    return imgCounter
}