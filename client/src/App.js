import React, { useState} from "react";
import Favicon from 'react-favicon';
import Start from "./components/Start";
import Mail from "./components/Mail";
import Welcom from "./components/Welcom";
import MissionCall from "./components/MissionCall";
import DefinitionNeed from "./components/DefinitionNeed"
import SelectionSaleProduct from "./components/SelectionSaleProduсt"
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
  let [state, setState] = useState('start');
  let [history, setHistory] = useState(['start'])
  let [further, setFurther] = useState('Далее')
  let [fillInInput, setfillInInput] = useState(false)
  let [corPassword, setPassword] = useState(false);
  let emptyInput = [];

  let [mail, setMail] = useState("");
  let [welcom, setWelcom] = useState({
    position: "",
    form: "",
    title: ""
  });
  let [missionCall, setMissionCall] = useState("");
  let [definitionNeed, setDefinitionNeed] = useState({
    need: "",
    readyTime: "",
    meetingTime: "",
  })
  let [selectionSaleProduсt, setSelectionSaleProduсt] = useState({
    need: "",
    stagesOfRegistration: "",
  })
  let [useMitingPickUpOfflineOurOffice, setUseMitingPickUpOfflineOurOffice] = useState({
    officeAdress: "",
    meetingTime: ""
  })
  let [useMitingPickUpOfflineСlientOffice, setUseMitingPickUpOfflineСlientOffice] = useState("")
  let [useMitingPickUpOfflineNoMatterWhere, setUseMitingPickUpOfflineNoMatterWhere] = useState("")
  let [useMitingPickUpOnline, setUseMitingPickUpOnline] = useState({
    communicationApp: "",
    meetingTime: "",
  });
  let [useMitingPickUpNoMatterWhere, setUseMitingPickUpNoMatterWhere] = useState("");
  let [useMitingProductPresentationOfflineOurOffice, setUseMitingProductPresentationOfflineOurOffice] = useState({
    need: "",
    officeAdress: "",
    meetingTime: ""
  })
  let [useMitingProductPresentationOfflineClientOffice, setUseMitingProductPresentationOfflineClientOffice] = useState({
    need: "",
    meetingTime: ""
  })
  let [useMitingProductPresentationNoMatterWhere, setUseMitingProductPresentationNoMatterWhere] = useState({
    need: "",
    meetingTime: ""
  })
  let [useMitingProductPresentationOnline, setUseMitingProductPresentationOnline] = useState({
    need: "",
    communicationApp: "",
    meetingTime: ""
  })
  let [useMitingProductPresentationOfflineNoMatterWhere, setUseMitingProductPresentationOfflineNoMatterWhere] = useState({
    need: "",
    meetingTime: ""
  })
  let [sendingCommercialOffer, setSendingCommercialOffer] = useState("")




  function logic() {
    let emptyIput = pushData()
    if (emptyIput) {
      setfillInInput(fillInInput = true)
      for (let i = 0; i < emptyInput.length; i++) {
        document.getElementsByName(emptyIput[i]).classList.add = "emptyIput";
      }
    } else {
      setfillInInput(fillInInput = false)
      switch (state) {
        // case 'password':
        //   pushData()
        //   if (dataScript.password == 208316) {
        //     setState(state = 'start');
        //     pushHistory(state);
        //   } else {
        //     setPassword(corPassword = true);
        //   }
        //   break;
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
      window.scrollTo(0, 0);
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
        return <Mail mail={mail} />;
      case 'welcom':
        return <Welcom welcom={welcom} />;
      case 'missionCall':
        return <MissionCall missionCall={missionCall} />;
      case 'definitionNeed':
        dataScript.sample = 'definitionNeed';
        return <DefinitionNeed definitionNeed={definitionNeed} />;
      case 'selectionSaleProduct':
        dataScript.sample = 'selectionSaleProduct';
        return <SelectionSaleProduct selectionSaleProduct={selectionSaleProduсt} />;
      case 'useMiting':
        return <UseMiting />;
      case 'useMitingPickUp':
        return <UseMitingPickUp />;
      case 'useMitingPickUpOffline':
        return <UseMitingPickUpOffline />;
      case 'useMitingPickUpOfflineOurOffice':
        dataScript.sample = 'useMitingPickUpOfflineOurOffice';
        return <UseMitingPickUpOfflineOurOffice useMitingPickUpOfflineOurOffice={useMitingPickUpOfflineOurOffice} />;
      case 'useMitingPickUpOfflineСlientOffice':
        dataScript.sample = 'useMitingPickUpOfflineСlientOffice';
        return <UseMitingPickUpOfflineСlientOffice useMitingPickUpOfflineСlientOffice={useMitingPickUpOfflineСlientOffice} />;
      case 'useMitingPickUpOfflineNoMatterWhere':
        dataScript.sample = 'useMitingPickUpOfflineNoMatterWhere';
        return <UseMitingPickUpOfflineNoMatterWhere useMitingPickUpOfflineNoMatterWhere={useMitingPickUpOfflineNoMatterWhere} />;
      case 'useMitingPickUpOnline':
        dataScript.sample = 'useMitingPickUpOnline';
        return <UseMitingPickUpOnline useMitingPickUpOnline={useMitingPickUpOnline} />;
      case 'useMitingPickUpNoMatterWhere':
        dataScript.sample = 'useMitingPickUpNoMatterWhere';
        return <UseMitingPickUpNoMatterWhere useMitingPickUpNoMatterWhere={useMitingPickUpNoMatterWhere} />;
      case 'useMitingProductPresentation':
        return <UseMitingProductPresentation />;
      case 'useMitingProductPresentationOffline':
        return <UseMitingProductPresentationOffline />;
      case 'useMitingProductPresentationOfflineOurOffice':
        dataScript.sample = 'useMitingProductPresentationOfflineOurOffice'
        return <UseMitingProductPresentationOfflineOurOffice useMitingProductPresentationOfflineOurOffice={useMitingProductPresentationOfflineOurOffice} />;
      case 'useMitingProductPresentationOfflineClientOffice':
        dataScript.sample = 'useMitingProductPresentationOfflineClientOffice';
        return <UseMitingProductPresentationOfflineClientOffice useMitingProductPresentationOfflineClientOffice={useMitingProductPresentationOfflineClientOffice} />;
      case 'useMitingProductPresentationOfflineNoMatterWhere':
        dataScript.sample = 'useMitingProductPresentationOfflineNoMatterWhere';
        return <UseMitingProductPresentationOfflineNoMatterWhere useMitingProductPresentationOfflineNoMatterWhere={useMitingProductPresentationOfflineNoMatterWhere} />;
      case 'useMitingProductPresentationOnline':
        dataScript.sample = 'useMitingProductPresentationOnline';
        return <UseMitingProductPresentationOnline useMitingProductPresentationOnline={useMitingProductPresentationOnline} />;
      case 'useMitingProductPresentationNoMatterWhere':
        dataScript.sample = 'useMitingProductPresentationNoMatterWhere';
        return <UseMitingProductPresentationNoMatterWhere useMitingProductPresentationNoMatterWhere={useMitingProductPresentationNoMatterWhere} />;
      case 'sendingCommercialOffer':
        dataScript.sample = 'sendingCommercialOffer';
        return <SendingCommercialOffer sendingCommercialOffer={sendingCommercialOffer} />;
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
    if (state !== 'start' && state !== 'password') {
      let copy = Object.assign([], history);
      if (copy[copy.length - 1] !== 'finish') {
        setFurther(further = 'Далее');
      }
      setState(state = copy[copy.length - 2]);
      copy.pop()
      setHistory(copy)
      setfillInInput(fillInInput = false)
      window.scrollTo(0, 0);
    }
    
  }

  function pushData() {
    let empty = false
    let inputDiv = document.querySelectorAll('.input')

    for (let i = 0; i < inputDiv.length; i++) {
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
    monitoringState();

    return empty;
  }

  function monitoringState() {
    switch (state) {
      case 'mail':
        setMail(mail = dataScript.mail);
        break;
      case 'welcom':
        setWelcom({
          position: dataScript.position,
          form: dataScript.form,
          title: dataScript.title
        });
        break;
      case 'missionCall':
        setMissionCall(missionCall = dataScript.activity);
        break;
      case 'definitionNeed':
        setDefinitionNeed({
          need: dataScript.need,
          readyTime: dataScript.readyTime,
          meetingTime: dataScript.meetingTime,
        })
        break;
      case 'selectionSaleProduct':
        setSelectionSaleProduсt({
          need: dataScript.need,
          stagesOfRegistration: dataScript.stagesOfRegistration
        })
      case 'useMitingPickUpOfflineOurOffice':
        setUseMitingPickUpOfflineOurOffice({
          officeAdress: dataScript.officeAdress,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingPickUpOfflineСlientOffice':
        setUseMitingPickUpOfflineСlientOffice(useMitingPickUpOfflineСlientOffice = dataScript.meetingTime);
        break;
      case 'useMitingPickUpOfflineNoMatterWhere':
        setUseMitingPickUpOfflineNoMatterWhere(useMitingPickUpOfflineNoMatterWhere = dataScript.meetingTime)
        break;
      case 'useMitingPickUpOnline':
        setUseMitingPickUpOnline({
          communicationApp: dataScript.communicationApp,
          meetingTime: dataScript.meetingTime,
        })
        break;
      case 'useMitingPickUpNoMatterWhere':
        setUseMitingPickUpNoMatterWhere(useMitingPickUpNoMatterWhere = dataScript.meetingTime);
        break;
      case 'useMitingProductPresentationOfflineOurOffice':
        setUseMitingProductPresentationOfflineOurOffice({
          need: dataScript.need,
          officeAdress: dataScript.officeAdress,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingProductPresentationOfflineClientOffice':
        setUseMitingProductPresentationOfflineClientOffice({
          need: dataScript.need,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingProductPresentationNoMatterWhere':
        setUseMitingProductPresentationNoMatterWhere({
          need: dataScript.need,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingProductPresentationOnline':
        setUseMitingProductPresentationOnline({
          need: dataScript.need,
          communicationApp: dataScript.communicationApp,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingProductPresentationOfflineNoMatterWhere':
        setUseMitingProductPresentationOfflineNoMatterWhere({
          need: dataScript.need,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'sendingCommercialOffer':
        setSendingCommercialOffer(sendingCommercialOffer = dataScript.need)
        break
    }
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
      <Favicon url='favicon.ico'/>
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