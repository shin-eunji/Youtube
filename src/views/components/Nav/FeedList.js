import React from "react";
import {
    AiFillBulb,
    AiFillClockCircle, AiFillFlag, AiFillLike, AiFillYoutube, BiCommentError,
    BsCollectionPlayFill, BsFillQuestionCircleFill, CgLivePhoto,
    CgPlayButtonR, CgPlayList, FaGamepad,
    MdHistory,
    MdHome,
    MdLocalMovies,
    MdVideoLibrary, RiAirplayFill,
    RiFireFill, RiSettings5Fill
} from "react-icons/all";

export const feedList = {
    feed: [
        {
            icon: <MdHome/>,
            name: '홈',
            to: '/',
            isActive: true,
        },
        {
            icon: <RiFireFill/>,
            name: '인기',
            to: '/Feed/trending',
            isActive: false,
        },
        {
            icon: <BsCollectionPlayFill/>,
            name: '구독',
            to: '/Feed/subscriptions',
            isActive: false,
        },
        {
            icon: <MdVideoLibrary/>,
            name: '보관함',
            to: '/Feed/library',
            isActive: false,
        },
        {
            icon: <MdHistory/>,
            name: '시청 기록',
            to: '/Feed/history',
            isActive: false,
        },
        {
            icon: <CgPlayButtonR/>,
            name: '내 동영상',
            to: '/Feed/my_videos',
            isActive: false,
        },
        {
            icon: <MdLocalMovies/>,
            name: '내 영화',
            to: '/Feed/storefront',
            isActive: false,
        },
        {
            icon: <AiFillClockCircle/>,
            name: '나중에 볼 동영상',
            to: '/playlist',
            isActive: false,
        },
        {
            icon: <AiFillLike/>,
            name: '좋아요 표시한 동영상',
            to: '/playlist',
            isActive: false,
        },
        {
            icon: <RiAirplayFill/>,
            name: '관련 재생목록 -',
            to: '/watch',
            isActive: false,
        },
        {
            icon: <CgPlayList/>,
            name: '즐겨찾기',
            to: '/playlist',
            isActive: false,
        },
    ],
    more: [
        {
            icon: <AiFillYoutube/>,
            name: 'Youtube Premium',
            to: '/premium',
            isActive: false,
        },
        {
            icon: <MdLocalMovies/>,
            name: '영화',
            to: '/movie',
            isActive: false,
        },
        {
            icon: <FaGamepad/>,
            name: '게임',
            to: '/game',
            isActive: false,
        },
        {
            icon: <CgLivePhoto/>,
            name: '실시간',
            to: '/live',
            isActive: false,
        },
        {
            icon: <AiFillBulb/>,
            name: '학습',
            to: '/study',
            isActive: false,
        },
    ],
    setting: [
        {
            icon: <RiSettings5Fill/>,
            name: '설정',
            to: '/setting',
            isActive: false,
        },
        {
            icon: <AiFillFlag/>,
            name: '신고 기록',
            to: '/report',
            isActive: false,
        },
        {
            icon: <BsFillQuestionCircleFill/>,
            name: '고객센터',
            to: '/support',
            isActive: false,
        },
        {
            icon: <BiCommentError/>,
            name: '의견 보내기',
            to: '/answer',
            isActive: false,
        },
    ],
    info: [
        {
            name: '정보',
            to: '/',
            isActive: false,
        },
        {
            name: '프레스',
            to: '/',
            isActive: false,
        },
        {
            name: '저작권',
            to: '/',
            isActive: false,
        },
        {
            name: '문의하기',
            to: '/',
            isActive: false,
        },
        {
            name: '크리에이터',
            to: '/',
            isActive: false,
        },
        {
            name: '광고',
            to: '/',
            isActive: false,
        },
        {
            name: '개발자',
            to: '/',
            isActive: false,
        },
        {
            name: '이용약관',
            to: '/',
            isActive: false,
        },
        {
            name: '개인정보 보호',
            to: '/',
            isActive: false,
        },
        {
            name: '정책 및 안전',
            to: '/',
            isActive: false,
        },
        {
            name: 'Youtube 작동의 원리',
            to: '/',
            isActive: false,
        },
        {
            name: '새로운 기능 테스트하기',
            to: '/',
            isActive: false,
        },
    ],
}