// Creational Design Pattern

// Define a custom interface for our documents
interface CustomDocument {
  create(): string;
}

// Implement concrete document classes
class PDFDocument implements CustomDocument {
  create(): string {
    return 'Creating PDF document';
  }
}

class WordDocument implements CustomDocument {
  create(): string {
    return 'Creating Word document';
  }
}

// Abstract creator class
abstract class DocumentCreator {
  abstract createDocument(): CustomDocument;
}

// Concrete creator classes
class PDFCreator extends DocumentCreator {
  createDocument(): CustomDocument {
    return new PDFDocument();
  }
}

class WordCreator extends DocumentCreator {
  createDocument(): CustomDocument {
    return new WordDocument();
  }
}

// Usage
const pdfCreator = new PDFCreator();
const wordCreator = new WordCreator();

const pdfDoc = pdfCreator.createDocument();
const wordDoc = wordCreator.createDocument();

console.log(pdfDoc.create()); // Output: Creating PDF document
console.log(wordDoc.create()); // Output: Creating Word document
