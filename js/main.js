/*$(document).ready(() => {
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
}*/

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
import('./modules/paragrafos.js')
    .then((paragrafos) => {
        document.querySelector('#addParagraph').addEventListener('click', () => {
            paragrafos.newParagraph()
        })

        document.querySelector('#deleteAllParagraphs').addEventListener('click', () => {
            paragrafos.deleteAllParagraphs()
        })
    })


/* Carousel Functions */
import('./modules/carousels.js')
    .then((carousels) => {
        /*MODAL*/
        document.querySelector('#cleanViewCarousel').addEventListener('click', () => {
            carousels.cleanViewCarousel()
        })

        document.querySelector('#img_import').addEventListener('input', () => {
            carousels.onChangeCarouselFile(document.querySelector('#img_import'))
        })

        document.querySelector('#newCarousel').addEventListener('click', () => {
            carousels.newCarousel()
        })

        document.querySelector('#cancelCarousel').addEventListener('click', () => {
            setTimeout(() => {
                carousels.cleanViewCarousel()
            }, 500)
        })

        /*NON-MODAL*/
        document.querySelector('#deleteAllCarousels').addEventListener('click', () => {
            carousels.deleteAllCarousels()
        })
    })

/* Image Functions */
import('./modules/imagens.js')
    .then((imagens) => {
        document.querySelector('#addImg').addEventListener('input', () => {
            imagens.onChangeImg(document.querySelector('#addImg'))
        })

        document.querySelector('#deleteAllImgs').addEventListener('click', () => {
            imagens.deleteAllImgs()
        })
    })


/* Video Functions */
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
    $('#video_container').append('<div class="row no-gutters w-100"><p class="h4 text-pink m-0 py-3 pl-3" id="videos">Vídeos</p><div class="ml-auto align-self-center rounded"><a class="material-icons text-danger m-2" title="Excluir todos" href="javascript:void(0);" onclick="deleteAllVids()">close</a><label class="btn-2 p-0 material-icons-outlined text-pink m-2" for="vid">add_box</label><input class="form-control-file input-file" type="file" accept="video/*" onchange="onChangeVid(this)" id="vid"></div></div>');
    $('#videos').append(" (" + videos.length + ") - " + totalVidSize().toFixed() + "MB");
    videos.forEach(m => {
            var vid = $('<div class="col-md-6 mt-3 mb-4" id="video_col_' + m.id + '"><div class="alert alert-dismissible bg-transparent border-custom shadow p-0 m-0 fade show row no-gutters justify-content-center align-items-center" style="max-height: 384px; height: 384px;"><figure class="figure"><video class="rounded-top" id="video_' + m.id + '" style="max-height: 320px; max-width: 380px;" src="' + m.conteudo + '" controls></video><figcaption class="figure-caption text-center text-dark bg-light-2 rounded-bottom py-1"><small id="caption_vid_' + m.id + '"></small><small class="font-weight-bold">' + m.tamanho.toFixed() + ' MB</small></figcaption></figure><button type="button" onclick="deleteVid(' + m.id + ')" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="text-dark">&times;</span></button></div></div>');
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
}


function deleteAllVids() {
    if (videos.length < 1) return;
    $('#video_container').find('.col-md-6').hide(350, piscarVermelho('#video_container'));
    videos = [];
    renderVid();
}

function loadingVid() {
    $('#video_container').append('<i class="spinner-border text-pink align-self-center"></i>');
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