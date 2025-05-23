import {Document} from "./document.js";

export class DocumentContainer {
    /**
     * @param {Document[]} documents
     */
    constructor(documents = []) {
        this.documents = documents;
        this.showDetails = true;
    }

    addDocument(doc) {
        this.documents.push(doc);
    }

    removeDocument(index) {
        this.documents.splice(index, 1);
    }

    moveDocument(fromIndex, toIndex) {
        const [moved] = this.documents.splice(fromIndex, 1);
        this.documents.splice(toIndex, 0, moved);
    }

    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

    printDocuments() {
        this.documents.forEach(doc => {
            if (this.showDetails) {
                console.log(doc.toString());
            } else {
                console.log(doc.fullName());
            }
        });
    }
}
