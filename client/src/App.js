import React, { useState } from "react";
import Start from "./components/Start";
import Mail from "./components/Mail";
import Welcom from "./components/Welcom";
import MissionCall from "./components/MissionCall";
import DefinitionNeed from "./components/DefinitionNeed"
import SelectionSaleProduсt from "./components/SelectionSaleProduсt"
import UseMiting from "./components/UseMiting"
import UseMitingPickUp from "./components/UseMitingPickUp"
import UseMitingPickUpOffline from "./components/UseMitingPickUpOffline"
import UseMitingPickUpOfflineOurOffice from "./components/UseMitingPickUpOfflineOurOffice"
import UseMitingPickUpOfflineСlientOffice from "./components/UseMitingPickUpOfflineСlientOffice"
import UseMitingPickUpOfflineNoMatterWhere from "./components/UseMitingPickUpOfflineNoMatterWhere"
import UseMitingPickUpOnline from "./components/UseMitingPickUpOnline"
import UseMitingPickUpNoMatterWhere from "./components/UseMitingPickUpNoMatterWhere"
import UseMitingProductPresentation from "./components/UseMitingProductPresentation"
import UseMitingProductPresentationOffline from "./components/UseMitingProductPresentationOffline"
import UseMitingProductPresentationOfflineOurOffice from "./components/UseMitingProductPresentationOfflineOurOffice"
import UseMitingProductPresentationOfflineClientOffice from "./components/UseMitingProductPresentationOfflineClientOffice"
import UseMitingProductPresentationOfflineNoMatterWhere from "./components/UseMitingProductPresentationOfflineNoMatterWhere"
import UseMitingProductPresentationOnline from "./components/UseMitingProductPresentationOnline"
import UseMitingProductPresentationNoMatterWhere from "./components/UseMitingProductPresentationNoMatterWhere"
import SendingCommercialOffer from "./components/SendingCommercialOffer"
import Finish from "./components/Finish"
import Bye from "./components/Bye";
import EmptyLine from "./components/EmptyLine"

import './styles/App.css';
import Password from "./components/Password";

export const dataScript = {};

