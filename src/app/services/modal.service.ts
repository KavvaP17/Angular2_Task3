import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

    private modalInfo = {
        isShow: false,
        deletedItemId: -1
    };

    constructor() { }

    modalShow(id: number): void {
        this.modalInfo.isShow = true;
        this.modalInfo.deletedItemId = id;
    }

    modalHide(): void {
        this.modalInfo.isShow = false;
        this.modalInfo.deletedItemId = -1;
    }

    getModalInfo() {
        return this.modalInfo;
    }

    getDeletedItemId(): number {
        return this.modalInfo.deletedItemId;
    }

}
