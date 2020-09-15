const modal = `<div class="modal fade addCarousel" id="modalCarousel" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content bg-light">
            <div class="modal-header">
                <h5 class="modal-title text-dark" id="modalCarouselTitle">Adicionar Carousel</h5>
                <button type="button" class="btn close material-icons text-dark" data-dismiss="modal">close</button>
            </div>
            <div class="modal-body">
                <div class="view-carousel rounded">
                    <div class="row no-gutters justify-content-between w-100">
                        <span class="h5 m-0 text-dark media-container-title pt-1">Imagens</span>
                        <div>
                            <span class="btn material-icons text-danger" id="cleanViewCarousel">close</span>
                            <input class="form-control-file input-file" type="file" accept="image/*" id="img_import">
                                <label class="btn material-icons-outlined m-0 text-dark" for="img_import">add_box</label>
                        </div>
                    </div>
                    <div class="row flex-center p-2" id="carousel_contente">
                        <span class="text-dark nenhum my-5">Nenhuma imagem adicionada</span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn bg-success text-white" id="newCarousel" data-dismiss="modal">
                    Salvar Mudanças
                </button>
                <button type="button" class="btn btn-outline-primary" id="cancelCarousel" data-dismiss="modal">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</div>`