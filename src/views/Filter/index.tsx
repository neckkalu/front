import {useState} from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { FTFBOARD_PATH } from "constant";


//     component: 필터 화면 컴포넌트      //
export default function Filter() {

  const navigator = useNavigate();

  const [filter, setFilter] = useState<number>(1);



  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onChoiceButtonClickHandler = () => {
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
              <div className="flitering-box-three">강릉시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고성군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동해시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">삼척시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">속초시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양구군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양양군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">영월군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">원주시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">인제군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">정선군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">철원군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">춘천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">태백시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">평창군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">홍천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화천군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">횡성군</div>
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
              <div className="flitering-box-three">가평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고양시덕양구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">고양시일산동구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">고양시일산서구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">과천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광명시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">광주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">구리시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">군포시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">김포시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">남양주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">동두천시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">부천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성남시분당구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">성남시수정구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">성남시중원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수원시권선구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수원시영통구구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">수원시장안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">수원시팡달구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">시흥시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안산시단원구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안산시상록구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안성시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">안양시동안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">안양시만안구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">양주시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">양평군</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">여주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">연천군</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">오산시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">용인시기흥구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">용인시수지구</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">용인시처인구</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">의왕시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">의정부시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">이천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">파주시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">평택시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">포천시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">하남시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">화성시</div>
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
              <div className="flitering-box-three">강원</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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
              <div className="flitering-box-three">강원</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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
              <div className="flitering-box-three">강원</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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
              <div className="flitering-box-three">강원</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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
              <div className="flitering-box-three">강원</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경기도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">경상남도</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">경상북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">광주광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">대구광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">대전광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">부산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">서울특별시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">세종특별자치시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">울산광역시</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">인천광역시</div>
            </div>
            <div className="flitering-three">
              <div className="flitering-box-three">전라남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">전라북도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-three">제주특별자치도</div>
            </div>
            <div className="flitering-two">
              <div className="flitering-box-two">충청남도</div>
              <div className="vertical-divider-light-gray"></div>
              <div className="flitering-box-two">충청북도</div>
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

      (<></>)
      }
    </>
  )

}