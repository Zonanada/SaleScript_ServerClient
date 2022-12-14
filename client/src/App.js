import React, { useState} from "react";
import Favicon from 'react-favicon';
import Start from "./components/Start";
import Mail from "./components/Mail";
import Welcom from "./components/Welcom";
import MissionCall from "./components/MissionCall";
import DefinitionNeed from "./components/DefinitionNeed"
import SelectionSaleProduct from "./components/SelectionSaleProdu—Āt"
import UseMiting from "./components/UseMiting"
import UseMitingPickUp from "./components/UseMitingPickUp"
import UseMitingPickUpOffline from "./components/UseMitingPickUpOffline"
import UseMitingPickUpOfflineOurOffice from "./components/UseMitingPickUpOfflineOurOffice"
import UseMitingPickUpOffline–°lientOffice from "./components/UseMitingPickUpOffline–°lientOffice"
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
  let [further, setFurther] = useState('–Ē–į–Ľ–Ķ–Ķ')
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
  let [selectionSaleProdu—Āt, setSelectionSaleProdu—Āt] = useState({
    need: "",
    stagesOfRegistration: "",
  })
  let [useMitingPickUpOfflineOurOffice, setUseMitingPickUpOfflineOurOffice] = useState({
    officeAdress: "",
    meetingTime: ""
  })
  let [useMitingPickUpOffline–°lientOffice, setUseMitingPickUpOffline–°lientOffice] = useState("")
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
          if (dataScript.mission === '–í—č—Ź–≤–Ľ–Ķ–Ĺ–ł–Ķ –Ņ–ĺ—ā—Ä–Ķ–Ī–Ĺ–ĺ—Ā—ā–Ķ–Ļ (–Ņ–Ķ—Ä–Ķ–ī –∑–≤–ĺ–Ĺ–ļ–ĺ–ľ —Ā –Ņ—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł–Ķ–Ļ –Ņ—Ä–ĺ–ī—É–ļ—ā–į)') {
            setState(state = 'definitionNeed');
          } else if (dataScript.mission === '–ü–ĺ–ī–Ī–ĺ—Ä –ł –Ņ—Ä–ĺ–ī–į–∂–į –Ņ—Ä–ĺ–ī—É–ļ—ā–į (–∑–ī–Ķ—Ā—Ć –ł —Ā–Ķ–Ļ—á–į—Ā)') {
            setState(state = 'selectionSaleProduct');
          } else if (dataScript.mission === '–Ě–į–∑–Ĺ–į—á–Ķ–Ĺ–ł–Ķ –≤—Ā—ā—Ä–Ķ—á–ł (–∑–Ĺ–į–ļ–ĺ–ľ—Ā—ā–≤–ĺ –ł–Ľ–ł –Ņ—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł—Ź –Ņ—Ä–ĺ–ī—É–ļ—ā–į)') {
            setState(state = 'useMiting');
          } else if (dataScript.mission === '–ě—ā–Ņ—Ä–į–≤–ļ–į –ļ–ĺ–ľ–ľ–Ķ—Ä—á–Ķ—Ā–ļ–ĺ–≥–ĺ –Ņ—Ä–Ķ–ī–Ľ–ĺ–∂–Ķ–Ĺ–ł—Ź (–∑–ī–Ķ—Ā—Ć –ł —Ā–Ķ–Ļ—á–į—Ā)') {
            setState(state = 'sendingCommercialOffer');
          }
          pushHistory(state)
          break;

        case 'useMiting':
          if (dataScript.aimMeeteng === '–ó–Ĺ–į–ļ–ĺ–ľ—Ā—ā–≤–ĺ') {
            setState(state = 'useMitingPickUp');
          } else if (dataScript.aimMeeteng === '–ü—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł—Ź –Ņ—Ä–ĺ–ī—É–ļ—ā–į') {
            setState(state = 'useMitingProductPresentation');
          }
          pushHistory(state)
          break;

        case 'useMitingProductPresentation':
          if (dataScript.meetingFormat === 'Offline') {
            setState(state = 'useMitingProductPresentationOffline');
          } else if (dataScript.meetingFormat === 'Online') {
            setState(state = 'useMitingProductPresentationOnline')
          } else if (dataScript.meetingFormat === '–§–ĺ—Ä–ľ–į—ā –≤—Ā—ā—Ä–Ķ—á–ł –Ĺ–Ķ –ł–ľ–Ķ–Ķ—ā –∑–Ĺ–į—á–Ķ–Ĺ–ł—Ź') {
            setState(state = 'useMitingProductPresentationNoMatterWhere')
          }
          pushHistory(state)
          break;

        case 'useMitingProductPresentationOffline':
          if (dataScript.meetingOption === '–Ě–į—ą –ĺ—Ą–ł—Ā') {
            setState(state = 'useMitingProductPresentationOfflineOurOffice');
          } else if (dataScript.meetingOption === '–ě—Ą–ł—Ā –ļ–Ľ–ł–Ķ–Ĺ—ā–į') {
            setState(state = 'useMitingProductPresentationOfflineClientOffice')
          } else if (dataScript.meetingOption === '–Ě–Ķ –≤–į–∂–Ĺ–ĺ –≥–ī–Ķ –Ņ—Ä–ĺ–Ļ–ī—Ď—ā –≤—Ā—ā—Ä–Ķ—á–į') {
            setState(state = 'useMitingProductPresentationOfflineNoMatterWhere')
          }
          pushHistory(state)
          break;

        case 'useMitingPickUp':
          if (dataScript.meetingFormat === 'Offline') {
            setState(state = 'useMitingPickUpOffline');
          } else if (dataScript.meetingFormat === 'Online') {
            setState(state = 'useMitingPickUpOnline');
          } else if (dataScript.meetingFormat === '–§–ĺ—Ä–ľ–į—ā –≤—Ā—ā—Ä–Ķ—á–ł –Ĺ–Ķ –ł–ľ–Ķ–Ķ—ā –∑–Ĺ–į—á–Ķ–Ĺ–ł—Ź') {
            setState(state = 'useMitingPickUpNoMatterWhere');
          }
          pushHistory(state)
          break;

        case 'useMitingPickUpOffline':
          if (dataScript.meetingOption === '–Ě–į—ą –ĺ—Ą–ł—Ā') {
            setState(state = 'useMitingPickUpOfflineOurOffice');
          } else if (dataScript.meetingOption === '–ě—Ą–ł—Ā –ļ–Ľ–ł–Ķ–Ĺ—ā–į') {
            setState(state = 'useMitingPickUpOffline–°lientOffice');
          } else if (dataScript.meetingOption === '–Ě–Ķ –≤–į–∂–Ĺ–ĺ –≥–ī–Ķ –Ņ—Ä–ĺ–Ļ–ī—Ď—ā –≤—Ā—ā—Ä–Ķ—á–į') {
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
          setFurther(further = '–ó–į–≤–Ķ—Ä—ą–ł—ā—Ć')
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
        return <SelectionSaleProduct selectionSaleProduct={selectionSaleProdu—Āt} />;
      case 'useMiting':
        return <UseMiting />;
      case 'useMitingPickUp':
        return <UseMitingPickUp />;
      case 'useMitingPickUpOffline':
        return <UseMitingPickUpOffline />;
      case 'useMitingPickUpOfflineOurOffice':
        dataScript.sample = 'useMitingPickUpOfflineOurOffice';
        return <UseMitingPickUpOfflineOurOffice useMitingPickUpOfflineOurOffice={useMitingPickUpOfflineOurOffice} />;
      case 'useMitingPickUpOffline–°lientOffice':
        dataScript.sample = 'useMitingPickUpOffline–°lientOffice';
        return <UseMitingPickUpOffline–°lientOffice useMitingPickUpOffline–°lientOffice={useMitingPickUpOffline–°lientOffice} />;
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
        setFurther(further = '–Ē–į–Ľ–Ķ–Ķ');
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
        setSelectionSaleProdu—Āt({
          need: dataScript.need,
          stagesOfRegistration: dataScript.stagesOfRegistration
        })
      case 'useMitingPickUpOfflineOurOffice':
        setUseMitingPickUpOfflineOurOffice({
          officeAdress: dataScript.officeAdress,
          meetingTime: dataScript.meetingTime
        })
        break;
      case 'useMitingPickUpOffline–°lientOffice':
        setUseMitingPickUpOffline–°lientOffice(useMitingPickUpOffline–°lientOffice = dataScript.meetingTime);
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
        <button onClick={back}>–Ě–į–∑–į–ī</button>
        <button onClick={logic}>{further}</button>
      </div>
    </div>
  );
}

export default App;