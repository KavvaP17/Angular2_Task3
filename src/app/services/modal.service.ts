import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

    private deleteModal = {
        isShow: false,
        deletedItemId: -1
    };

    constructor() { }

    modalShow(id: number): void {
        this.deleteModal.isShow = true;
        this.deleteModal.deletedItemId = id;
    }

    modalHide(): void {
        this.deleteModal.isShow = false;
        this.deleteModal.deletedItemId = -1;
    }

    modalIsShow() {
        return this.deleteModal;
    }

    getDeletedItemId(): number {
        return this.deleteModal.deletedItemId;
    }

}
