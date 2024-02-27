import pdfFile from '../resources/Instrumento de evaluación del conjunto de recomendaciones.pdf';
import excelFile from '../resources/Instrumento de evaluación.xlsx';
import { saveAs } from 'file-saver';
import pdfImg from '../resources/buttons/pdf.png';

const filename = 'Instrumento de evaluación del conjunto de recomendaciones';

function download(auxFile, filename, typeFile) {
  const file = new File([auxFile], filename + '.' + typeFile, { type: 'application/' + typeFile });
  saveAs(file);
}

const DownloadFiles = () => {
    return (
      <div className='buttons-download'>
        <button className="button-file" onClick={() => download(pdfFile, filename, 'pdf')}>
          <img src={pdfImg} alt="Descargar PDF" />
          <span>Descargar PDF</span>
        </button>
        <button className="button-file" onClick={() => download(excelFile, filename, 'xlsx')}>
          <img src="../resources/buttons/excel.png" alt="Descargar Excel" />
          <span>Descargar EXCEL</span>
        </button>
      </div>
    );
}
export default DownloadFiles;  
