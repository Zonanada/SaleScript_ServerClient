const sendScript = require("./sendScript.js");
const XlsxPopulate = require('xlsx-populate');

function createSample(dataScript) {
  // console.log(dataScript.sample);
  switch (dataScript.sample) {
    case 'definitionNeed':
      definitionNeed(dataScript)
      break;
    case 'selectionSaleProduct':
      selectionSaleProduct(dataScript)
      break;
    case 'sendingCommercialOffer':
      sendingCommercialOffer(dataScript)
      break;
    case 'useMitingPickUpOfflineOurOffice':
      useMitingPickUpOfflineOurOffice(dataScript)
      break;
    case 'useMitingPickUpOfflineСlientOffice':
      useMitingPickUpOfflineСlientOffice(dataScript)
      break;
    case 'useMitingPickUpOfflineNoMatterWhere':
      useMitingPickUpOfflineNoMatterWhere(dataScript)
      break;
    case 'useMitingPickUpOnline':
      useMitingPickUpOnline(dataScript)
      break;
    case 'useMitingPickUpNoMatterWhere':
      useMitingPickUpNoMatterWhere(dataScript)
      break;
    case 'useMitingProductPresentationOfflineOurOffice':
      useMitingProductPresentationOfflineOurOffice(dataScript)
      break;
    case 'useMitingProductPresentationOfflineClientOffice':
      useMitingProductPresentationOfflineClientOffice(dataScript)
      break;
    case 'useMitingProductPresentationOfflineNoMatterWhere':
      useMitingProductPresentationOfflineNoMatterWhere(dataScript)
      break;
    case 'useMitingProductPresentationOnline':
      useMitingProductPresentationOnline(dataScript)
      break;
    case 'useMitingProductPresentationNoMatterWhere':
      useMitingProductPresentationNoMatterWhere(dataScript)
      break;
    default:
      console.log('Back-end no sample! Error!')
      break;
  }
}


function definitionNeed(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяГотовности%+/g, match => dataScript.readyTime)
      workbook.find(/%ВремяРазговора%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000);
  // fs.unlink(`/script/*.xlsx`, function(){})
}

function selectionSaleProduct(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ЭтапыОформления%+/g, match => dataScript.stagesOfRegistration)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function sendingCommercialOffer(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function useMitingPickUpOfflineOurOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Адрес%+/g, match => dataScript.officeAdress)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)

}

function useMitingPickUpOfflineСlientOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)

}

function useMitingPickUpOfflineNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)

}

function useMitingPickUpOnline(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ПриложениеДляСвязи%+/g, match => dataScript.communicationApp)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}


function useMitingPickUpNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function useMitingProductPresentationOfflineOurOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%Адрес%+/g, match => dataScript.officeAdress)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function useMitingProductPresentationOfflineClientOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function useMitingProductPresentationOfflineNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

function useMitingProductPresentationOnline(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ПриложениеДляСвязи%+/g, match => dataScript.communicationApp)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}


function useMitingProductPresentationNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./saleScript/simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./saleScript/readySimple/${dataScript.title}.xlsx`);
    });
  setTimeout(sendScript(dataScript.mail, dataScript.title), 5000)
}

module.exports = createSample;