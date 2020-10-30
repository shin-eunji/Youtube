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
            to: '/feed/trending',
            isActive: false,
        },
        {
            icon: <BsCollectionPlayFill/>,
            name: '구독',
            to: '/feed/subscriptions',
            isActive: false,
        },
        {
            icon: <MdVideoLibrary/>,
            name: '보관함',
            to: '/feed/library',
            isActive: false,
        },
        {
            icon: <MdHistory/>,
            name: '시청 기록',
            to: '/feed/history',
            isActive: false,
        },
        {
            icon: <CgPlayButtonR/>,
            name: '내 동영상',
            to: '/feed/my_videos',
            isActive: false,
        },
        {
            icon: <MdLocalMovies/>,
            name: '내 영화',
            to: '/feed/storefront',
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
    ]
}