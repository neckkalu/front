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
      daejeonChangeFunctions.push(() => setFilter(i + 138));
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
      busanChangeFunctions.push(() => setFilter(i + 143));
    }
    return busanChangeFunctions;
  };

  const [
    BusanChange1, BusanChange2, BusanChange3, BusanChange4,
    BusanChange5, BusanChange6, BusanChange7, BusanChange8,
    BusanChange9, BusanChange10, BusanChange11, BusanChange12,
    BusanChange13, BusanChange14, BusanChange15, BusanChange16
  ] = generateBusanChangeFunctions();










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
            <div className="filtering-three">
              <div className="filtering-box-three" onClick={GangwonChange}>강원특별자치도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeonggiChange}>경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three" onClick={GyeongsangnamChange}>경상남도</div>
            </div>
            <div className="">
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
              <div className="filtering-box-three">광산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two">북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two">서구</div>
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
              <div className="filtering-box-three">대덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two">유성구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two">충청북도</div>
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
              <div className="filtering-box-three">강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">금정구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">기장군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동래구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">부산진구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">사상구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">사하구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">수영구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">연제구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">영도구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">중구</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">해운대구</div>
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
              <div className="filtering-box-three">강남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">강동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">강북구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">관악구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">광진구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">구로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">금천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">노원구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">도봉구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동작구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">마포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서초구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">성동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">성북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">송파구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">양천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">영등포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">용산구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">은평구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">종로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">중구</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">중랑구</div>
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
              <div className="filtering-box-one">세종특별자치시</div>
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
              <div className="filtering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">북구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two">울주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two">중구</div>
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
              <div className="filtering-box-three">강화군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">계양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">남동구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">미추홀구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">부평구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">연수구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">옹진군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">중구</div>
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
              <div className="filtering-box-three">강진군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">고흥군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">곡성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">광양시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">구례군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">나주시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">담양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">목포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">무안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">보성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">순천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">신안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">여수시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">영광군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">영암군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">완도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">장성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">장흥군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">진도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">함평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">해남군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">화순군</div>
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
              <div className="filtering-box-three">고창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">군산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">김제시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">남원시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">무주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">부안군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">순창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">완주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">익산시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">임실군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">장수군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">전주시덕진구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">전주시완산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">정읍시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">진안군</div>
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
              <div className="filtering-box-three">서귀포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">이어도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">제주시</div>
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
              <div className="filtering-box-three">계릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">공주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">금산군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">논산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">당진시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">보령시</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">부여군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">서천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">아산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">예산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">전안시동남구</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">전안시서북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">청양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">태안군</div>
            </div>
            <div className="filtering-one">
              <div className="filtering-box-one">흥성군</div>
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
              <div className="filtering-box-three">괴산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">단양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">보은군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">영동군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">옥천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">음성군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">제천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">증평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">진천군</div>
            </div>
            <div className="filtering-three">
              <div className="filtering-box-three">청주시상당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">청주시서원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-three">청주시청원구</div>
            </div>
            <div className="filtering-two">
              <div className="filtering-box-two">청주시흥덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="filtering-box-two">충주시</div>
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

  const DaeguFilter1 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter2 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter3 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter4 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter5 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter6 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter7 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter8 = () => {
    return (
      <></>
    )
  }

  const DaeguFilter9 = () => {
    return (
      <></>
    )
  }
  

  const DaejeonFilter1 = () => {
    return (
      <></>
    )
  }

  const DaejeonFilter2 = () => {
    return (
      <></>
    )
  }

  const DaejeonFilter3 = () => {
    return (
      <></>
    )
  }

  const DaejeonFilter4 = () => {
    return (
      <></>
    )
  }

  const DaejeonFilter5 = () => {
    return (
      <></>
    )
  }

  const BusanFilter1 = () => {
    return (
      <></>
    )
  }

  const BusanFilter2 = () => {
    return (
      <></>
    )
  }

  const BusanFilter3 = () => {
    return (
      <></>
    )
  }

  const BusanFilter4 = () => {
    return (
      <></>
    )
  }

  const BusanFilter5 = () => {
    return (
      <></>
    )
  }

  const BusanFilter6 = () => {
    return (
      <></>
    )
  }

  const BusanFilter7 = () => {
    return (
      <></>
    )
  }

  const BusanFilter8 = () => {
    return (
      <></>
    )
  }

  const BusanFilter9 = () => {
    return (
      <></>
    )
  }

  const BusanFilter10 = () => {
    return (
      <></>
    )
  }

  const BusanFilter11 = () => {
    return (
      <></>
    )
  }

  const BusanFilter12 = () => {
    return (
      <></>
    )
  }

  const BusanFilter13 = () => {
    return (
      <></>
    )
  }

  const BusanFilter14 = () => {
    return (
      <></>
    )
  }

  const BusanFilter15 = () => {
    return (
      <></>
    )
  }

  const BusanFilter16 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter1 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter2 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter3 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter4 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter5 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter6 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter7 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter8 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter9 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter10 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter11 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter12 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter13 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter14 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter15 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter16 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter17 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter18 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter19 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter20 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter21 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter22 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter23 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter24 = () => {
    return (
      <></>
    )
  }

  const SeoulFilter25 = () => {
    return (
      <></>
    )
  }

  const SejongFilter1 = () => {
    return (
      <></>
    )
  }

  const UlsanFilter1 = () => {
    return (
      <></>
    )
  }

  const UlsanFilter2 = () => {
    return (
      <></>
    )
  }

  const UlsanFilter3 = () => {
    return (
      <></>
    )
  }

  const UlsanFilter4 = () => {
    return (
      <></>
    )
  }

  const UlsanFilter5 = () => {
    return (
      <></>
    )
  }

  const IncheonFilter1 = () => {
    return (
      <></>
    )
  }

  const IncheonFilter2 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter3 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter4 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter5 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter6 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter7 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter8 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter9 = () => {
    return (
      <></>
    )
  }


  const IncheonFilter10 = () => {
    return (
      <></>
    )
  }


  const JeollanamFilter1 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter2 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter3 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter4 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter5 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter6 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter7 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter8 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter9 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter10 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter11 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter12 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter13 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter14 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter15 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter16 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter17 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter18 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter19 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter20 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter21 = () => {
    return (
      <></>
    )
  }

  const JeollanamFilter22 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter1 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter2 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter3 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter4 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter5 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter6 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter7 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter8 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter9 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter10 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter11 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter12 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter13 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter14 = () => {
    return (
      <></>
    )
  }

  const JeollabukFilter15 = () => {
    return (
      <></>
    )
  }

  const JejuFilter1 = () => {
    return (
      <></>
    )
  }

  const JejuFilter2 = () => {
    return (
      <></>
    )
  }

  const JejuFilter3 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter1 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter2 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter3 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter4 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter5 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter6 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter7 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter8 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter9 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter10 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter11 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter12 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter13 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter14 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter15 = () => {
    return (
      <></>
    )
  }

  const ChungcheongnamFilter16 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter1 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter2 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter3 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter4 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter5 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter6 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter7 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter8 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter9 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter10 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter11 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter12 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter13 = () => {
    return (
      <></>
    )
  }

  const ChungcheongbukFilter14 = () => {
    return (
      <></>
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
      filter === 202 ? (<JeollanamFilter2 />) :
      filter === 202 ? (<JeollanamFilter3 />) :
      filter === 202 ? (<JeollanamFilter4 />) :
      filter === 202 ? (<JeollanamFilter5 />) :
      filter === 202 ? (<JeollanamFilter6 />) :
      filter === 202 ? (<JeollanamFilter7 />) :
      filter === 202 ? (<JeollanamFilter8 />) :
      filter === 202 ? (<JeollanamFilter9 />) :
      filter === 202 ? (<JeollanamFilter10 />) :
      filter === 202 ? (<JeollanamFilter11 />) :
      filter === 202 ? (<JeollanamFilter12 />) :
      filter === 202 ? (<JeollanamFilter13 />) :
      filter === 202 ? (<JeollanamFilter14 />) :
      filter === 202 ? (<JeollanamFilter15 />) :
      filter === 202 ? (<JeollanamFilter16 />) :
      filter === 202 ? (<JeollanamFilter17 />) :
      filter === 202 ? (<JeollanamFilter18 />) :
      filter === 202 ? (<JeollanamFilter19 />) :
      filter === 202 ? (<JeollanamFilter20 />) :
      filter === 202 ? (<JeollanamFilter21 />) :
      filter === 202 ? (<JeollanamFilter22 />) :
      filter === 203 ? (<JeollabukFilter1 />) :
      filter === 203 ? (<JeollabukFilter2 />) :
      filter === 203 ? (<JeollabukFilter3 />) :
      filter === 203 ? (<JeollabukFilter4 />) :
      filter === 203 ? (<JeollabukFilter5 />) :
      filter === 203 ? (<JeollabukFilter6 />) :
      filter === 203 ? (<JeollabukFilter7 />) :
      filter === 203 ? (<JeollabukFilter8 />) :
      filter === 203 ? (<JeollabukFilter9 />) :
      filter === 203 ? (<JeollabukFilter10 />) :
      filter === 203 ? (<JeollabukFilter11 />) :
      filter === 203 ? (<JeollabukFilter12 />) :
      filter === 203 ? (<JeollabukFilter13 />) :
      filter === 203 ? (<JeollabukFilter14 />) :
      filter === 203 ? (<JeollabukFilter15 />) :
      filter === 204 ? (<JejuFilter1 />) :
      filter === 204 ? (<JejuFilter2 />) :
      filter === 204 ? (<JejuFilter3 />) :
      filter === 204 ? (<ChungcheongnamFilter1 />) :
      filter === 204 ? (<ChungcheongnamFilter2 />) :
      filter === 204 ? (<ChungcheongnamFilter3 />) :
      filter === 204 ? (<ChungcheongnamFilter4 />) :
      filter === 204 ? (<ChungcheongnamFilter5 />) :
      filter === 204 ? (<ChungcheongnamFilter6 />) :
      filter === 204 ? (<ChungcheongnamFilter7 />) :
      filter === 204 ? (<ChungcheongnamFilter8 />) :
      filter === 204 ? (<ChungcheongnamFilter9 />) :
      filter === 204 ? (<ChungcheongnamFilter11 />) :
      filter === 204 ? (<ChungcheongnamFilter12 />) :
      filter === 204 ? (<ChungcheongnamFilter13 />) :
      filter === 204 ? (<ChungcheongnamFilter14 />) :
      filter === 204 ? (<ChungcheongnamFilter15 />) :
      filter === 204 ? (<ChungcheongnamFilter16 />) :
      filter === 204 ? (<ChungcheongbukFilter1 />) :
      filter === 204 ? (<ChungcheongbukFilter2 />) :
      filter === 204 ? (<ChungcheongbukFilter3 />) :
      filter === 204 ? (<ChungcheongbukFilter4 />) :
      filter === 204 ? (<ChungcheongbukFilter5 />) :
      filter === 204 ? (<ChungcheongbukFilter6 />) :
      filter === 204 ? (<ChungcheongbukFilter7 />) :
      filter === 204 ? (<ChungcheongbukFilter8 />) :
      filter === 204 ? (<ChungcheongbukFilter9 />) :
      filter === 204 ? (<ChungcheongbukFilter10 />) :
      filter === 204 ? (<ChungcheongbukFilter11 />) :
      filter === 204 ? (<ChungcheongbukFilter12 />) :
      filter === 204 ? (<ChungcheongbukFilter13 />) :
      filter === 204 ? (<ChungcheongbukFilter14 />) :
      (<></>)
      }
    </>
  )
}