function App() {
  let [state, setState] = useState('password');
  let [history, setHistory] = useState(['password'])
  let [further, setFurther] = useState('Далее')
  let [fillInInput, setfillInInput] = useState(false)
  let [corPassword, setPassword] = useState(false);
  let emptyInput = [];


  function logic() {
    console.log(dataScript.password);
    let emptyIput = pushData()
    if (emptyIput) {
      setfillInInput(fillInInput = true)
      for (let i = 0; i < emptyInput.length; i++) {
        document.getElementsByName(emptyIput[i]).classList.add = "emptyIput";
      }
    } else {
      setfillInInput(fillInInput = false)
      switch (state) {
        case 'password':
          pushData()
          if (dataScript.password == 1234) {
            setState(state = 'start');
            pushHistory(state);
          }else {
            setPassword(corPassword = true);
          }
          break;
        case 'start':
          pushData()
          setState(state = 'mail');
          pushHistory(state)
          break;
        case 'mail':
          setState(state = 'welcom');
          pushHistory(state)
          break;
        case 'welcom':
          setState(state = 'missionCall');
          pushHistory(state)
          break;
        case 'missionCall':
          if (dataScript.mission === 'Выявление потребностей (перед звонком с презентацией продукта)') {
            setState(state = 'definitionNeed');
          } else if (dataScript.mission === 'Подбор и продажа продукта (здесь и сейчас)') {
            setState(state = 'selectionSaleProduct');
          } else if (dataScript.mission === 'Назначение встречи (знакомство или презентация продукта)') {
            setState(state = 'useMiting');
          } else if (dataScript.mission === 'Отправка коммерческого предложения (здесь и сейчас)') {
            setState(state = 'sendingCommercialOffer');
          }
          pushHistory(state)
          break;

        case 'useMiting':
          if (dataScript.aimMeeteng === 'Знакомство') {
            setState(state = 'useMitingPickUp');
          } else if (dataScript.aimMeeteng === 'Презентация продукта') {
            setState(state = 'useMitingProductPresentation');
          }
          pushHistory(state)
          break;

        case 'useMitingProductPresentation':
          if (dataScript.meetingFormat === 'Offline') {
            setState(state = 'useMitingProductPresentationOffline');
          } else if (dataScript.meetingFormat === 'Online') {
            setState(state = 'useMitingProductPresentationOnline')
          } else if (dataScript.meetingFormat === 'Формат встречи не имеет значения') {
            setState(state = 'useMitingProductPresentationNoMatterWhere')
          }
          pushHistory(state)
          break;

        case 'useMitingProductPresentationOffline':
          if (dataScript.meetingOption === 'Наш офис') {
            setState(state = 'useMitingProductPresentationOfflineOurOffice');
          } else if (dataScript.meetingOption === 'Офис клиента') {
            setState(state = 'useMitingProductPresentationOfflineClientOffice')
          } else if (dataScript.meetingOption === 'Не важно где пройдёт встреча') {
            setState(state = 'useMitingProductPresentationOfflineNoMatterWhere')
          }
          pushHistory(state)
          break;

        case 'useMitingPickUp':
          if (dataScript.meetingFormat === 'Offline') {
            setState(state = 'useMitingPickUpOffline');
          } else if (dataScript.meetingFormat === 'Online') {
            setState(state = 'useMitingPickUpOnline');
          } else if (dataScript.meetingFormat === 'Формат встречи не имеет значения') {
            setState(state = 'useMitingPickUpNoMatterWhere');
          }
          pushHistory(state)
          break;

        case 'useMitingPickUpOffline':
          if (dataScript.meetingOption === 'Наш офис') {
            setState(state = 'useMitingPickUpOfflineOurOffice');
          } else if (dataScript.meetingOption === 'Офис клиента') {
            setState(state = 'useMitingPickUpOfflineСlientOffice');
          } else if (dataScript.meetingOption === 'Не важно где пройдёт встреча') {
            setState(state = 'useMitingPickUpOfflineNoMatterWhere');
          }
          pushHistory(state)
          break;

        case 'finish':
          setState(state = 'bye')
          setState('bye')
          delBtn()
          sendDataScript()
          break;

        default:
          setState(state = 'finish')
          setFurther(further = 'Завершить')
          pushHistory()
      }
    }
    // console.log(state)
    // console.log(history);
    // console.log(dataScript);

  }

  function createElements() {
    switch (state) {
      case 'password':
          return <Password incorrect={corPassword} />
      case 'start':
        return <Start />;
      case 'mail':
        return <Mail />;
      case 'welcom':
        return <Welcom />;
      case 'missionCall':
        return <MissionCall />;
      case 'definitionNeed':
        dataScript.sample = 'definitionNeed';
        return <DefinitionNeed />;
      case 'selectionSaleProduct':
        dataScript.sample = 'selectionSaleProduct';
        return <SelectionSaleProduсt />;
      case 'useMiting':
        return <UseMiting />;
      case 'useMitingPickUp':
        return <UseMitingPickUp />;
      case 'useMitingPickUpOffline':
        return <UseMitingPickUpOffline />;
      case 'useMitingPickUpOfflineOurOffice':
        dataScript.sample = 'useMitingPickUpOfflineOurOffice';
        return <UseMitingPickUpOfflineOurOffice />;
      case 'useMitingPickUpOfflineСlientOffice':
        dataScript.sample = 'useMitingPickUpOfflineСlientOffice';
        return <UseMitingPickUpOfflineСlientOffice />;
      case 'useMitingPickUpOfflineNoMatterWhere':
        dataScript.sample = 'useMitingPickUpOfflineNoMatterWhere';
        return <UseMitingPickUpOfflineNoMatterWhere />;
      case 'useMitingPickUpOnline':
        dataScript.sample = 'useMitingPickUpOnline';
        return <UseMitingPickUpOnline />;
      case 'useMitingPickUpNoMatterWhere':
        dataScript.sample = 'useMitingPickUpNoMatterWhere';
        return <UseMitingPickUpNoMatterWhere />;
      case 'useMitingProductPresentation':
        return <UseMitingProductPresentation />;
      case 'useMitingProductPresentationOffline':
        return <UseMitingProductPresentationOffline />;
      case 'useMitingProductPresentationOfflineOurOffice':
        dataScript.sample = 'useMitingProductPresentationOfflineOurOffice'
        return <UseMitingProductPresentationOfflineOurOffice />;
      case 'useMitingProductPresentationOfflineClientOffice':
        dataScript.sample = 'useMitingProductPresentationOfflineClientOffice';
        return <UseMitingProductPresentationOfflineClientOffice />;
      case 'useMitingProductPresentationOfflineNoMatterWhere':
        dataScript.sample = 'useMitingProductPresentationOfflineNoMatterWhere';
        return <UseMitingProductPresentationOfflineNoMatterWhere />;
      case 'useMitingProductPresentationOnline':
        dataScript.sample = 'useMitingProductPresentationOnline';
        return <UseMitingProductPresentationOnline />;
      case 'useMitingProductPresentationNoMatterWhere':
        dataScript.sample = 'useMitingProductPresentationNoMatterWhere';
        return <UseMitingProductPresentationNoMatterWhere />;
      case 'sendingCommercialOffer':
        dataScript.sample = 'sendingCommercialOffer';
        return <SendingCommercialOffer />;
      case 'finish':
        return <Finish />;
      case 'bye':
        return <Bye mail={dataScript.mail} />;
      default:
        console.log('Simple empty - error!')
    }
  }

  function pushHistory(name) {
    let copy = Object.assign([], history);
    copy.push(name)
    setHistory(copy)
  }

  function back() {
    if (state !== 'start') {
      let copy = Object.assign([], history);
      if (copy[copy.length - 1] !== 'finish') {
        setFurther(further = 'Далее');
      }
      setState(state = copy[copy.length - 2]);
      copy.pop()
      setHistory(copy)
      setfillInInput(fillInInput = false)
    }
  }

  function pushData() {
    let empty = false
    let inputDiv = document.querySelectorAll('.input')

    for (let i = 0; i < inputDiv.length; i++) {
      const exp = /\s/;
      dataScript[inputDiv[i].id] = inputDiv[i].innerText
      if (dataScript[inputDiv[i].id] == '') {
        empty = true
      }
    }

    let inputArr = document.querySelectorAll('input')
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].checked) {
        dataScript[inputArr[i].name] = inputArr[i].value
      }
    }

    return empty;
    // console.log(dataScript);
  }

  function delBtn() {
    let btn = document.querySelector(".btn")
    while (btn.firstChild) {
      btn.removeChild(btn.firstChild);
    }
  }

  function sendDataScript() {
    console.log(dataScript);
    let response = fetch('/dataScript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(dataScript)
    });


  }

  return (
    <div>
      {createElements()}
      <EmptyLine empty={fillInInput} />
      <div className="btn">
        <button onClick={back}>Назад</button>
        <button onClick={logic}>{further}</button>
      </div>
    </div>
  );
}

export default App;
