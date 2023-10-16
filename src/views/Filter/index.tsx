import {useState} from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { FTFBOARD_PATH } from "constant";


//     component: 필터 화면 컴포넌트      //
export default function Filter() {

  const navigator = useNavigate();

  const [filter, setFilter] = useState<number>(1);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  

  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onChoiceButtonClickHandler = () => {
    navigator(FTFBOARD_PATH());
  }

  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onCheckButtonClickHandler = () => {
      navigator(FTFBOARD_PATH());
  }


  const filterRestore = () => {
    setFilter(1);
  }

  const filterChange = () => {
    setFilter(2);
  }

  const GangwonChange = () => {
    setFilter(3);
  }

  const GyeonggiChange = () => {
    setFilter(4);
  }

  const GyeongsangnamChange = () => {
    setFilter(5);
  }
  
  const GyeongsangbukChange = () => {
    setFilter(6);
  }
  
  const GwangjuChange = () => {
    setFilter(7);
  }
  
  const DaeguChange = () => {
    setFilter(8);
  }
  
  const DaejeonChange = () => {
    setFilter(9);
  }
  
  const BusanChange = () => {
    setFilter(10);
  }
  
  const SeoulChange = () => {
    setFilter(11);
  }
  
  const SejongChange = () => {
    setFilter(12);
  }
  
  const UlsanChange = () => {
    setFilter(13);
  }
  
  const IncheonChange = () => {
    setFilter(14);
  }
  
  const JeollanamChange = () => {
    setFilter(15);
  }
  
  const JeollabukChange = () => {
    setFilter(16);
  }
  
  const JejuChange = () => {
    setFilter(17);
  }
  
  const ChungcheongnamChange = () => {
    setFilter(18);
  }
  
  const ChungcheongbukChange = () => {
    setFilter(19);
  }

  const generateGangwonChangeFunctions = () => {
    const gangwonChangeFunctions = [];
    for (let i = 1; i <= 18; i++) {
      gangwonChangeFunctions.push(() => setFilter(i + 19));
    }
    return gangwonChangeFunctions;
  };
  
  const [
    GangwonChange1, GangwonChange2, GangwonChange3, GangwonChange4,
    GangwonChange5, GangwonChange6, GangwonChange7, GangwonChange8,
    GangwonChange9, GangwonChange10, GangwonChange11, GangwonChange12,
    GangwonChange13, GangwonChange14, GangwonChange15, GangwonChange16,
    GangwonChange17, GangwonChange18
  ] = generateGangwonChangeFunctions();


  const generateGyeonggiChangeFunctions = () => {
    const gyeonggiChangeFunctions = [];
    for (let i = 1; i <= 42; i++) {
      gyeonggiChangeFunctions.push(() => setFilter(i + 37));
    }
    return gyeonggiChangeFunctions;
  };

  const [
    GyeonggiChange1, GyeonggiChange2, GyeonggiChange3, GyeonggiChange4,
    GyeonggiChange5, GyeonggiChange6, GyeonggiChange7, GyeonggiChange8,
    GyeonggiChange9, GyeonggiChange10, GyeonggiChange11, GyeonggiChange12,
    GyeonggiChange13, GyeonggiChange14, GyeonggiChange15, GyeonggiChange16,
    GyeonggiChange17, GyeonggiChange18, GyeonggiChange19, GyeonggiChange20,
    GyeonggiChange21, GyeonggiChange22, GyeonggiChange23, GyeonggiChange24,
    GyeonggiChange25, GyeonggiChange26, GyeonggiChange27, GyeonggiChange28,
    GyeonggiChange29, GyeonggiChange30, GyeonggiChange31, GyeonggiChange32,
    GyeonggiChange33, GyeonggiChange34, GyeonggiChange35, GyeonggiChange36,
    GyeonggiChange37, GyeonggiChange38, GyeonggiChange39, GyeonggiChange40,
    GyeonggiChange41, GyeonggiChange42

  ] = generateGyeonggiChangeFunctions();

  const generateGyeongsangnamChangeFunctions = () => {
    const gyeongsangnamChangeFunctions = [];
    for (let i = 1; i <= 22; i++) {
      gyeongsangnamChangeFunctions.push(() => setFilter(i + 79));
    }
    return gyeongsangnamChangeFunctions;
  };

  const [
    GyeongsangnamChange1, GyeongsangnamChange2, GyeongsangnamChange3, GyeongsangnamChange4,
    GyeongsangnamChange5, GyeongsangnamChange6, GyeongsangnamChange7, GyeongsangnamChange8,
    GyeongsangnamChange9, GyeongsangnamChange10, GyeongsangnamChange11, GyeongsangnamChange12,
    GyeongsangnamChange13, GyeongsangnamChange14, GyeongsangnamChange15, GyeongsangnamChange16,
    GyeongsangnamChange17, GyeongsangnamChange18, GyeongsangnamChange19, GyeongsangnamChange20,
    GyeongsangnamChange21, GyeongsangnamChange22
  ] = generateGyeongsangnamChangeFunctions();


  const generateGyeongsangbukChangeFunctions = () => {
    const gyeongsangbukChangeFunctions = [];
    for (let i = 1; i <= 23; i++) {
      gyeongsangbukChangeFunctions.push(() => setFilter(i + 101));
    }
    return gyeongsangbukChangeFunctions;
  };

  const [
    GyeongsangbukChange1, GyeongsangbukChange2, GyeongsangbukChange3, GyeongsangbukChange4,
    GyeongsangbukChange5, GyeongsangbukChange6, GyeongsangbukChange7, GyeongsangbukChange8,
    GyeongsangbukChange9, GyeongsangbukChange10, GyeongsangbukChange11, GyeongsangbukChange12,
    GyeongsangbukChange13, GyeongsangbukChange14, GyeongsangbukChange15, GyeongsangbukChange16,
    GyeongsangbukChange17, GyeongsangbukChange18, GyeongsangbukChange19, GyeongsangbukChange20,
    GyeongsangbukChange21, GyeongsangbukChange22, GyeongsangbukChange23
  ] = generateGyeongsangbukChangeFunctions();


  const generateGwangjuChangeFunctions = () => {
    const gwangjuChangeFunctions = [];
    for (let i = 1; i <= 5; i++) {
      gwangjuChangeFunctions.push(() => setFilter(i + 124));
    }
    return gwangjuChangeFunctions;
  };

  const [
    GwangjuChange1, GwangjuChange2, GwangjuChange3, GwangjuChange4,
    GwangjuChange5
  ] = generateGwangjuChangeFunctions();


  const generateDaeguChangeFunctions = () => {
    const daeguChangeFunctions = [];
    for (let i = 1; i <= 9; i++) {
      daeguChangeFunctions.push(() => setFilter(i + 129));
    }
    return daeguChangeFunctions;
  };

  const [
    DaeguChange1, DaeguChange2, DaeguChange3, DaeguChange4,
    DaeguChange5, DaeguChange6, DaeguChange7, DaeguChange8,
    DaeguChange9
  ] = generateDaeguChangeFunctions();


  const generateDaejeonChangeFunctions = () => {
    const daejeonChangeFunctions = [];
    for (let i = 1; i <= 5; i++) {
      daejeonChangeFunctions.push(() => setFilter(i + 139));
    }
    return daejeonChangeFunctions;
  };

  const [
    DaejeonChange1, DaejeonChange2, DaejeonChange3, DaejeonChange4,
    DaejeonChange5
  ] = generateDaejeonChangeFunctions();


  const generateBusanChangeFunctions = () => {
    const busanChangeFunctions = [];
    for (let i = 1; i <= 16; i++) {
      busanChangeFunctions.push(() => setFilter(i + 144));
    }
    return busanChangeFunctions;
  };

  const [
    BusanChange1, BusanChange2, BusanChange3, BusanChange4,
    BusanChange5, BusanChange6, BusanChange7, BusanChange8,
    BusanChange9, BusanChange10, BusanChange11, BusanChange12,
    BusanChange13, BusanChange14, BusanChange15, BusanChange16
  ] = generateBusanChangeFunctions();

  const generateSeoulChangeFunctions = () => {
    const seoulChangeFunctions = [];
    for (let i = 1; i <= 25; i++) {
      seoulChangeFunctions.push(() => setFilter(i + 160));
    }
    return seoulChangeFunctions;
  };

  const [
    SeoulChange1, SeoulChange2, SeoulChange3, SeoulChange4,
    SeoulChange5, SeoulChange6, SeoulChange7, SeoulChange8,
    SeoulChange9, SeoulChange10, SeoulChange11, SeoulChange12,
    SeoulChange13, SeoulChange14, SeoulChange15, SeoulChange16,
    SeoulChange17, SeoulChange18, SeoulChange19, SeoulChange20,
    SeoulChange21, SeoulChange22, SeoulChange23, SeoulChange24,
    SeoulChange25

  ] = generateSeoulChangeFunctions();


  const SejongChange1 = () => {
    setFilter(186);
  }


  const generateUlsanChangeFunctions = () => {
    const UlsanChangeFunctions = [];
    for (let i = 1; i <= 5; i++) {
      UlsanChangeFunctions.push(() => setFilter(i + 186));
    }
    return UlsanChangeFunctions;
  };

  const [
    UlsanChange1, UlsanChange2, UlsanChange3, UlsanChange4,
    UlsanChange5
  ] = generateUlsanChangeFunctions();

  const generateIncheonChangeFunctions = () => {
    const IncheonChangeFunctions = [];
    for (let i = 1; i <= 10; i++) {
      IncheonChangeFunctions.push(() => setFilter(i + 191));
    }
    return IncheonChangeFunctions;
  };

  const [
    IncheonChange1, IncheonChange2, IncheonChange3, IncheonChange4,
    IncheonChange5, IncheonChange6, IncheonChange7, IncheonChange8,
    IncheonChange9, IncheonChange10
  ] = generateIncheonChangeFunctions();


  const generateJeollanamChangeFunctions = () => {
    const JeollanamChangeFunctions = [];
    for (let i = 1; i <= 22; i++) {
      JeollanamChangeFunctions.push(() => setFilter(i + 201));
    }
    return JeollanamChangeFunctions;
  };

  const [
    JeollanamChange1, JeollanamChange2, JeollanamChange3, JeollanamChange4,
    JeollanamChange5, JeollanamChange6, JeollanamChange7, JeollanamChange8,
    JeollanamChange9, JeollanamChange10, JeollanamChange11, JeollanamChange12,
    JeollanamChange13, JeollanamChange14, JeollanamChange15, JeollanamChange16,
    JeollanamChange17, JeollanamChange18, JeollanamChange19, JeollanamChange20,
    JeollanamChange21, JeollanamChange22
  ] = generateJeollanamChangeFunctions();

  const generateJeollabukChangeFunctions = () => {
    const JeollabukChangeFunctions = [];
    for (let i = 1; i <= 15; i++) {
      JeollabukChangeFunctions.push(() => setFilter(i + 223));
    }
    return JeollabukChangeFunctions;
  };

  const [
    JeollabukChange1, JeollabukChange2, JeollabukChange3, JeollabukChange4,
    JeollabukChange5, JeollabukChange6, JeollabukChange7, JeollabukChange8,
    JeollabukChange9, JeollabukChange10, JeollabukChange11, JeollabukChange12,
    JeollabukChange13, JeollabukChange14, JeollabukChange15
  ] = generateJeollabukChangeFunctions();

  const generateJejuChangeFunctions = () => {
    const JejuChangeFunctions = [];
    for (let i = 1; i <= 3; i++) {
      JejuChangeFunctions.push(() => setFilter(i + 238));
    }
    return JejuChangeFunctions;
  };

  const [
    JejuChange1, JejuChange2, JejuChange3
  ] = generateJejuChangeFunctions();


  const generateChungcheongnamChangeFunctions = () => {
    const ChungcheongnamChangeFunctions = [];
    for (let i = 1; i <= 16; i++) {
      ChungcheongnamChangeFunctions.push(() => setFilter(i + 241));
    }
    return ChungcheongnamChangeFunctions;
  };

  const [
    ChungcheongnamChange1, ChungcheongnamChange2, ChungcheongnamChange3, ChungcheongnamChange4,
    ChungcheongnamChange5, ChungcheongnamChange6, ChungcheongnamChange7, ChungcheongnamChange8,
    ChungcheongnamChange9, ChungcheongnamChange10, ChungcheongnamChange11, ChungcheongnamChange12,
    ChungcheongnamChange13, ChungcheongnamChange14, ChungcheongnamChange15, ChungcheongnamChange16
  ] = generateChungcheongnamChangeFunctions();


  const generateChungcheongbukChangeFunctions = () => {
    const ChungcheongbukChangeFunctions = [];
    for (let i = 1; i <= 14; i++) {
      ChungcheongbukChangeFunctions.push(() => setFilter(i + 257));
    }
    return ChungcheongbukChangeFunctions;
  };

  const [
    ChungcheongbukChange1, ChungcheongbukChange2, ChungcheongbukChange3, ChungcheongbukChange4,
    ChungcheongbukChange5, ChungcheongbukChange6, ChungcheongbukChange7, ChungcheongbukChange8,
    ChungcheongbukChange9, ChungcheongbukChange10, ChungcheongbukChange11, ChungcheongbukChange12,
    ChungcheongbukChange13, ChungcheongbukChange14
  ] = generateChungcheongbukChangeFunctions();










  //                         .                                           //

  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onFilteringClickHandler = () => {
      
  }

  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onFindClickHandler = () => {
      
  }


  const FirstFilter = () => {
    
    

    //     render: 첫 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button"> 
            <div className="choice-left-button" onClick={filterChange}> 위치 등록후 게시물 찾기 </div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}> 내 주변 사람 계시물 찾기 </div>
          </div>
        </div>
      </div>
    )
  }

  const SecoundFilter = () => {



    //     render: 두번째 필터 화면 컴포넌트 랜더링      //  
    return (
      <div  className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-check">시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange}>강원특별자치도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange}>경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange}>경상남도</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange}>경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GwangjuChange}>광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange}>대구광역시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={DaejeonChange}>대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange}>부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange}>서울특별시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SejongChange}>세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={UlsanChange}>울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange}>인천광역시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange}>전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange}>전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JejuChange}>제주특별자치도</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={ChungcheongnamChange}>충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={ChungcheongbukChange}>충청북도</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFilter = () => {



    //     render: 강원도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange1}>강릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange2}>고성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange3}>동해시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange4}>삼척시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange5}>속초시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange6}>양구군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange7}>양양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange8}>영월군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange9}>원주시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange10}>인제군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange11}>정선군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange12}>철원군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange13}>춘천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange14}>태백시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange15}>평창군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange16}>홍천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange17}>화천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GangwonChange18}>횡성군</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFilter = () => {



    //     render: 경기도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange1}>가평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange2}>고양시덕양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange3}>고양시일산동구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange4}>고양시일산서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange5}>과천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange6}>광명시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange7}>광주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange8}>구리시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange9}>군포시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange10}>김포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange11}>남양주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange12}>동두천시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange13}>부천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange14}>성남시분당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange15}>성남시수정구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange16}>성남시중원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange17}>수원시권선구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange18}>수원시영통구구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange19}>수원시장안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange20}>수원시팡달구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange21}>시흥시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange22}>안산시단원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange23}>안산시상록구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange24}>안성시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange25}>안양시동안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange26}>안양시만안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange27}>양주시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange28}>양평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange29}>여주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange30}>연천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange31}>오산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange32}>용인시기흥구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange33}>용인시수지구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange34}>용인시처인구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange35}>의왕시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange36}>의정부시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange37}>이천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange38}>파주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange39}>평택시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeonggiChange40}>포천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange41}>하남시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange42}>화성시</div>
            </div>

          </div>
        </div>
      </div>
    )

  }
  const GyeongsangnamFilter = () => {



    //     render: 경상남도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange1}>거제시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange2}>거창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange3}>고성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange4}>김해시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange5}>남해군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange6}>밀양시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange7}>사천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange8}>산청군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange9}>양산시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange10}>의령군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange11}>진주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange12}>창녕군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange13}>창원시 마산합포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange14}>창원시 마산회원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange15}>창원시 성산구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange16}>창원시 의창구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange17}>창원시 진해구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange18}>통영시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangnamChange19}>하동군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange20}>함안군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange21}>함양군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={GyeongsangnamChange22}>합천군</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeongsangbukFilter = () => {



    //     render: 경상북도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange1}>경산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange2}>경주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange3}>고령군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange4}>구미시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange5}>김천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange6}>문경시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange7}>봉화군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange8}>상주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange9}>성주군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange10}>안동시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange11}>영덕군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange12}>영양군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange13}>영주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange14}>영천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange15}>예천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange16}>울릉군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange17}>울진군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange18}>의성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GyeongsangbukChange19}>청도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange20}>청송군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangbukChange21}>칠곡군</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={GyeongsangbukChange22}>포항시남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={GyeongsangbukChange23}>포항시북구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GwangjuFilter = () => {



    //     render: 광주 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GwangjuChange1}>광산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GwangjuChange2}>남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GwangjuChange3}>동구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={GwangjuChange4}>북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={GwangjuChange5}>서구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const DaeguFilter = () => {



    //     render: 대구 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={DaeguChange1}>근위군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange2}>남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange3}>달서구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={DaeguChange4}>달성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange5}>동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange6}>북구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={DaeguChange7}>서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange8}>수성구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaeguChange9}>중구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const DaejeonFilter = () => {



    //     render: 대전 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={DaejeonChange1}>대덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaejeonChange2}>동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={DaejeonChange3}>서구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={DaejeonChange4}>유성구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={DaejeonChange5}>충청북도</div>
            </div>
          </div>
        </div>
    )

  }

  const BusanFilter = () => {



    //     render: 부산 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={BusanChange1}>강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange2}>금정구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange3}>기장군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={BusanChange4}>남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange5}>동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange6}>동래구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={BusanChange7}>부산진구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange8}>북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange9}>사상구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={BusanChange10}>사하구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange11}>서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange12}>수영구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={BusanChange13}>연제구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange14}>영도구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={BusanChange15}>중구</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={BusanChange16}>해운대구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const SeoulFilter = () => {



    //     render: 서울 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange1}>강남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange2}>강동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange3}>강북구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange4}>강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange5}>관악구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange6}>광진구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange7}>구로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange8}>금천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange9}>노원구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange10}>도봉구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange11}>동대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange12}>동작구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange13}>마포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange14}>서대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange15}>서초구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange16}>성동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange17}>성북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange18}>송파구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange19}>양천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange20}>영등포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange21}>용산구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={SeoulChange22}>은평구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange23}>종로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={SeoulChange24}>중구</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={SeoulChange25}>중랑구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const SejongFilter = () => {



    //     render: 세종 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>제종특별자치시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={SejongChange1}>세종특별자치시</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const UlsanFilter = () => {



    //     render: 울산 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={UlsanChange1}>남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={UlsanChange2}>동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={UlsanChange3}>북구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={UlsanChange4}>울주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={UlsanChange5}>중구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const IncheonFilter = () => {



    //     render: 인천 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={IncheonChange1}>강화군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange2}>계양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange3}>남동구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={IncheonChange4}>동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange5}>미추홀구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange6}>부평구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={IncheonChange7}>서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange8}>연수구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={IncheonChange9}>옹진군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={IncheonChange10}>중구</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const JeollanamFilter = () => {



    //     render: 전라남도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange1}>강진군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange2}>고흥군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange3}>곡성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange4}>광양시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange5}>구례군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange6}>나주시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange7}>담양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange8}>목포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange9}>무안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange10}>보성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange11}>순천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange12}>신안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange13}>여수시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange14}>영광군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange15}>영암군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange16}>완도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange17}>장성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange18}>장흥군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollanamChange19}>진도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange20}>함평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollanamChange21}>해남군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={JeollanamChange22}>화순군</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const JeollabukFilter = () => {



    //     render: 전라북도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollabukChange1}>고창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange2}>군산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange3}>김제시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollabukChange4}>남원시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange5}>무주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange6}>부안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollabukChange7}>순창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange8}>완주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange9}>익산시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollabukChange10}>임실군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange11}>장수군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange12}>전주시덕진구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JeollabukChange13}>전주시완산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange14}>정읍시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JeollabukChange15}>진안군</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const JejuFilter = () => {



    //     render: 제주 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>제주특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={JejuChange1}>서귀포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JejuChange2}>이어도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={JejuChange3}>제주시</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const ChungcheongnamFilter = () => {



    //     render: 충청남도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongnamChange1}>계릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange2}>공주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange3}>금산군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongnamChange4}>논산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange5}>당진시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange6}>보령시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongnamChange7}>부여군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange8}>서산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange9}>서천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongnamChange10}>아산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange11}>예산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange12}>전안시동남구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongnamChange13}>전안시서북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange14}>청양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongnamChange15}>태안군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={ChungcheongnamChange16}>흥성군</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const ChungcheongbukFilter = () => {



    //     render: 충청북도 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongbukChange1}>괴산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange2}>단양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange3}>보은군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongbukChange4}>영동군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange5}>옥천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange6}>음성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongbukChange7}>제천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange8}>증평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange9}>진천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={ChungcheongbukChange10}>청주시상당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange11}>청주시서원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={ChungcheongbukChange12}>청주시청원구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={ChungcheongbukChange13}>청주시흥덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={ChungcheongbukChange14}>충주시</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter1 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>강릉시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>경포동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>교1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성덕동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연곡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>왕산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주문진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초당동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>포남1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>포남2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍제동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter2 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>고성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>간성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>죽왕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>토성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현내면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter3 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>동해시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목호동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>발한동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복삼동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">천곡동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter4 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>삼척시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>근덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도계읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미로면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신기면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원덕읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정라동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하장면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter5 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>속초시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노학동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영랑동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>조양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>청호동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter6 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>양구군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>국토정중앙면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방산면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>양구읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>해안면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter7 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>양양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>손양면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현북면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter8 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>영월군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>김삿갓면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무릉도원면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산솔면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상동읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영월읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한반도면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter9 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>원주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>귀래면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단계동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>단구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명륜1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명륜2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>무실동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문막읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반곡관설동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부론면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소초면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원인동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>태장1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태장2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>판부면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>학성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호저면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>흥업면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter10 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>인제군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>기린면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인제읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter11 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>정선군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고한읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북평면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사북읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여량면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정선읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화암면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter12 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>철원군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈말읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>근남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>근동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>근북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>김화읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동송읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원동면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>임남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>철원읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter13 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>춘천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>근화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동내면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석사동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>소양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신북읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신사우동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>약사명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조운동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>퇴계동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>효자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>후평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>후평2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">후평3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter14 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>태백시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구문소동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문곡소도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼수동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>철암동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>황연동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황지동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter15 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>평창군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대관령면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미탄면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용평면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>진부면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>평창읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter16 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>홍천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내촌면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>두촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북방면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서석면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영귀미면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍천읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화촌면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter17 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>화천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>간동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상서면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>하남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화천읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GangwonFliter18 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>강원특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>횡성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갑천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공근면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>둔내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안흥면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>횡성읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter1 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>가평군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>설악면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter2 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>고양시덕양구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>능곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼송1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼송2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성사1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성사2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원신동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창릉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행신1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>행신2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행신3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행신4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>행주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>화정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>흥도동</div>
            </div>

            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter3 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>고양시일산동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마두1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마두2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백석1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백석2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>식사동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장항1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장향2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정발산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter4 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>고양시일산서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가좌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕이동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일산2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주엽1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주엽2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>탄현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>탄현2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter5 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>과천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>과천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문원동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>별양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원문동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter6 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>광명시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광명1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광명2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광명3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광명4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광명5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광명6동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광명7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소하1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소하2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일직동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>철산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>철산2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>철산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>철산4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하안1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>하안2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하안3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하안4동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>학온동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter7 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>광주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>경안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>곤지암읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광남1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광남2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남한산성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>능평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도척면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍령동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오포1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초월읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>탄벌동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>퇴촌면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter8 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구리시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈매동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교문1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교문2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수택1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수택2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>수택3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>인창동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter9 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>군포시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군포1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군포2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>궁내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대야동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산본1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산본2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송부동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>재궁동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter10 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>김포시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고촌읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구래동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>김포본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대곶면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사우동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양촌읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월곷면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장기동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장기본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>통진읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>풍무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>하성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter11 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>남양주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다산2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>별내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>별내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>와부읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>조안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진건읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진접읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>퇴계원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호평동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화도읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter12 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>동두천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>보산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상패동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>생연1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>생연2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소요동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>송내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter13 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>부천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소사본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신중동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>심곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오정동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>중동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter14 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>성남시분당구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구미1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구미동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>분당동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼평동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서현2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수내1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수내2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수내3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>야탑1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>야탑2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>야탑3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운종동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이매1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이매2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정자1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정자2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정자동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>판교동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter15 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>성남시수정구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고등동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복정동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수진1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수진2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>시흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신흥1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신흥2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신흥3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양지동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>위례동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태평2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two">태평3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two">태평4동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter16 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>성남시중원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금광1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금광2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도촌동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상대원1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상대원2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상대원3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은행1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은행2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>하대원동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter17 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>수원시권선구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>곡선동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>권선1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>권선2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서둔동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>세류1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세류2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세류3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>입죽동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호매실동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>ㅁㄴㅇㅁㄴㅇ
      </div>
    )

  }

  const GyeonggiFliter18 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>수원시영통구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광교1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광교2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망포1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>망포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매탄1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매탄2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>매탄3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매탄4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영통1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영통2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영통3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원천동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter19 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>수원시장안구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송죽동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>율천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정자1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정자2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조원1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조원2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">파장동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter20 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>수원시팔달구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고등동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우만1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우만2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인계동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행궁동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화서1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">화서2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter21 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>시흥시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>과림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군자동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>능곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대야동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목감동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>배곧1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>배곧2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월곷동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>은행동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정왕1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정왕2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정왕3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정왕4동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">정왕본동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter22 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>안산시단원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고잔동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백운동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선부1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선부2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선부3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신길동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>와동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>워녹ㄱ동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호수동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter23 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>안산시상록구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>본오1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>본오2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>본오3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월피동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>해양동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter24 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>안성시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고삼면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공도읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금광면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보개면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼죽면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안성1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안성3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일죽면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>죽산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter25 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>안양시동안구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관양1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관양2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>귀인동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>달안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범게동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신촌동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>평안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호계1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>호계2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>호계3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter26 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>안양시만안구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>박달1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>박달2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석수1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석수2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석수3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안양1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안양2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안양3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안양4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안양5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안양6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안양7동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>안양8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>안양9동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter27 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>양주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광적면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백석읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양주1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양주2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은현동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회천2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>회천3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>회천4동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter28 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>양평군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개군면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>단월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용문면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청운면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter29 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>여주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금사면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대신면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>세종대왕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오학동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>점동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>흥천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter30 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>연천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백학면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>왕징면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>전곡읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">청산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter31 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>오산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세마동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초평동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter32 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>용인시기흥구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>기흥동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동백1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동백2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동백3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보라동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보정동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서농동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영덕1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영덕2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter33 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>용인시수지구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상현2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상현3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신봉동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>죽전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>죽전2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>죽전3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>풍덕천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>풍덕천2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter34 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>용인시처인구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남사읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>모현읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양지면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>역북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원삼면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유림동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>포곡읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter35 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>의왕시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내손1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내손2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청계동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter36 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>의정부시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가능동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>녹양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송산1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신곡1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의정부1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의정부2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>자금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호원1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>호원2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>흥선동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter37 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>이천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>관고동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마장면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>모가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부발읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>설성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신둔면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>율면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장호원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>증포동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>창전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>호법면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter38 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>파주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금촌1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금촌2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금촌3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>법원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운정2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>운정3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운정4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운정5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>운정6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월롱면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장단면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>적성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조리읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>탄현면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>파주읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>파평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter39 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>평택시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동삭동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비전2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서정동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송북동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송탄동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신장1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신장2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안중읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진위면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청북읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>통복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>팽성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>포승읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>현덕면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter40 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>포천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군내면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선단동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소흘읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영중면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창수면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>포천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화현면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter41 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>하남시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>감일동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕풍1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>덕풍1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕풍2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미사1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미사2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미사3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신장1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신장2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>위례동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천현동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>초이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>준궁동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeonggiFliter42 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경기도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>화성시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>기배동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동탄1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동탄2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동탄3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동탄4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동탄5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동탄6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동탄7동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동탄8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매송면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병점1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병점2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉담읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>새솔동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서신면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양감면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우정읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>팔탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>향남읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  const GyeongsangnamFliter1 = () => {



    //     render: 강원 필터 화면 컴포넌트 랜더링      //  
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>거제시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>거제면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남부면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>능포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동부면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사등면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수양동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>아주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연초면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥포1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장목면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장승포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하청면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }
  
  const GyeongsangnamFliter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>거창군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가조면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거창읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고제면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남하면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마리면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신원면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>웅양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>위천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주상면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>고성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거류면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고성읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구만면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동해면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상리면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영오면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하이면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>하일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>회화면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>김해시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내외동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동상동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>생림면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장유1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장유2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장유3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진례면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진영읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>칠산서부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>활천동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>회현동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>남해군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남해읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미조면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상주면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>설천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보은군이동면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">창선면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>밀양시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내이동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내일동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무안면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산외면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼랑진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초동면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>하남읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>사천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>곤명면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>곤양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남양동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동서금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동서동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>벌용동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서포면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정동면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>축동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>향촌동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>산청군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산청읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>생비량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>생초면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>시천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신등면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신안면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>오부면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>차황면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>양산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강서동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕계동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>물금읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양주동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평산동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>하북면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>의령군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가례면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>궁류면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>낙서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부림면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의령읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>칠곡면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화정면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>진주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대평면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명석면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상봉동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수곡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이반성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이현동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일반성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>집현면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>천전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충무공동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>판문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평거동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하대동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창녕군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>길곡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남지읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대합면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유어면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이방면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>장마면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>창녕읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창원시 마산합포구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교방동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오동동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>완월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월영동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>합포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창원시 마산회원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구암1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내서읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양덕1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양덕2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>합성1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>합성2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>회성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회원1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회원2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창원시 성산구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가음정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반송동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사파동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용지동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>웅남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창원시 의창구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의창동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>팔룡동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter17 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>창원시 진해구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>경화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여좌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅동1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>웅동2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>자은동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태백동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>풍호동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter18 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>통영시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미수동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사량면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>욕지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정량동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter19 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>하동군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>악양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양보면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>적량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진교면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화개면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>횡천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter20 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>함안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가야읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>법수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여항면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>칠북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>칠서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>칠원읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>함안면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter21 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>함양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병곡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지곡면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>함양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>휴천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangnamFliter22 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangnamChange}>합천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가야면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가회면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대병면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>묘산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍백면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>쌍책면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>야로면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용주면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>율곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>적중면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청덕면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>초게면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>합천읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>경산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서부1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서부2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>압량읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>와촌면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중방동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진량읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하양읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>경주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>건천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문무대왕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>보덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불국동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산내면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성건동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안강읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>외동읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용강동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중부동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>천북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>황남동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>황성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황오동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>고령군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개진면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대가야읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>덕곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍림면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>우곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>운수면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>구미시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고아읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공단동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광평동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도개면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도량동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무을면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상모사곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선주원남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신평2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양포동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인동동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임오동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진미동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>형곡1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>형곡2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>김천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감문면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>감천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개령면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>농소면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대신동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대항면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부항면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>아포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>어모면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>율곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조마면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>증산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지례면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지좌동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>평화남산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>문경시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가은읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>농암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동로면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문경읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영순면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>점촌1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>점촌2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>점촌3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>점촌4동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>점촌5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>호계면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>봉화군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명호면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>물야면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>법전면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉화읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상운면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>재산면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>춘양면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>상주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공검면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>낙동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>모동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>모서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사벌국면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>외남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>외서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>은척면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청리면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>함창읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>화동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화서면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>성주군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대가면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>벽진면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성주읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수륜면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월항면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>초전면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>안동시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>길안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남선면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남후면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>녹전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명륜동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북후면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서구동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서후면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안기동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>예안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>와룡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일직면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>임동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>평화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>영덕군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강구면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>달산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>병곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영덕읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영해면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지품면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>축산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>영양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석보면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수비면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영양읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>입암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청기면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>영주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가흥1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가흥2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부석면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상망동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>순흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영주1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영주2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평은면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍기읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>하망동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>휴천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>휴천2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>휴천3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>영천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고경면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남부동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대창면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북안면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신녕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>완산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임고면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청통면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화북면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>예천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보문면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>예천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용궁면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용문면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>유천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은풍면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지보면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>풍양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>호명면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>울릉군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>독도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>울릉읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter17 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>울진군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>근남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금강송면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>기성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>매화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>울진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>죽변면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평해읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>후포면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter18 = () => {
    return (
     <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>의성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가음면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>다인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단밀면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>단촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비안면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안계면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>의성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>점곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>춘산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter19 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>청도군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>각남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>각북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>매전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운문면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청도읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍각면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화양읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter20 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>청송군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주왕산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진보면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청송읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>파천면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>현동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>현서면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter21 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>칠곡군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>기산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동명면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북삼읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석적읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>약목면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>왜관읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>지천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter22 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>포항시남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구룡포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대송면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대이동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동해면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송도동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연일읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장기면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>제철동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해도동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>호미곶면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>효곡동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GyeongsangbukFliter23 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>경상북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeongsangbukChange}>포항시북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>기계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>기북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두호동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송라면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신광면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양학동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장량동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>죽도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>죽장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>환여동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>흥해읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GwangjuFliter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GwangjuChange}>광산구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>본량동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비아동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수완동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신가동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>어룡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월곡1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>임곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>첨단1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>첨단2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하남동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  const GwangjuFliter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GwangjuChange}>남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방림1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방림2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백운1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백운2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉선1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉선2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사직동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월산4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월산5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주월1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주월2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>진월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>호덕동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GwangjuFliter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GwangjuChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계림1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계림2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동명동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산수1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산수2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서남동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지원1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지원2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>학동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>학운동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GwangjuFliter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GwangjuChange}>북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>건국동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두암1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>두암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두암3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문흥1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문흥2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼각동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신안동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신용동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오치1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오치2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>운암1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운암3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>일곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>임동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중흥1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중흥2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중흥3동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>풍향동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GwangjuFliter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>광주광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GwangjuChange}>서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>농성1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>농성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상무1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상무2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서창동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유덕동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>치평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>화정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정4동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>근위군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군위읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼국유사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소보면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우보면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>의흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>효령면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대명10동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명11동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대명2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대명5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대명9동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉덕1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉덕2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉덕3동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>이천동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>달서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감삼동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두류1,2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>두류3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>본리동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상인1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상인2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상인3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성당동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송현2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신당동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용산2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월성1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이곡1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장기동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>죽전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>진천동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>달성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>건천읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>황성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황오동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>함안면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>공산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동촌동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>볼로,봉무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신암1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신암3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신암4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신암5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신천1,2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신천3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신천4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안심1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안심2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안심3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안심4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지저동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>해안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>혁신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효목1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>효목2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>검단동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관문동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>관음동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>국우동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>무태조야동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복현2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산격1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산격2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산격3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산격4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>읍내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>칠성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>침산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>침산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>침산3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>태전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>태전2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내당1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내당2,3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내당4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산2,3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비산5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비산7동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상중이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평리1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>평리2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평리3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평리4동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>평리5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>평리6동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>수성구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고산3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>두산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만촌1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만촌2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만촌3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범물1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범물2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>범어1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범어2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범어3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>범어4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수성1가동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수성2,3가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수성4가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>파동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>황금1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황금2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaeguFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대구광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaeguChange}>중구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남산3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남산4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대봉1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대봉2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동인동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼덕동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성내1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

  const DaejeonFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaejeonChange}>대덕구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목상동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>법1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>법2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비래동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신탄진동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회덕동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaejeonFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaejeonChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가양1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가양2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대청동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신인동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용운동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>판암1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>판암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍도동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>효동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaejeonFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaejeonChange}>근위군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가수원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>갈마1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈마2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관저1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관저2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>괴정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>기성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도마1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도마2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도안동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>둔산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔산3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만년동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>번동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복수동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월평2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월평3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>탄방동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaejeonFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaejeonChange}>근위군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>관평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구즉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노은1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노은2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노은3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상대동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온천2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원신흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>전민동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진잠동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>학하동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DaejeonFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>대전광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={DaejeonChange}>근위군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대사동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문화1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문화2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부사동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석교동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오류동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용두동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유천1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>유천2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은행선화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중촌동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>태평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>태평2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>강서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가덕도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가락동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>녹산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대저1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대저2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>명지1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>명지2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>금정구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구서제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구서제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금사회동동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부곡제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부곡제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선두구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장전제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장전제2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>청룡노포동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>기장군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>기장읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일광읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장안읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>정관읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>철마면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감만제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>감만제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대연제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대연제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대연제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대연제5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대연제6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문현제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문현제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문현제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문현제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용당동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용호제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용호제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용호제3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>용호제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>우암동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>범일제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범일제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범일제5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수정제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수정제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수정제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수정제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>좌천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초량제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>초량제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초량제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초량제6동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>동래구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명륜동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명장제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명장제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>복산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사직제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사직제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사직제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수민동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안락제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안락제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온천제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온천제2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>온천제3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>부산진구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가야제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가야제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개금제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개금제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개금제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>당감제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>당감제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>당감제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범천제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>범천제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부암제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부암제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부전제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부전제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양정제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양정제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>전포제1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>전포제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>초읍동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구포제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구포제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구포제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕천제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕천제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>덕천제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만덕제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만덕제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만덕제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화명제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화명제2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화명제3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>사상구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>괘법동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕포제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>덕포제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>모라제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>모라제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼락동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>엄궁동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주례제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주례제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주례제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>학장동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>사하구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감천제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>감천제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>괴정제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>괴정제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>괴정제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>괴정제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다대제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다대제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>당리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신평제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신평제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장림제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장림제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하단제1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>하단제2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남부민제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남부민제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동대신제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동대신제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동대신제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부민동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서대신제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서대신제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서대신제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>아미동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>암남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초장동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>충무동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>수영구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광안제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광안제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광안제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광안제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남천제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남천제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>망미제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망미제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>민락동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>수영동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>연제구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>거제제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거제제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거제제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>거제제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연산제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연산제6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산제9동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>영도구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남향동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동삼제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동삼제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동삼제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉래제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉래제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신선동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영선제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영선제2동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>청학제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>청학제2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>중구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대청동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동광동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부평동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영주제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영주제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BusanFilter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>부산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={BusanChange}>해운대구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반송제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반송제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반여제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반여제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반여제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반여제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>재송제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>재송제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>좌제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>좌제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>좌제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>좌제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중제2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>강남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개포1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개포3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개포4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>논현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>논현2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대치1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대치2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대치4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도곡1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수서동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신사동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>압구정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>역삼1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>역삼2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일월1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일원본동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>청담동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>강동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강일동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고덕제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고덕제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>길동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔촌제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔촌제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명일제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>명일제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상일제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상일제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성내제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>암사제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>암사제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>암사제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천호제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천호제2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>천호제3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>강북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미아동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>번1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>번2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>번3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼각산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼양동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송중동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수유1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수유2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수유3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우이동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>인수동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>강서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가양제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가양제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가양제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>공항동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>등촌제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>등촌제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>등촌제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>발산제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방화제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방화제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방화제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>염창동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우장산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화곡본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화곡제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>화곡제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화곡제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화곡제4동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>화곡제6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화곡제8동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>관악구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>낙성대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>난곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>난향동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>보라매동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서림동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신림동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신사동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은천동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>인헌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청룡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>행운동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>광진구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구의제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구의제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구의제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군자동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>능동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>자양제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자양제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자양제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>자양제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중곡제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중곡제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중곡제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중곡제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화양동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>구로구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가리봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개봉제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개봉제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개봉제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고척제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고척제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구로제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구로제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구로제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구로제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구로제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수궁동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신도림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오류제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오류제2동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>항동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>금천구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>독산제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>독산제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>독산제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>독산제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시흥제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>시흥제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시흥제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시흥제4동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>시흥제5동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>노원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>공릉1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공릉2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상계10동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상계1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상계2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상계3,4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상계5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상계6,7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상계8동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상계9동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월계1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월계2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월계3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중게1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중계2,3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중계4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중계본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하계1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>하계2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>도봉구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도봉제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도봉제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방학제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방학제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방학제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍문제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>쌍문제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍문제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍문제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>창제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창제3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>창제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>창제5동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>동대문구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>답십리제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>답십리제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용신동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>건천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>건천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>건천읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>황성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황오동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>동작구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노량진제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노량진제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대방동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사당제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사당제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사당제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사당제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사당제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상도제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상도제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상도제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상도제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신대방제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신대방제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>흑석동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>마포구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>공덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>망원제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망원제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서강동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성산제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성산제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>아현동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>염리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용강동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>합정동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>서대문구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남가좌제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남가좌제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북가좌제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북가좌제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북아현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신촌동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연희동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천연동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충현동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>홍은제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍은제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍제제1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>홍제제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>홍제제3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>서초구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반포1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반포2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반포3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반포4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반포본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방배1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방배2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방배3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방배4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방배본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서초1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서초2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서초3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서초4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양재1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양재2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>잠원동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>성동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금호1가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호2,3가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금호4가동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사근동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성수1가제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성수1가제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성수2가제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성수2가제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>왕십리도선동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>왕십리제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용답동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>응봉동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>행당제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>행당제2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter17 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>성북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>길음제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>길음제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>돈암제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>돈암제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동선동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보문동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼선동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석관동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성북동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월곡제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월곡제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장위제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장위제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장위제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정릉제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정릉제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정릉제3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>정릉제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>종암동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter18 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>송파구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가락1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가락2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가락본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>거여1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>거여2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마천1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마천2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문정2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>방이1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방이2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼전동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송파1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송파2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오륜동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>위례동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>잠실2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>잠실3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>잠실4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>잠실6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>잠실7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>잠실본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍납1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍납2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter19 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>양천구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>목1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>목4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신월1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신월2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신월3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신월4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신월5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신월6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신월7동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신정4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정7동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter20 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>영등포구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>당산제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>당산제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대림제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대림제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대림제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도림동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문래동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신기제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신길제3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신길제4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신길제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신길제6동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신길제7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양평제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양평제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>여의동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영등포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영등포본동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter21 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>용산구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남영동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보광동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서빙고동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용산2가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원효로제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원효로제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이촌제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이촌제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이태원제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이태원제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청파동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>한강로동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효창동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>후암동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter22 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>은평구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈현제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>갈현제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>녹번동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대조동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불광제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>불광제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수색동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신사제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신사제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>역촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>응암제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>응암제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>응암제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>증산동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>진관동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter23 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>종로구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가회동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무악동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사직동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼청동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>숭인제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>숭인제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>종로1,2,3,4가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>종로5,6가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창신제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>창신제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창신제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청운효자동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>평창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>혜화동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter24 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>중구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광희동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소공동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신당동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신당제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>약수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>을지로동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장충동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청구동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>필동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>황학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회현동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeoulFilter25 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>서울특별시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SeoulChange}>중랑구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>망우본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망우제3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>면목본동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>면목제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>면목제3,8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>면목제4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>면목제5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>면목제7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>묵제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>묵제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상봉제1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상봉제2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신내1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신내2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중화제1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>중화제2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SejongFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>세종특별자치시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={SejongChange}>세종특별자치시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>나성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>다정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도담동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보람동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부강면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>새롬동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소담동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>아름동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>어진동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연기면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장군면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>전동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>전의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조치원읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>종촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한솔동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해밀동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const UlsanFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={UlsanChange}>남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>달동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무거동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신정3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신정5동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>야음장생포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>옥동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const UlsanFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={UlsanChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남목1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남목2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남목3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대송동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>방어동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일산동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>전하1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>전하2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const UlsanFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={UlsanChange}>북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강동동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>농소1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>농소2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>농소3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양정동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>염포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>효문동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const UlsanFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={UlsanChange}>울주군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>두동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범서읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서생면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>언양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온산읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>온양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청량읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const UlsanFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>울산광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={UlsanChange}>중구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>다운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반구1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반구2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>벙영1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>벙영2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복산1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>복산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>약사동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태화동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>학성동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const IncheonFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>강화군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강화읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>길상면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불은면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>선원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송해면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하점면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화도면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const IncheonFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>계양구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계산3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계산4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계양1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계양2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계양3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>작전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>작전2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>작전서운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효성1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효성2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>남동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>간석1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>간석2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>간석3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>간석4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구월1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구월2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구월3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구월4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남촌도림동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>논현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>논현2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>논현고잔동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만수1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만수2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만수3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만수4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만수5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만수6동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>서창2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>장수서창동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>동구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만석동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송림1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송림2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송림3,5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송림4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송림6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송현1,2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송현3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>화수1.화평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화수2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>미추홀구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>관교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도화1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도화2,3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>숭의1,3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>숭의2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>숭의4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용현1,4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용현2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용현3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용현5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주안1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주안2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주안3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주안4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주안5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주안6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주안7동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주안8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>학익1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>학익2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>부평구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>갈산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부개1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부개2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부개3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부평1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부평2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부평3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부평4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부평5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부평6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산곡1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산곡3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산곡4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>십정1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>십정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청천1동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>청천2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>서구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가정3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가좌1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가좌2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>가좌3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가좌4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>검단동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>검암경서동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>당하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불로대곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석남1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석남2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석남3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신현원창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>아라동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연희동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오류왕길동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원당동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청라1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>청라2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>청라3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>연수구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동춘1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동춘2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동춘3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송도1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송도2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송도3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송도4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송도5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연수1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연수2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연수3동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥련1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥련2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청학동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>옹진군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대청면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕적면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백령면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영흥면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>자월면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const IncheonFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>인천광역시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={IncheonChange}>중구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개항동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동인청동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연안동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영종1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영종동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용유동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>운서동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>율목동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const JeollanamFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>강진군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대구면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병영면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옴천면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>작천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>칠량면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>고흥군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고흡읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>과역면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동강면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉래면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>점암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>포두면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>풍양면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>곡성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>겸면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고달면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>곡성읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>목사동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼기면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석곡면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>오곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥과면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>입면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>죽곡면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>광양시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>골약동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광영동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다압면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉강면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥룡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중마동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>태인동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>구례군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>간전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구례읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>마산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문척면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산동면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>용방면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>토지면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>나주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>공산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>다도면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>다시면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동강면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문평면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>반남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉황면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>빛가람동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>세지면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영강동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영산동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>왕곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>이창동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>담양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가사문학면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>담양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대전면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>무정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>창평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>목포시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만호동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>목원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부흥동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북항동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼학동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼향동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신흥동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용당1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용당2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용해동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유달동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이로동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>죽교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>하당동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>무안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>망운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>몽탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무안읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼향읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일로읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해제면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현경면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>보성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>겸백면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>득량면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미력면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>벌교읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>보성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅치면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>율어면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>순천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>낙안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남제동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕연동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도사동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>별량면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송광면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>승주읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>왕조1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>왕조2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>외서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월등면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>저전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조곡동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍덕동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>해룡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>향동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>황전면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>신안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도초면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비금면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신의면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안좌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>암태면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>압해읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임자면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>자은면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지도읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>팔금면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>하의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>흑산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>여수시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>국동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>돌산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동문동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>둔덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>만덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>묘도동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼일동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서강동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소라면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>시전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여서동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>여천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>율촌면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주삼동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충무동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>한려동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화정면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>영광군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>낙월면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대마면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>묘량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백수읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>법성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불갑면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>염산면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>영광읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>홍농읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>영암군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕진면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼호읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서호면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신북면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>영암읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>학산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>완도군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고금면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군외면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금당면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금일읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노화읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보길면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>생일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신지면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>약산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>완도읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter17 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>장성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북이면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼계면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서삼면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장성읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>진원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황룡면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter18 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>장흥군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>관산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대덕읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유치면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장흥읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>회진면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter19 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>진도군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고군면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의신면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임회면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지산면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>진도읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter20 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>함평군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>나산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>손불면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신광면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>엄다면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월야면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>학교면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>함평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해보면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter21 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>해남군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문내면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산이면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>해남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>현산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>화산면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>화원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollanamFilter22 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollanamChange}>화순군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>능주면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>도암면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동복면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백아면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이양면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>청풍면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>춘양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한천면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화순읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>고창군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고창읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공음면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부안면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성송면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>심원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>아산면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>해리면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>흥덕면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>군산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>개정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>개정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>경암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>나운1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>나운2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>나운3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>나포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대야면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서수면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소룡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수송동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신풍동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥구읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥도면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>월명동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임피면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>해신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>회현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>흥남동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>김제시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>검산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>공덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광활면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>교월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금구면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>만경읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백구면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신풍동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>요촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용지면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>죽산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청하면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>황산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>남원시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노암동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대강면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕과면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도통동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동충동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보절면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사매면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>아영면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>왕정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운봉읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이백면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>인월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주생면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주천면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>죽항동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>향교동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>무주군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>무주읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>무풍면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>설천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>적상면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>부안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동진면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>변산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부안읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>상서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>위도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>줄포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>하서면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>행안면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>순창군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금과면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동계면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>복흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>순창읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍치면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>유등면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>적성면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>팔덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>풍산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>완주군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>경천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구이면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비봉면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼례읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상관면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소양면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운주면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이서면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>익산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금마면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남중동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>낭산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>망성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>모현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼기면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성당면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>어양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영등1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영등2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>왕궁면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅포면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>인화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>준포면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>팔봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>함라면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>함열읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황등면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>임실군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강진면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>관촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕치면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운암면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>임실읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청웅면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>장수군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>계북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>범암면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장수읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>천천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>전주시덕진구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금암1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕진동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송천2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>여의동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우아1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우아2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인후1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>인후2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인후3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>조촌동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>진북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>팔복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>혁신동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>호성동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>전주시완산구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노송동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동서학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼천1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼천2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼천3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서서학동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서신동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>완산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중화산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중화산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>평화1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>평화2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>풍남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>효자2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>효자4동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>효자5동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>정읍시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>고부면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내장상동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>농소동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산외면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상교동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>소성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시기동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신태인읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영원면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옹동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>입암면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정우면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초산동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>칠보면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>태인면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JeollabukFilter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>전라북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JeollabukChange}>진안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동향면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마령면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백운면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부귀면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상전면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성수면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용담면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정천면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>주천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>진안읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JejuFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>제주특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JejuChange}>서귀포시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대륜동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대정읍/마라도포함</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동홍동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서홍동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안덕면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>예래동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정방동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중문동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천지동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>표선면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>효돈동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JejuFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>제주특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JejuChange}>이어도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">\
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>이어도</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const JejuFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>제주특별자치도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={JejuChange}>근위군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>건입동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>구좌읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>노형동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도두동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉개동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼도1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삼도2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>아라동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>애월읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오라동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>외도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용담1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용담2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>우도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이도1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이도2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일도1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일도2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>조천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>추자면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한경면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>한림읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화북동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>계룡시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>금암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>두마면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신도안면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>엄사면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>공주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>계룡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금학동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>반포면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신관동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신풍면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>옥룡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>웅진동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>월송동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>유구읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의당면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>정안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중학동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>탄천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>금산군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남이면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>복수면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부리면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>제원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진산면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>추부면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>논산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가야곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강경읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광석면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>벌곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부적면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>부창동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성동면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연무읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>연산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>은진면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>채운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>취암동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>당진시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고대면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>당진1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>당진2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>당진3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대호지면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>면천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석문면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송악읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>순성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>우강면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>정미면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>합덕읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>보령시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대천2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대천3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대천4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대천5동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>미산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성주면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>웅천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주교면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>주포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>천북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청라면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>청소면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>부여군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>궁룡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>규암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부여읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>석성면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>세도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>외산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>은산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>임천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>장암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>초촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>충화면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>홍산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>서산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동문1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동문2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부석면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부춘동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>석남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성연면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수석동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>운산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>음암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>인지면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>지곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>팔봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>해미면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>서천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>기산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>비인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>서천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>시초면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장항읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>종천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>판교면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>한산면</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화양면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>아산시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>도고면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>둔포면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>배방읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>선장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>송악면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신창면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>염치읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온양1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>온양2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온양3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온양4동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>온양5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>온양6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>음봉면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>인주면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>탕정면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>예산군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광시면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대술면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>삽교읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신양면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>예산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>응봉면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>천안시동남구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>문성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>병천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉명동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수신면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신방동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원성1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>원성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>일봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>청룡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>풍세면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>천안시서북구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백석동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부성1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>부성2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>불당1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>불당2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성거읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성환읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>쌍용1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍용2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>쌍용3동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>입장면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>직산읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>청양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대치면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>비봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>운곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장평면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>정산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청양읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>화성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter15 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>태안군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>고남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>근흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>소원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안면읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원북면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>이원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>태안읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongnamFilter16 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청남도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongnamChange}>홍성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>갈산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>결성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>광천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>구항면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금마면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>서부면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>은하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>홍동면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>홍북읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>홍성읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter1 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>괴산군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감물면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>괴산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문광면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>불정면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사리면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소수면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연풍면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장연면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청안면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>청천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>칠성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter2 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>단양군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>단양읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>대강면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>매포읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>어상천면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>영춘면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>적성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter3 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>보은군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>마로면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>보은읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산외면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼승면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>속리산면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>수한면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>장안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>탄부면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>회남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>회인면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter4 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>영동군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>매곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>상촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>심천면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>양강면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>양산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영동읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>추풍령면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>학산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>황간면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter5 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>옥천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>군북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>군서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>동이면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>안남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>안내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>옥천읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>이원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter6 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>음성군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>감곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금왕읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대소면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>맹동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>삼성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>생극면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>소이면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>원남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>음성읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter7 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>제천시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남현동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>덕산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>백운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉양읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>송학면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>신백동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>영서동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용두동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>의림지동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>청풍면</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>한수면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>화산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter8 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>증평군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>도안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>증평읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter9 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>진천군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>광해원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>덕산읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문백면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>백곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>이월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>진천읍</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>초평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter10 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>청주시상당구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>남일면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>낭성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문의면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>미원면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>영운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용담.명암.산성동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>용암1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용암2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>중앙동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>탑대성동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter11 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>청주시서원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>남이면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>모충동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>분평동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>사직1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사직2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>사창동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>산남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>성화.개신.죽림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수곡1동</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>수곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>현도면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter12 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>청주시청원구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>내덕1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내덕2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>내수읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>북이면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오근장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오창읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>우암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>율량.사천동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter13 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>청주시흥덕구</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>가경동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>강서제1동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>강서제2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북대1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>북대2동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉명1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>봉명2.송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>오송읍</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two" onClick={handleClick}>옥산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two" onClick={handleClick}>운천.신봉동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ChungcheongbukFilter14 = () => {
    return (
      <div className="background">
        <div className="filter">
          <div className="find-choice-button">
            <div className="choice-left-button" onClick={filterRestore}>위치 등록후 게시물 찾기</div>
            <div className="choice-right-button" onClick={onChoiceButtonClickHandler}>내 주변 사람 게시물 찾기</div>
          </div>
          <div className="si-gun-dong">
            <div className="si-complete" onClick={filterChange}>충청북도</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={ChungcheongbukChange}>충주시</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>교현.안림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>교현2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>금가면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>노은면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>달천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>대소원면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>동량면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>목행.용탄동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>문화동</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>봉방동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>산척면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>살미면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>성내.츙인동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>소태면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>수안보면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>신니면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>앙성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>엄정면</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>연수동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>용산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>주덕읍</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={handleClick}>중앙탑면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>지현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={handleClick}>칠금.금릉동</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one" onClick={handleClick}>호암.직동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className={`Checkbutton ${isClicked ? 'Checkbutton-clicked' : ''}`} onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {
      filter === 1 ? (<FirstFilter />) : 
      filter === 2 ? (<SecoundFilter />) :
      filter === 3 ? (<GangwonFilter />) :
      filter === 4 ? (<GyeonggiFilter />) :
      filter === 5 ? (<GyeongsangnamFilter />) :
      filter === 6 ? (<GyeongsangbukFilter />) :
      filter === 7 ? (<GwangjuFilter />) :
      filter === 8 ? (<DaeguFilter />) :
      filter === 9 ? (<DaejeonFilter />) :
      filter === 10 ? (<BusanFilter />) :
      filter === 11 ? (<SeoulFilter />) :
      filter === 12 ? (<SejongFilter />) :
      filter === 13 ? (<UlsanFilter />) :
      filter === 14 ? (<IncheonFilter />) :
      filter === 15 ? (<JeollanamFilter />) :
      filter === 16 ? (<JeollabukFilter />) :
      filter === 17 ? (<JejuFilter />) :
      filter === 18 ? (<ChungcheongnamFilter />) :
      filter === 19 ? (<ChungcheongbukFilter />) :
      filter === 20 ? (<GangwonFliter1 />) :
      filter === 21 ? (<GangwonFliter2 />) :
      filter === 22 ? (<GangwonFliter3 />) :
      filter === 23 ? (<GangwonFliter4 />) :
      filter === 24 ? (<GangwonFliter5 />) :
      filter === 25 ? (<GangwonFliter6 />) :
      filter === 26 ? (<GangwonFliter7 />) :
      filter === 27 ? (<GangwonFliter8 />) :
      filter === 28 ? (<GangwonFliter9 />) :
      filter === 29 ? (<GangwonFliter10 />) :
      filter === 30 ? (<GangwonFliter11 />) :
      filter === 31 ? (<GangwonFliter12 />) :
      filter === 32 ? (<GangwonFliter13 />) :
      filter === 33 ? (<GangwonFliter14 />) :
      filter === 34 ? (<GangwonFliter15 />) :
      filter === 35 ? (<GangwonFliter16 />) :
      filter === 36 ? (<GangwonFliter17 />) :
      filter === 37 ? (<GangwonFliter18 />) :
      filter === 38 ? (<GyeonggiFliter1 />) :
      filter === 39 ? (<GyeonggiFliter2 />) :
      filter === 40 ? (<GyeonggiFliter3 />) :
      filter === 41 ? (<GyeonggiFliter4 />) :
      filter === 42 ? (<GyeonggiFliter5 />) :
      filter === 43 ? (<GyeonggiFliter6 />) :
      filter === 44 ? (<GyeonggiFliter7 />) :
      filter === 45 ? (<GyeonggiFliter8 />) :
      filter === 46 ? (<GyeonggiFliter9 />) :
      filter === 47 ? (<GyeonggiFliter10 />) :
      filter === 48 ? (<GyeonggiFliter11 />) :
      filter === 49 ? (<GyeonggiFliter12 />) :
      filter === 50 ? (<GyeonggiFliter13 />) :
      filter === 51 ? (<GyeonggiFliter14 />) :
      filter === 52 ? (<GyeonggiFliter15 />) :
      filter === 53 ? (<GyeonggiFliter16 />) :
      filter === 54 ? (<GyeonggiFliter17 />) :
      filter === 55 ? (<GyeonggiFliter18 />) :
      filter === 56 ? (<GyeonggiFliter19 />) :
      filter === 57 ? (<GyeonggiFliter20 />) :
      filter === 58 ? (<GyeonggiFliter21 />) :
      filter === 59 ? (<GyeonggiFliter22 />) :
      filter === 60 ? (<GyeonggiFliter23 />) :
      filter === 61 ? (<GyeonggiFliter24 />) :
      filter === 62 ? (<GyeonggiFliter25 />) :
      filter === 63 ? (<GyeonggiFliter26 />) :
      filter === 64 ? (<GyeonggiFliter27 />) :
      filter === 65 ? (<GyeonggiFliter28 />) :
      filter === 66 ? (<GyeonggiFliter29 />) :
      filter === 67 ? (<GyeonggiFliter30 />) :
      filter === 68 ? (<GyeonggiFliter31 />) :
      filter === 69 ? (<GyeonggiFliter32 />) :
      filter === 70 ? (<GyeonggiFliter33 />) :
      filter === 71 ? (<GyeonggiFliter34 />) :
      filter === 72 ? (<GyeonggiFliter35 />) :
      filter === 73 ? (<GyeonggiFliter36 />) :
      filter === 74 ? (<GyeonggiFliter37 />) :
      filter === 75 ? (<GyeonggiFliter38 />) :
      filter === 76 ? (<GyeonggiFliter39 />) :
      filter === 77 ? (<GyeonggiFliter40 />) :
      filter === 78 ? (<GyeonggiFliter41 />) :
      filter === 79 ? (<GyeonggiFliter42 />) :
      filter === 80 ? (<GyeongsangnamFliter1 />) :
      filter === 81 ? (<GyeongsangnamFliter2 />) :
      filter === 82 ? (<GyeongsangnamFliter3 />) :
      filter === 83 ? (<GyeongsangnamFliter4 />) :
      filter === 84 ? (<GyeongsangnamFliter5 />) :
      filter === 85 ? (<GyeongsangnamFliter6 />) :
      filter === 86 ? (<GyeongsangnamFliter7 />) :
      filter === 87 ? (<GyeongsangnamFliter8 />) :
      filter === 88 ? (<GyeongsangnamFliter9 />) :
      filter === 89 ? (<GyeongsangnamFliter10 />) :
      filter === 90 ? (<GyeongsangnamFliter11 />) :
      filter === 91 ? (<GyeongsangnamFliter12 />) :
      filter === 92 ? (<GyeongsangnamFliter13 />) :
      filter === 93 ? (<GyeongsangnamFliter14 />) :
      filter === 94 ? (<GyeongsangnamFliter15 />) :
      filter === 95 ? (<GyeongsangnamFliter16 />) :
      filter === 96 ? (<GyeongsangnamFliter17 />) :
      filter === 97 ? (<GyeongsangnamFliter18 />) :
      filter === 98 ? (<GyeongsangnamFliter19 />) :
      filter === 99 ? (<GyeongsangnamFliter20 />) :
      filter === 100 ? (<GyeongsangnamFliter21 />) :
      filter === 101 ? (<GyeongsangnamFliter22 />) :
      filter === 102 ? (<GyeongsangbukFliter1 />) :
      filter === 103 ? (<GyeongsangbukFliter2 />) :
      filter === 104 ? (<GyeongsangbukFliter3 />) :
      filter === 105 ? (<GyeongsangbukFliter4 />) :
      filter === 106 ? (<GyeongsangbukFliter5 />) :
      filter === 107 ? (<GyeongsangbukFliter6 />) :
      filter === 108 ? (<GyeongsangbukFliter7 />) :
      filter === 109 ? (<GyeongsangbukFliter8 />) :
      filter === 110 ? (<GyeongsangbukFliter9 />) :
      filter === 111 ? (<GyeongsangbukFliter10 />) :
      filter === 112 ? (<GyeongsangbukFliter11 />) :
      filter === 113 ? (<GyeongsangbukFliter12 />) :
      filter === 114 ? (<GyeongsangbukFliter13 />) :
      filter === 115 ? (<GyeongsangbukFliter14 />) :
      filter === 116 ? (<GyeongsangbukFliter15 />) :
      filter === 117 ? (<GyeongsangbukFliter16 />) :
      filter === 118 ? (<GyeongsangbukFliter17 />) :
      filter === 119 ? (<GyeongsangbukFliter18 />) :
      filter === 120 ? (<GyeongsangbukFliter19 />) :
      filter === 121 ? (<GyeongsangbukFliter20 />) :
      filter === 122 ? (<GyeongsangbukFliter21 />) :
      filter === 123 ? (<GyeongsangbukFliter22 />) :
      filter === 124 ? (<GyeongsangbukFliter23 />) :
      filter === 125 ? (<GwangjuFliter1 />) :
      filter === 126 ? (<GwangjuFliter2 />) :
      filter === 127 ? (<GwangjuFliter3 />) :
      filter === 128 ? (<GwangjuFliter4 />) :
      filter === 129 ? (<GwangjuFliter5 />) :
      filter === 130 ? (<DaeguFilter1 />) :
      filter === 131 ? (<DaeguFilter2 />) :
      filter === 132 ? (<DaeguFilter3 />) :
      filter === 133 ? (<DaeguFilter4 />) :
      filter === 134 ? (<DaeguFilter5 />) :
      filter === 135 ? (<DaeguFilter6 />) :
      filter === 136 ? (<DaeguFilter7 />) :
      filter === 137 ? (<DaeguFilter8 />) :
      filter === 138 ? (<DaeguFilter9 />) :
      filter === 140 ? (<DaejeonFilter1 />) :
      filter === 141 ? (<DaejeonFilter2 />) :
      filter === 142 ? (<DaejeonFilter3 />) :
      filter === 143 ? (<DaejeonFilter4 />) :
      filter === 144 ? (<DaejeonFilter5 />) :
      filter === 145 ? (<BusanFilter1 />) :
      filter === 146 ? (<BusanFilter2 />) :
      filter === 147 ? (<BusanFilter3 />) :
      filter === 148 ? (<BusanFilter4 />) :
      filter === 149 ? (<BusanFilter5 />) :
      filter === 150 ? (<BusanFilter6 />) :
      filter === 151 ? (<BusanFilter7 />) :
      filter === 152 ? (<BusanFilter8 />) :
      filter === 153 ? (<BusanFilter9 />) :
      filter === 154 ? (<BusanFilter10 />) :
      filter === 155 ? (<BusanFilter11 />) :
      filter === 156 ? (<BusanFilter12 />) :
      filter === 157 ? (<BusanFilter13 />) :
      filter === 158 ? (<BusanFilter14 />) :
      filter === 159 ? (<BusanFilter15 />) :
      filter === 160 ? (<BusanFilter16 />) :
      filter === 161 ? (<SeoulFilter1 />) :
      filter === 162 ? (<SeoulFilter2 />) :
      filter === 163 ? (<SeoulFilter3 />) :
      filter === 164 ? (<SeoulFilter4 />) :
      filter === 165 ? (<SeoulFilter5 />) :
      filter === 166 ? (<SeoulFilter6 />) :
      filter === 167 ? (<SeoulFilter7 />) :
      filter === 168 ? (<SeoulFilter8 />) :
      filter === 169 ? (<SeoulFilter9 />) :
      filter === 170 ? (<SeoulFilter10 />) :
      filter === 171 ? (<SeoulFilter11 />) :
      filter === 172 ? (<SeoulFilter12 />) :
      filter === 173 ? (<SeoulFilter13 />) :
      filter === 174 ? (<SeoulFilter14 />) :
      filter === 175 ? (<SeoulFilter15 />) :
      filter === 176 ? (<SeoulFilter16 />) :
      filter === 177 ? (<SeoulFilter17 />) :
      filter === 178 ? (<SeoulFilter18 />) :
      filter === 179 ? (<SeoulFilter19 />) :
      filter === 180 ? (<SeoulFilter20 />) :
      filter === 181 ? (<SeoulFilter21 />) :
      filter === 182 ? (<SeoulFilter22 />) :
      filter === 183 ? (<SeoulFilter23 />) :
      filter === 184 ? (<SeoulFilter24 />) :
      filter === 185 ? (<SeoulFilter25 />) :
      filter === 186 ? (<SejongFilter1 />) :
      filter === 187 ? (<UlsanFilter1 />) :
      filter === 188 ? (<UlsanFilter2 />) :
      filter === 189 ? (<UlsanFilter3 />) :
      filter === 190 ? (<UlsanFilter4 />) :
      filter === 191 ? (<UlsanFilter5 />) :
      filter === 192 ? (<IncheonFilter1 />) :
      filter === 193 ? (<IncheonFilter2 />) :
      filter === 194 ? (<IncheonFilter3 />) :
      filter === 195 ? (<IncheonFilter4 />) :
      filter === 196 ? (<IncheonFilter5 />) :
      filter === 197 ? (<IncheonFilter6 />) :
      filter === 198 ? (<IncheonFilter7 />) :
      filter === 199 ? (<IncheonFilter8 />) :
      filter === 200 ? (<IncheonFilter9 />) :
      filter === 201 ? (<IncheonFilter10 />) :
      filter === 202 ? (<JeollanamFilter1 />) :
      filter === 203 ? (<JeollanamFilter2 />) :
      filter === 204 ? (<JeollanamFilter3 />) :
      filter === 205 ? (<JeollanamFilter4 />) :
      filter === 206 ? (<JeollanamFilter5 />) :
      filter === 207 ? (<JeollanamFilter6 />) :
      filter === 208 ? (<JeollanamFilter7 />) :
      filter === 209 ? (<JeollanamFilter8 />) :
      filter === 210 ? (<JeollanamFilter9 />) :
      filter === 211 ? (<JeollanamFilter10 />) :
      filter === 212 ? (<JeollanamFilter11 />) :
      filter === 213 ? (<JeollanamFilter12 />) :
      filter === 214 ? (<JeollanamFilter13 />) :
      filter === 215 ? (<JeollanamFilter14 />) :
      filter === 216 ? (<JeollanamFilter15 />) :
      filter === 217 ? (<JeollanamFilter16 />) :
      filter === 218 ? (<JeollanamFilter17 />) :
      filter === 219 ? (<JeollanamFilter18 />) :
      filter === 220 ? (<JeollanamFilter19 />) :
      filter === 221 ? (<JeollanamFilter20 />) :
      filter === 222 ? (<JeollanamFilter21 />) :
      filter === 223 ? (<JeollanamFilter22 />) :
      filter === 224 ? (<JeollabukFilter1 />) :
      filter === 225 ? (<JeollabukFilter2 />) :
      filter === 226 ? (<JeollabukFilter3 />) :
      filter === 227 ? (<JeollabukFilter4 />) :
      filter === 228 ? (<JeollabukFilter5 />) :
      filter === 229 ? (<JeollabukFilter6 />) :
      filter === 230 ? (<JeollabukFilter7 />) :
      filter === 231 ? (<JeollabukFilter8 />) :
      filter === 232 ? (<JeollabukFilter9 />) :
      filter === 233 ? (<JeollabukFilter10 />) :
      filter === 234 ? (<JeollabukFilter11 />) :
      filter === 235 ? (<JeollabukFilter12 />) :
      filter === 236 ? (<JeollabukFilter13 />) :
      filter === 237 ? (<JeollabukFilter14 />) :
      filter === 238 ? (<JeollabukFilter15 />) :
      filter === 239 ? (<JejuFilter1 />) :
      filter === 240 ? (<JejuFilter2 />) :
      filter === 241 ? (<JejuFilter3 />) :
      filter === 242 ? (<ChungcheongnamFilter1 />) :
      filter === 243 ? (<ChungcheongnamFilter2 />) :
      filter === 244 ? (<ChungcheongnamFilter3 />) :
      filter === 245 ? (<ChungcheongnamFilter4 />) :
      filter === 246 ? (<ChungcheongnamFilter5 />) :
      filter === 247 ? (<ChungcheongnamFilter6 />) :
      filter === 248 ? (<ChungcheongnamFilter7 />) :
      filter === 249 ? (<ChungcheongnamFilter8 />) :
      filter === 250 ? (<ChungcheongnamFilter9 />) :
      filter === 251 ? (<ChungcheongnamFilter10 />) :
      filter === 252 ? (<ChungcheongnamFilter11 />) :
      filter === 253 ? (<ChungcheongnamFilter12 />) :
      filter === 254 ? (<ChungcheongnamFilter13 />) :
      filter === 255 ? (<ChungcheongnamFilter14 />) :
      filter === 256 ? (<ChungcheongnamFilter15 />) :
      filter === 257 ? (<ChungcheongnamFilter16 />) :
      filter === 258 ? (<ChungcheongbukFilter1 />) :
      filter === 259 ? (<ChungcheongbukFilter2 />) :
      filter === 260 ? (<ChungcheongbukFilter3 />) :
      filter === 261 ? (<ChungcheongbukFilter4 />) :
      filter === 262 ? (<ChungcheongbukFilter5 />) :
      filter === 263 ? (<ChungcheongbukFilter6 />) :
      filter === 264 ? (<ChungcheongbukFilter7 />) :
      filter === 265 ? (<ChungcheongbukFilter8 />) :
      filter === 266 ? (<ChungcheongbukFilter9 />) :
      filter === 267 ? (<ChungcheongbukFilter10 />) :
      filter === 268 ? (<ChungcheongbukFilter11 />) :
      filter === 269 ? (<ChungcheongbukFilter12 />) :
      filter === 270 ? (<ChungcheongbukFilter13 />) :
      filter === 271 ? (<ChungcheongbukFilter14 />) :
      (<></>)
      }
    </>
  )
}

