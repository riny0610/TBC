import {Component} from 'react';
import './Discover.css'
import jquery from 'jquery'
import { Button } from '@material-ui/core';

import CachedIcon from '@material-ui/icons/Cached';
import Arrow from '@material-ui/icons/ChevronRight';
import ProjectApiService from '../ProjectApiService';

import Item from './DiscoverItem';



class Discover extends Component {

    componentDidMount() {
        window.$ = window.jQuery = jquery;
        this.viewProjectList();
        // this.viewCountProject();
    }

    constructor(props) {
        super(props);
        
        this.state = {
            lists : [],
            // count : Number,
            id : Number,
            dates : [],
            date : '',
            liked : false,
        };
    }

    // //프로젝트 갯수
    // viewCountProject = () => {

    //     ProjectApiService.countProject()
    //     .then(res => {
    //         this.setState({ count : res.data });
    //         console.log('viewCountProject의 값', res.data)
    //     })
    //     .catch(err => {
    //         console.error('Discover.js의 viewCountProject() 에러!', err);
    //     })
    // }

    //전체 프로젝트 보기
    viewProjectList = () => {

        ProjectApiService.projectList()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('projectList 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 viewProjectList() 에러!', err);
        })
    }

    //상태별
    viewStateIng = () => {

        ProjectApiService.stateIng()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('stateIng 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 stateIng() 에러!', err);
        })
    }

    viewStateEnd = () => {

        ProjectApiService.stateEnd()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('stateEnd 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 stateEnd() 에러!', err);
        })
    }

    //달성률별
    viewGoalUnder75 = () => {

        ProjectApiService.goalUnder75()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('goalUnder75 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 goalUnder75() 에러!', err);
        })
    }

    viewGoalUnder75to100 = () => {

        ProjectApiService.goalUnder75to100()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('goalUnder75to100 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 goalUnder75to100() 에러!', err);
        })
    }

    viewGoalOver100 = () => {

        ProjectApiService.goalOver100()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('goalOver100 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 goalOver100() 에러!', err);
        })
    }

    //모인금액별
    viewAmountUnder100 = () => {
       
        ProjectApiService.amountUnder100()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('amountUnder100 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 viewAmountUnder100() 에러!', err);
        })
    }

    viewAmount100to10000 = () => {
       
        ProjectApiService.amount100to1000()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('amountUnder100to1000 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 amountUnder100to1000() 에러!', err);
        })
    }

    viewAmount1000to5000 = () => {
       
        ProjectApiService.amount1000to5000()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('amountUnder100to1000 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 amount1000to5000() 에러!', err);
        })
    }

    viewAmount5000toMillion = () => {
       
        ProjectApiService.amount5000toMillion()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('amountUnder100to1000 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 amount5000toMillion() 에러!', err);
        })
    }

    viewAmountOverMillion = () => {
       
        ProjectApiService.amountOverMillion()
        .then(res => {
            this.setState({ lists : res.data });
            console.log('amountUnder100to1000 값', res.data)
        })
        .catch(err => {
            console.error('Discover.js의 amountOverMillion() 에러!', err);
        })
    }
 


    render() {
        return (   
            <div className="first">
            <div className="wrap">
                <div className="row">

                    {/* 카테고리메뉴 */}
                    <div className="dropdown">
                        <Button
                            id="dLabel"
                            role="button"
                            data-toggle="dropdown"
                            className="btn btn-link black-background white"
                            data-target="#"
                            href="/page.html">
                            <span style={{fontSize:"0.98rem"}}>카테고리</span>
                        </Button>
                        <ul
                            className="dropdown-menu multi-level"
                            role="menu"
                            aria-labelledby="dropdownMenu">
                            <li>
                            <a tabIndex="-1" onClick={this.viewProjectList}> 전체보기 &emsp;&emsp; </a>

                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>게임</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                {/* <a tabIndex="-1">게임 &emsp;&emsp; </a> */}
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">게임 전체</li>
                                <li className="dropdown-item">TRPG</li>
                                <li className="dropdown-item">모바일 게임</li>
                                <li className="dropdown-item">보드 게임</li>
                                <li className="dropdown-item">비디오 게임</li>
                                <li className="dropdown-item">카드 게임</li>
                                <li className="dropdown-item">게임 페스티벌</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>공연</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">공연 전체</li>
                                <li className="dropdown-item">무용 &emsp;</li>
                                <li className="dropdown-item">뮤지컬</li>
                                <li className="dropdown-item">연극</li>
                                </ul>
                            </li>
                            
                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>디자인</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">디자인 전체</li>
                                <li className="dropdown-item">건축공간</li>
                                <li className="dropdown-item">그래픽디자인</li>
                                <li className="dropdown-item">제품 디자인</li>
                                <li className="dropdown-item">타이포그래피</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>만화</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리소스</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>게임</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">예술 전체</li>
                                <li className="dropdown-item">공공 예술</li>
                                <li className="dropdown-item">조소·피규어</li>
                                <li className="dropdown-item">디지털 아트</li>
                                <li className="dropdown-item">전시</li>
                                <li className="dropdown-item">일러스트레이션</li>
                                <li className="dropdown-item">행위예술</li>
                                <li className="dropdown-item">혼합매체</li>
                                <li className="dropdown-item">예술 페스티벌</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>공예</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">공예 전체</li>
                                <li className="dropdown-item">캔들</li>
                                <li className="dropdown-item">조향</li>
                                <li className="dropdown-item">비누</li>
                                <li className="dropdown-item">도예</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>사진</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">사진 전체</li>
                                <li className="dropdown-item">인물사진</li>
                                <li className="dropdown-item">공간·장소사진</li>
                                <li className="dropdown-item">자연사진</li>
                                <li className="dropdown-item">동물사진</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>영화·비디오</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">영화·비디오 전체</li>
                                <li className="dropdown-item">극 영화</li>
                                <li className="dropdown-item">다큐멘터리</li>
                                <li className="dropdown-item">뮤직비디오</li>
                                <li className="dropdown-item">단편영화</li>
                                <li className="dropdown-item">애니메이션</li>
                                <li className="dropdown-item">웹드라마</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>푸드</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>음악</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>출판</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>테크</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>패션</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                            <li className="dropdown-submenu">
                            <Button class="btn btn-link black-background white" style={{width:"170px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style={{float:"left"}}>저널리즘</span>
                                <Arrow fontSize="small" style={{float:"right"}}/>  
                            </Button>
                                <ul className="dropdown-menu">
                                <li className="dropdown-item">만화 전체</li>
                                <li className="dropdown-item">그래픽 노블</li>
                                <li className="dropdown-item">웹툰</li>
                                <li className="dropdown-item">만화책</li>
                                <li className="dropdown-item">만화·웹툰 리스소</li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                {/* 상태 분류 */}
                <div className="btn-group show-on-hover">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        상태 <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li className="dropdown-item" onClick={this.viewProjectList}>전체 프로젝트</li>
                        <li className="dropdown-item" onClick={this.viewStateIng}>진행중 프로젝트</li>
                        <li className="dropdown-item" onClick={this.viewStateEnd}>성사된 프로젝트</li>
                        
                    </ul>
                </div>

                {/* 달성률 분류 */}
                <div className="btn-group show-on-hover">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        달성률 <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li className="dropdown-item" onClick={this.viewProjectList}>전체보기&emsp;&emsp;</li>
                        <li className="dropdown-item" onClick={this.viewGoalUnder75}>75% 이하&emsp;&emsp;</li>
                        <li className="dropdown-item" onClick={this.viewGoalUnder75to100}>75%~100%</li>
                        <li className="dropdown-item" onClick={this.viewGoalOver100}>100% 이상</li>
                    </ul>
                </div>

                {/* 금액별 분류 */}
                <div className="btn-group show-on-hover">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        모인 금액 <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li className="dropdown-item" onClick={this.viewAmountUnder100}>1백만원 이하</li>
                        <li className="dropdown-item" onClick={this.viewAmount100to10000}>1백만원~1천만원</li>
                        <li className="dropdown-item" onClick={this.viewAmount1000to5000}>1천만원~5천만원</li>
                        <li className="dropdown-item" onClick={this.viewAmount5000toMillion}>5천만원~1억원</li>
                        <li className="dropdown-item" onClick={this.viewAmountOverMillion}>1억원 이상</li>
                    </ul>
                </div>

                {/* 필터초기화 */}
                <div className="button" onClick={this.viewProjectList}>
                    <Button variant="outlined"><CachedIcon color="disabled"/> 필터 초기화</Button>
                </div>
                </div>
            </div>
            <hr />

{/* ***************************************************************************** */}
                            {/* 위로는 필터 구성
                        아래로는 프로젝트 화면 구성 */}
{/* ***************************************************************************** */}


<div className="wrapper">
<div className="row">
<div className="col-md-12">
<span className="countProject" style={{float:"left"}}>
    <span style={{color:"#ff4646"}}>{this.state.lists.length}</span>개의 프로젝트가 있습니다.
    </span>    

        <select id="filter" name="filter">
            <option value="">인기순 ▼</option>
            <option value="">최신순 ▼</option>
            <option value="">최다 후원순 ▼</option>
            <option value="">최다 금액순 ▼</option>
            <option value="">마감 임박순 ▼</option>
        </select>
   
      </div>
</div>

{/* 프로젝트 구성 페이지 */}

    <div className="row">
        {this.state.lists.map(list => 
            <Item key={list.id} longTitle={list.longTitle} mainImg={list.mainImg} 
                category={list.category} creatorId={list.creatorId} content={list.content}
                fundedAmount={list.fundedAmount} fundingGoalAmount={list.fundingGoalAmount}
                fundingEnd={list.fundingEnd} pId={list.id} url={list.url} />
        )}
    </div>
  </div>
</div>
        );
    }
}


export default Discover;
