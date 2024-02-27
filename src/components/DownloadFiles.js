import pdfFile from '../resources/Instrumento de evaluación del conjunto de recomendaciones.pdf';
import excelFile from '../resources/Instrumento de evaluación.xlsx';
import { saveAs } from 'file-saver';


const filename = 'Instrumento de evaluación del conjunto de recomendaciones';

function download(auxFile, filename, typeFile) {
  const file = new File([auxFile], filename + '.' + typeFile, { type: 'application/' + typeFile });
  saveAs(file);
}

const DownloadFiles = () => {
    return (
      <div className='buttons-download'>
        <button className="button-file" onClick={() => download(pdfFile, filename, 'pdf')}>
          <img src="https://github.com/cViviana/Prototipo-herramienta-web/blob/008dd6fbb6a3eb9c075a20f6427f20e7634bd943/public/pdf.png" alt="Descargar PDF" />
          <span>Descargar PDF</span>
        </button>
        <button className="button-file" onClick={() => download(excelFile, filename, 'xlsx')}>
          <img src="https://github.com/cViviana/Prototipo-herramienta-web/blob/008dd6fbb6a3eb9c075a20f6427f20e7634bd943/public/excel.png" alt="Descargar Excel" />
          <span>Descargar EXCEL</span>
        </button>
      </div>
    );
}
export default DownloadFiles;  
