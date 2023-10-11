import {useState} from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { FTFBOARD_PATH } from "constant";


//     component: 필터 화면 컴포넌트      //
export default function Filter() {

  const navigator = useNavigate();

  const [filter, setFilter] = useState<number>(1);

  const [isClicked, setIsClicked] = useState(Boolean);

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
      <div className="background">
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
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange}>강원특별자치도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange}>경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeongsangnamChange}>경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeongsangbukChange}>경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GwangjuChange}>광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={DaeguChange}>대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={DaejeonChange}>대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={BusanChange}>부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={SeoulChange}>서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={SejongChange}>세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={UlsanChange}>울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={IncheonChange}>인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={JeollanamChange}>전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={JeollabukChange}>전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={JejuChange}>제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two" onClick={ChungcheongnamChange}>충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two" onClick={ChungcheongbukChange}>충청북도</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange1}>강릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange2}>고성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange3}>동해시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange4}>삼척시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange5}>속초시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange6}>양구군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange7}>양양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange8}>영월군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange9}>원주시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange10}>인제군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange11}>정선군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange12}>철원군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange13}>춘천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange14}>태백시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange15}>평창군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GangwonChange16}>홍천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange17}>화천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GangwonChange18}>횡성군</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange1}>가평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange2}>고양시덕양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange3}>고양시일산동구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange4}>고양시일산서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange5}>과천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange6}>광명시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange7}>광주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange8}>구리시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange9}>군포시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange10}>김포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange11}>남양주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange12}>동두천시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange13}>부천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange14}>성남시분당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange15}>성남시수정구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange16}>성남시중원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange17}>수원시권선구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange18}>수원시영통구구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange19}>수원시장안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange20}>수원시팡달구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange21}>시흥시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange22}>안산시단원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange23}>안산시상록구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange24}>안성시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange25}>안양시동안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange26}>안양시만안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange27}>양주시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange28}>양평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange29}>여주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange30}>연천군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange31}>오산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange32}>용인시기흥구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange33}>용인시수지구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange34}>용인시처인구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange35}>의왕시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange36}>의정부시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange37}>이천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange38}>파주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange39}>평택시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three" onClick={GyeonggiChange40}>포천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange41}>하남시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three" onClick={GyeonggiChange42}>화성시</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">거제시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">거창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고성군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">김해시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남해군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">밀양시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">사천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">산청군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양산시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">의령군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창녕군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">창원시 마산합포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창원시 마산회원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창원시 성산구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">창원시 의창구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창원시 진해구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">통영시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">하동군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">함안군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">함양군</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">합천군</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">경산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고령군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">구미시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">김천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">문경시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">봉화군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성주군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안동시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영덕군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영양군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">영주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">예천군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">울릉군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울진군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">의성군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">청도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청송군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">칠곡군</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">포항시남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">포항시북구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동구</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">서구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">근위군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">달서구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">달성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수성구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서구</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">유성구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금정구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">기장군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동래구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">부산진구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">사상구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">사하구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수영구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">연제구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영도구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중구</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">해운대구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강북구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">강서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">관악구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광진구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">구로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">노원구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">도봉구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동작구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">마포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서대문구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서초구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">성동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송파구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양천구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영등포구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">용산구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">은평구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">종로구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중구</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">중랑구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-one">
              <div className="flitering-box-one">세종특별자치시</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">남구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북구</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">울주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">중구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강화군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">계양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남동구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미추홀구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부평구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연수구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">옹진군</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">중구</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강진군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고흥군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">곡성군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">광양시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구례군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">나주시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">담양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">목포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">무안군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">보성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">순천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신안군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">여수시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영광군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영암군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">완도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장흥군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">진도군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">함평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">해남군</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">화순군</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">김제시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">남원시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">무주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부안군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">순창군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">완주군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">익산시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">임실군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장수군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전주시덕진구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전주시완산구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정읍시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진안군</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">서귀포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">이어도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주시</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">계릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">공주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금산군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">논산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">당진시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보령시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">부여군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서천군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">아산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">예산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전안시동남구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전안시서북구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">태안군</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">흥성군</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-chenk">구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">괴산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">단양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보은군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">영동군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">옥천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">음성군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">제천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">증평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진천군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">청주시상당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청주시서원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청주시청원구</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">청주시흥덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충주시</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className={`flitering-box-three ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>강남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경포동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">교1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구정면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">내곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">사천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성덕동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">성산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연곡면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">옥계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">옥천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">왕산면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">주문진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">초당동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">포남1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">포남2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">홍제동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">간성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">거진읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수동면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">죽왕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">토성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">현내면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">동호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">망상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">목호동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">발한동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">복삼동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">북평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송정동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">천곡동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">근덕면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">남양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">노곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">도계읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">미로면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신기면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">원덕읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정라동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">하장면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금호동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">노학동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영랑동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">조양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">청호동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">국토정중앙면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">방산면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">양구읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">해안면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강현면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">손양면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">영양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">현남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">현북면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">김삿갓면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">무릉도원면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">산솔면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상동읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">영월읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">주천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">한반도면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">개운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">귀래면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">단계동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">단구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">명륜1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">명륜2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">무실동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">문막읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">반곡관설동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">봉산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부론면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소초면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">우산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원인동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">일산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">지정면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">태장1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">태장2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">판부면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">학성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">행구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호저면</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">흥업면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">기린면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인제읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고한읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북평면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">사북읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">여량면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">임계면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정선읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화암면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">갈말읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">근남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">근동면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">근북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">김화읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동송읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원동면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">임남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">철원읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">근화동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동내면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북산면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">사북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">석사동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">소양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신북읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신사우동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">약사명동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">조운동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">퇴계동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">효자1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">효자2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">효자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">후평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">후평2동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">후평3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">구문소동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">문곡소도동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼수동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">철암동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">황연동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">황지동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">대관령면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대화면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미탄면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">방림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">봉평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">용평면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">진부면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">평창읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">내촌면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">두촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북방면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서석면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영귀미면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">홍천읍</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">화촌면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">간동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">사내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상서면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">하남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">화천읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GangwonChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">갑천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강림면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">공근면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">둔내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서원면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안흥면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">우천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청일면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">횡성읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">설악면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">조종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">관산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">능곡동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼송1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼송2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">성사1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성사2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원신동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">주교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창릉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">행신1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">행신2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">행신3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">행신4동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">행주동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화정1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">화정2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">효자동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">흥도동</div>
            </div>

            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고봉동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">마두1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">마두2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">백석1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">백석2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">식사동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">장항1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장향2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정발산동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">중산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">풍산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가좌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">덕이동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">송포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">일산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">일산2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">일산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">주엽1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">주엽2동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">탄현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">탄현2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">갈현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">과천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">문원동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">별양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원문동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광명1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광명2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광명3동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">광명4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광명5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광명6동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">광명7동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소하1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소하2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">일직동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">철산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">철산2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">철산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">철산4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">하안1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">하안2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">하안3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">하안4동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">학온동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">경안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">곤지암읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광남1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">광남2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남한산성면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">능평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">도척면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송정동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">쌍령동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오포1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">오포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">초월읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">탄벌동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">퇴촌면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">갈매동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교문1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교문2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동구동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수택1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수택2동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">수택3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">인창동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군포1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군포2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">궁내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대야동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">산본1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">산본2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송부동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">수리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">재궁동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고촌읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구래동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">김포본동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대곶면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">마산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">사우동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양촌읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">월곷면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">장기동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장기본동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">통진읍</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">풍무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">하성면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">금곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">다산1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">다산2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">별내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">별내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수동면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양정동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">와부읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">조안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진건읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진접읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">퇴계원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">평내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호평동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">화도읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">보산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">불현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상패동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">생연1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">생연2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소요동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">송내동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">중앙동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">대산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">범안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부천동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소사본동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신중동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">심곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오정동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">중동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">구미1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구미동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금곡동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">백현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">분당동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼평동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서현2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수내1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">수내2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수내3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">야탑1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">야탑2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">야탑3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운종동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">이매1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">이매2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정자1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">정자2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정자동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">판교동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고등동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">단대동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">복정동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">산성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수진1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수진2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">시흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신흥1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신흥2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신흥3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양지동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">위례동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">태평1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">태평2동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">태평3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">태평4동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">금광1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금광2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">도촌동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상대원1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상대원2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상대원3동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">성남동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">은행1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">은행2동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">하대원동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">곡선동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구운동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">권선1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">권선2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서둔동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세류1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">세류2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">세류3동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">입죽동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호매실동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광교1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광교2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">망포1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">망포2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매탄1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매탄2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">매탄3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매탄4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영통1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">영통2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영통3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원천동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">송죽동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연무동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영화동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">율천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정자1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정자2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">정자3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">조원1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">조원2동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">파장동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고등동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매산동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">우만1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">우만2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인계동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">행궁동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화서1동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">화서2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">과림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군자동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">능곡동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대야동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매화동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">목감동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">배곧1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">배곧2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신천동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신현동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">월곷동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">은행동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정왕1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">정왕2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정왕3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정왕4동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">정왕본동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고잔동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">백운동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">선부1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">선부2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">선부3동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신길동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">와동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">워녹ㄱ동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">초지동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호수동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">반월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">본오1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">본오2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">본오3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">사동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">사이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성포동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안산동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">월피동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">일동</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">해양동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고삼면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">공도읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금광면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미양면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보개면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">삼죽면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서운면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안성1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안성2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안성3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양성면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">원곡면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">일죽면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">죽산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">갈산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">관양1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">관양2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">귀인동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">달안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">범게동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">부림동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">비산1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">비산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">비산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신촌동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">평안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">평촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호계1동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">호계2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">호계3동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">박달1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">박달2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">석수1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">석수2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">석수3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안양2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양4동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안양5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양7동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">안양8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">안양9동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광적면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">백석읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양주1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양주2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">은현동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">장흥면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">회천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">회천2동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">회천3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">회천4동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">강상면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강하면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">개군면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">단월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서종면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양동면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양평읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">옥천면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">용문면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">지평면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청운면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가남읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">강천면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금사면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대신면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">북내면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">산북면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종대왕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">여흥동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오학동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">점동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">흥천면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">군남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">백학면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신서면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연천읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">왕징면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">장남면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전곡읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중면</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">청산면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">남촌동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대원동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">세마동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신장동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">초평동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">구갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구성동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">기흥동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동백1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동백2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동백3동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">마북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보라동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보정동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서농동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신갈동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영덕1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영덕2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">동천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상현1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">상현2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">상현3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신봉동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">죽전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">죽전2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">죽전3동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">풍덕천1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">풍덕천2동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">남사읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동부동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">모현읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">백암면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">삼가동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양지면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">역북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원삼면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">유림동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">이동읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">포곡읍</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">내손1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">내손2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">부곡동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청계동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가능동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">녹양동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송산1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">송산2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송산3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신곡1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신곡2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">의정부1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">의정부2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">자금동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장암동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">호원1동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">호원2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">흥선동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">관고동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대월면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">마장면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">모가면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">백사면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부발읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">설성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신둔면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">율면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">장호원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중리동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">증포동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">창전동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">호법면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">광탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">교하동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금촌1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">금촌2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">금촌3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">문산동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">법원읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운정1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운정2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">운정3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운정4동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">운정5동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">운정6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">월롱면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장단면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">적성면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">조리읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">탄현면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">파주읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">파평면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">고덕동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고덕면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동삭동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">비전1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">비전2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서정동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">세교동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송북동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">송탄동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신장1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신장2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안중읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">오성면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">용이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원평동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">중앙동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">지산동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">진위면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">청북읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">통복동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">팽성읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">포승읍</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">현덕면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">가산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">관인면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군내면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">내촌면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">선단동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">소흘읍</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영북면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영중면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">이동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">일동면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">창수면</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">포천동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">화현면</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">감북동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">감일동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">덕풍1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">덕풍1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">덕풍2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미사1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">미사2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">미사3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">신장1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">신장2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">위례동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">천현동</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">초이동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">준궁동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">기배동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남양읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동탄1동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동탄2동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동탄3동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동탄4동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동탄5동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동탄6동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동탄7동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">동탄8동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">마도면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">매송면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">반월동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">병점1동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">병점2동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">봉담읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">비봉면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">새솔동</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">서신면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">송산면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양감면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">우정읍</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">장안면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정남면</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">진안동</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">팔탄면</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">향남읍</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">화산동</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
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
            <div className="si-complete" onClick={filterChange}>시/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="gun-complete" onClick={GyeonggiChange}>구/군</div>
            <div className="vertical-divider-dark-gray"></div>
            <div className="dong-chenk">읍/면/동</div>
          </div>
          <div className="choice-fliter">
            <div className="flitering-three">
              <div className="flitering-box-three">괴산군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">단양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">보은군</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">청주시흥덕구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충주시</div>
            </div>
            <div className="flitering-one">
              <div className="flitering-box-one">청주시흥덕구</div>
            </div>
            <div className="Gap"></div>
            <div className="Check">
              <div className="Checkbutton" onClick={onCheckButtonClickHandler}>확인</div>
            </div>
          </div>
        </div>
      </div>
    )

  }
  
  const GyeongsangnamFliter2 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter3 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter4 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter5 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter6 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter7 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter8 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter9 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter10 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter11 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter12 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter13 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter14 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter15 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter16 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter17 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter18 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter19 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter20 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter21 = () => {
    return (
      <></>
    )
  }

  const GyeongsangnamFliter22 = () => {
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


      (<></>)
      }
    </>
  )
}

